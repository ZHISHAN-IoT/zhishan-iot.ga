(function($) {

    var stringError_Email = "Enter a valid e-mail address.";
    var stringError_Email_b = "Enter a valid business e-mail address.";
    var stringError_Url = "Enter a valid url address";
    var stringError_required = "This field is required.";
    var stringError_Phone = "Enter a valid phone number";
    var stringError_Radio = "Check the radio";
    var stringError_Combo = "Select a think";
    var stringError_Check = "Please check the box";

    var blocked_isv = ['163.com', '163.net', '169.cc', '188.net', '263.net', '2911.net', '2RD.net', '363.net', '371.net', '39.net', '5415.com', '777.net.cn', '8848.netv', '888.nu', '88998.com', '990.net', 'Amei.cc', 'animail.com', 'AnyEmail.net', 'aol.com', 'care2.com', 'China.com', 'ChinaArmy.net', 'ChinaHot.net', 'Chinaice.com', 'Chinaren.com', 'Chinese.com', 'ChineseMail.org', 'cncou.com', 'cnnb.net', 'Eguo.com', 'Email.com.cn', 'EveryRoad.net', 'eyou.com', 'FM365.com', 'FrontTraining.com', 'gmail.com', 'gmx.at', 'GMX.CO.UK', 'gmx.com', 'gmx.de', 'gmx.net', 'google.com', 'Graffiti.net', 'HKEM.com', 'HKGX.com', 'HKid.com', 'hl.cninfo.net', 'HongKong.com', 'hotmail.com', 'hotmail.de', 'hotmail.fr', 'hotmail.it', 'hotmail.ru', 'inbox.com', 'inbox.ru', 'IQIQ.net', 'ISSIHK.net', 'Kitty.cc', 'kzinfo.net', 'LycosBox.com', 'lycosmail.com', 'mail.com', 'mail.ru', 'mailinator.com', 'mailtothis.com', 'MailTW.com', 'MarkGuide.com', 'MedioMail.com', 'mol.com.cn', 'Muzi.com', 'MyRice.com', 'Ningbo.net', 'OkTw.net', 'ON.com.tw', 'online.de', 'Online.sh.cn', 'Online.tj.cn', 'outlook.com', 'peacemail.com', 'rediffmail.com', 'ReXian.com', 'Sharklasers.com', 'sina.cn', 'Sina.com', 'snail-mail.com', 'Sobao.com', 'Soyou.com', 'SportAsia.com', 'Taiwan.com', 'Taiwandot.com', 'Teddy.cc', 'Trash-mail.com', 'TPEMail.net.tw', 'uBlaze.com', 'vegemail.com', 'whale-mail.com', 'wildmail.com', 'XD990.net', 'Yahoo.cn', 'yahoo.co.in', 'yahoo.co.jp', 'yahoo.co.uk', 'yahoo.com', 'yahoo.com.au', 'Yahoo.com.tw', 'yahoo.de', 'yahoo.es', 'yahoo.fr', 'yahoo.in', 'yp.com.mo'];

    var Validating = function() {
        var apply = {
            required: {

                check: function(obj) {

                    if (obj.typeSel == 0) {
                        var value = obj.field.val();
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                    if (obj.typeSel == 1) {
                        if (obj.field[0].selectedIndex != 0) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                    if (obj.typeSel == 6) { //select multiple
                        var value = obj.field.val();
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                    if (obj.typeSel == 2) {
                        var value = obj.field.is(":checked");
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                    if (obj.typeSel == 3) {
                        var value = obj.field.is(":checked");;
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                    if (obj.typeSel == 4) {
                        var value = obj.field.val();
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                    if (obj.typeSel == 5) {
                        var value = obj.field.val();
                        if (value) {
                            return true;
                        } else {
                            return false;
                        }

                    }


                },
                msg: stringError_required
            },
            phone: {
                check: function(obj) {
                    current_ = obj;
                    var value = obj.field.val();
                    if (value) {
                        return regexp(value, "(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)");
                    } else {
                        return false;
                    }
                },
                msg: stringError_Phone
            },
            email: {
                check: function(obj) {
                    var value = obj.field.val();
                    if (value) {
                        return regexp(value.toLowerCase(), "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])");
                        return v_email;
                    } else {
                        return false;
                    }
                },
                msg: stringError_Email
            },
            emailBusiness: {
                check: function(obj) {
                    var value = obj.field.val();
                    if (value) {
                        var v_email = regexp(value.toLowerCase(), "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])");
                        if (v_email) {
                            return isv_check(value.toLowerCase());
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                },
                msg: stringError_Email_b
            },
            url: {

                check: function(obj) {
                    var value = obj.field.val();
                    if (value) {
                        return regexp(value.toLowerCase(), "((http|https)(:\/\/))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(\/{1}[a-zA-Z0-9]+)*\/?");
                    } else {
                        return false;
                    }
                },
                msg: stringError_Url
            }

        }

        var regexp = function(value, pattern) {

            var regExp = new RegExp(pattern, "");
            return regExp.test(value);
        }

        var isv_check = function(value) {
            var rx = /^([\w\.]+)@([\w\.]+)$/;
            var match = rx.exec(value);
            for (isv in blocked_isv) {
                if (match[2] == blocked_isv[isv].toLowerCase()) {
                    return false;
                }
            }
            return true;

        }

        return {

            setValidation: function(name) {

                return apply[name];
            },

            newScheme: function(name, content) {

                apply[name] = content;
            }
        }
    }

    $.validating = new Validating();


    var Error = function() {

        var error = {
            addError: {
                add: function(obj, err) {
                    if (!$(obj.field).next(".error-field").length) {
                        var target;
                        if ($(obj.field).is(':radio')) {
                            var rnum = obj.field.length;
                            target = $(obj.field[rnum - 1]).parent();
                        } else {
                            target = $(obj.field);

                        }
                        var spanErr = $("<span>").addClass("error-field").insertAfter(target);
                        spanErr.html(err);
                    }
                },
                remove: function(obj) {
                    var target;
                    if ($(obj.field).is(':radio')) {
                        var rnum = obj.field.length;
                        target = $(obj.field[rnum - 1]).parent();
                        if ($(target).next(".error-field").length) {
                            $(target).next(".error-field").remove();
                        }
                    } else {
                        if ($(obj.field).next(".error-field").length) {
                            $(obj.field).next(".error-field").remove();
                        }
                    }

                }
            }
        }
        return {
            setError: function(name) {
                return error[name];

            },
            setNewError: function(name, content) {
                error[name] = content;
            }

        }
    }
    $.error = new Error();

    $.fn.formValid = function(options) {

        var defaults = {
            required: [],
            email: [],
            emailBusiness: [],
            submitUrl: false,
            action: [],
            url: [],
            phone: [], //phone or fax
            eventType: "change", //options: "change", "keyup";
            stringError_Email: "Enter a valid e-mail address.",
            stringError_Email_b: "Enter a valid business e-mail address.",
            stringError_Url: "Enter a valid url address.",
            stringError_required: "This field is required.",
            stringError_Phone: "Enter a valid phone number.",
            getRuleError: "addError",
            onValid: function() {}
        };

        var options = $.extend(defaults, options);

        var fieldsObj = {
            required: options.required,
            email: options.email,
            emailBusiness: options.emailBusiness,
            url: options.url,
            phone: options.phone
        }

        var Form = function(form) {
            var o = fieldsObj;
            this.form = form;
            var fields = [];
            this.fields = fields;


            for (var i in o) {

                if (o.hasOwnProperty(i)) {

                    var arr = [];
                    arr = o[i];

                    if (arr.length > 0) {
                        for (var m = 0; m <= arr.length - 1; m++) {

                            var _field;
                            var s;
                            if ($('input:text[name=' + arr[m] + ']').length) { //type input text
                                _field = $('input:text[name=' + arr[m] + ']');
                                s = 0;
                            }
                            if ($('select[name=' + arr[m] + ']').length) { //type selector
                                _field = $('select[name=' + arr[m] + ']');
                                if ($('select[name=' + arr[m] + ']').prop('multiple')) {
                                    s = 6;
                                } else {
                                    s = 1;
                                }
                            }

                            if ($('input:radio[name=' + arr[m] + ']').length) { //type radio
                                _field = $('input:radio[name=' + arr[m] + ']');
                                s = 2;
                            }
                            if ($('input:checkbox[name=' + arr[m] + ']').length) { //type checkbox
                                _field = $('input:checkbox[name=' + arr[m] + ']');
                                s = 3;
                            }
                            if ($('textarea[name=' + arr[m] + ']').length) { //type textare
                                _field = $('textarea[name=' + arr[m] + ']');
                                s = 4;
                            }
                            if ($('input:file[name=' + arr[m] + ']').length) { //type file
                                _field = $('input:file[name=' + arr[m] + ']');
                                s = 5;
                            }

                            var field = new Field(_field);
                            field.types(i);
                            field.typeSelector(s);
                            fields.push(field);

                        }
                    }
                }

            }
        }

        Form.prototype = {
            validate: function() {
                var obj = this.fields;
                var q = 0;
                for (q = 0; q <= obj.length - 1; q++) {
                    obj[q].validate();
                }
            },
            Valid: function() {
                var obj = this.fields;
                for (var i = 0; i <= obj.length - 1; i++) {
                    if (!obj[i].valid) {
                        obj[i].field.focus();
                        return false;
                    }
                }
                return true;
            },
            send: function(e) {
                if (!options.submitUrl) {
                    e.preventDefault();
                }
                options.onValid.call(this);

                //console.log("data send"); /* delete */
                //action to be done when sending: cookie, ip registration.
            }
        }

        var Field = function(field) {
            this.type;
            this.typeSel;
            this.field = field;
            this.valid = false;
            this.error = options.getRuleError;
            this.attach(options.eventType);
        }

        Field.prototype = {
            types: function(type) {
                this.type = type;
            },
            typeSelector: function(type) {
                this.typeSel = type;
            },
            attach: function(event) {
                var obj = this;
                if (event == "change") {
                    obj.field.bind("change", function() {
                        return obj.validate();
                    });
                }
                if (event == "keyup") {
                    obj.field.bind("keyup", function(e) {
                        return obj.validate();
                    });
                }
            },
            validate: function() {
                if ($(this.field).is(':visible')) {
                    var GetRule = $.validating.setValidation(this.type);
                    var val = GetRule.check(this);
                    this.valid = val;
                    var error_ = $.error.setError(this.error);
                    if (!this.valid) {
                        error_.add(this, GetRule.msg);
                    } else {
                        error_.remove(this);
                    }
                } else {
                    this.valid = true;
                }
                //console.log("The message error: " + GetRule.msg);
            }
        }


        return this.each(function() {

            stringError_Email = options.stringError_Email;
            stringError_Url = options.stringError_Url;
            stringError_required = options.stringError_required;
            var obj = new Form($(this));
            $(this).bind("submit", function(e) {
                obj.validate();
                if (!obj.Valid()) {
                    e.preventDefault();
                } else {
                    obj.send(e);
                }

            });

        });


    };

})(jQuery);
