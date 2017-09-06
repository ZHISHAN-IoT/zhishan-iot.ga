window.userCultureHelper =
{
    InitializeHelper: function () {
        
        $('.selected-culture').on('click', userCultureHelper.OnCultureSelect);

        $('.user-selected-culture').hide();
        
        // get cookie 
        var cultureCookie = userCultureHelper.ReadCookie("__pnrculture");

        if (!cultureCookie) {
            cultureCookie = "en-US";
        }

        $.each($('.user-selected-culture'), function (index, cultureElement) {
            var elementId = $(cultureElement).attr('id');

            if (elementId != 'culture-' + cultureCookie.toLowerCase()) {
                $(cultureElement).show();
            }
        });
        
    },
    ReadCookie: function (name) {
        
        var nameEq = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
        }
        return null;
    },

    CreateCookie: function (name, value, days) {
        var expires;
        
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    EraseCookie: function (name) {
        userCultureHelper.CreateCookie(name, "", -1);
    },

    OnCultureSelect: function (e) {
        e.preventDefault();

        //earse cookie and then let server set the new one
        userCultureHelper.EraseCookie("__pnrculture");

        window.location.href = this.href;
    }
}