//V1.5
//JQ-1.12
var IFX = IFX || {};

(function ($) {
    IFX.cart = (function (options) {
        var settings = $.extend({
            'temp': null,
            'lastCount': 0,
            'baseurl_ws': 'http://localhost:38608/',
            'baseurl_rootcart': '/cart/',
            'baseurl': 'https://infineon.transim.com/cart/',
            'baseurl_stage': 'https://stage-infineon.transim.com/cart/',
            'cartID': null,
            'isAddingItem': false
        }, options);

        //  Get GUID for cart ID
        var getUUID = function () {
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });

            return uuid;
        };

        // Initialize the application
        var init = function () {
            var href = window.location.href;
            if (href.match('(local|dev|stage|quality|global)[-.]infineon\.transim\.com')) {
                settings.baseurl = settings.baseurl_rootcart;
            } else if (href.indexOf("localhost") > 0) {
                settings.baseurl = settings.baseurl_ws;
            } else if (href.indexOf('www.new.infineon.virtual-identity.com/') !== -1)
                settings.baseurl = settings.baseurl_stage;

            var CartCookie = cookieToObject(readCartCookie());

            if (CartCookie.CartID === void 0)
                CartCookie.CartID = getUUID();

            settings.CartID = CartCookie.CartID;

            var dataForm = document.createElement("form");
            dataForm.id = "cartForm";
            dataForm.onsubmit = function () {
                var shopWindow = null;
                try {
                    shopWindow = window.open(settings.baseurl + "cart.aspx?cartid=" + settings.CartID, "Infineon-Shopping-Cart", "width=1024,height=400,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes");
                }
                catch (exc) {
                    shopWindow = window.open(settings.baseurl + "cart.aspx?cartid=" + settings.CartID, "", "width=1024,height=400,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes");
                }
                shopWindow.focus();
            };

            window.onfocus = function () {
                var CartCookie = cookieToObject(readCartCookie());
                if (CartCookie.Count === void 0 || CartCookie.Count === 0)
                    return;

                getCart();
            };

            $('#cartForm').action = settings.baseurl + "cart.aspx?cartid=" + settings.CartID;
            dataForm.setAttribute("method", "post");
            dataForm.setAttribute("style", "display:none");

            var dataField = document.createElement("input");
            dataField.setAttribute("id", "cartFormData");
            dataField.setAttribute("name", "cartFormData");
            dataField.setAttribute("type", "text");
            dataForm.appendChild(dataField);

            $('body').append(dataForm);

            setCartCount(CartCookie);
            dataField.value = CartCookie;

            $(".cart-button").click(function () {
                IFX.cart.OpenCart();
            });

            initCartButtons(CartCookie);

            return true;
        };

        var initCartButtons = function (CartCookie) {
            if ($(".cart-addToCart").length === 0)
                return false;

            $(".cart-addToCart").each(function () {
                $(this).html('Add To Cart');
                var pid = $(this).attr("pid");
                var incart = false;
                if (CartCookie !== null && CartCookie.Count > 0) {
                    // determine if part in cart already
                    for (key in CartCookie.PartList) {
                        if (CartCookie.PartList[key].PartId === pid)
                            incart = true;
                    }
                }

                // change button behavior/text based on if part in cart
                if (incart) {
                    $(this).html("In Cart");
                    $(this).click(function () {
                        IFX.cart.OpenCart();
                    });

                    $(this).mouseover(function () {
                        $(this).html("View Cart");
                    });
                    $(this).mouseout(function () {
                        $(this).html("In Cart");
                    });
                }
                else {
                    $(this).unbind('mouseover');
                    $(this).unbind('mouseout');
                    $(this).unbind('click');
                    $(this).click(function () {
                        IFX.cart.AddToCart(pid, 1);

                        $(this).html("In Cart").unbind('click');

                        $(this).click(function () {
                            IFX.cart.OpenCart();
                        });

                        $(this).mouseover(function () {
                            $(this).html("View Cart");
                        });

                        $(this).mouseout(function () {
                            $(this).html("In Cart");
                        });
                    });
                }
            });
        };

        var setCartCount = function (CartCookie) {
            if (typeof CartCookie === 'undefined' || typeof CartCookie.Count === 'undefined' || CartCookie.Count === 0) {
                settings.lastCount = 0;

            } else {
                settings.lastCount = CartCookie.Count;
                $('input#cartFormData').val(CartCookie);
            }

            $(".cart-button .cart-count").text(settings.lastCount);
        };

        var getCart = function () {
            if (settings.isAddingItem === true)
                return;

            $.ajax({
                type: 'POST',
                dataType: 'jsonp',
                jsonp: 'cookie',
                url: settings.baseurl + 'api.ashx?f=GetCart&callbackfn=?',
                success: function (data) {
                    if (settings.isAddingItem === true) {
                        return;
                    }

                    if (data.cartData === void 0) {
                        data.cartData = data.cookie;
                    }

                    setCartCookie(data.cartData);
                    var CartCookie = cookieToObject(readCartCookie());
                    setCartCount(CartCookie);

                    initCartButtons(CartCookie);
                }
            });
        };

        var OpenCart = function () {
            $('#cartForm').submit();
        };

        var addAllToCart = function () {
            console.log("Add all to cart");
            $.ajax({
                type: 'POST',
                dataType: 'jsonp',
                data: {
                    partNumber: "*",
                    quantity: 1,
                    cartID: settings.CartID
                },
                url: settings.baseurl + 'api.ashx?f=QA_AddAllToCart&callbackfn=?',
                success: function (data) {
                    $(".cart-button .cart-count").text(data.count);
                    if (data.cartData === void 0) {
                        data.cartData = data.cookie;
                    }

                    setCartCookie(data.cartData);
                    $('#cartFormData').val(data.cartData);
                },
                error: function (exc) {
                    console.log('QA_AddAllToCart', exc);
                }
            });
        };

        var AddToCart = function (partid, quantity) {
            settings.isAddingItem = true;
            /* Validation
            // validate quantity
            if (isNaN(qty)) {
                alert('Please enter a numeric value for quantity (1 - 100000).');
                t.val(1);
                return;
            }

            if (qty <= 0) {
                alert('Min value for quantity is 1.');
                t.val(1);
                return;
            }

            if (qty > 100000) {
                alert('Max value for quantity is 100000.');
                t.val(100000);
            }
            */

            $.ajax({
                type: 'POST',
                dataType: 'jsonp',
                jsonp: 'cookie',
                data: {
                    partID: partid,
                    quantity: quantity,
                    cartID: settings.CartID
                },
                url: settings.baseurl + 'api.ashx?f=AddToCart&callbackfn=?',
                success: function (data) {
                    if (data.cartData === void 0) {
                        data.cartData = data.cookie;
                    }

                    setCartCookie(data.cartData);
                    $(".cart-button .cart-count").text(data.count);
                    $('#cartFormData').val(data.cartData);

                    if (data.count === settings.lastCount) {
                        initCartButtons(cookieToObject(readCartCookie()));
                    }

                    settings.lastCount = data.count;
                    settings.isAddingItem = false;
                },
                error: function (exc) {
                    console.log('AddToCart', exc);
                }
            });
        };

        var readCartCookie = function () {
            var name = "infineonCart=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1);
                if (c.indexOf(name) === 0)
                    return c.substring(name.length, c.length);
            }

            return null;
        };

        var setCartCookie = function (cartData, expireDays) {
            if (!cartData)
                return;

            if (typeof expireDays === 'undefined')
                expireDays = 30;

            var d = new Date();
            d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'infineonCart=' + cartData + '; ' + expires + ';path=/';
        };

        var cookieToObject = function (cookieData) {
            if (cookieData === void 0 || cookieData === null)
                return {};

            var cookie = $.parseJSON(decodeURIComponent(cookieData));
            if (cookie.CartID === void 0 && cookie.seshGuid !== void 0)
                cookie.CartID = cookie.seshGuid;

            return cookie;
        };

        // Return the public facing methods for the App
        return {
            init: init,
            AddToCart: AddToCart,
            OpenCart: OpenCart,
            AddAllToCart: addAllToCart
        };
    }());
})(jQuery);

IFX.cart.init();