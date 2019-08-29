// ==UserScript==
// @name         [reCaptcha Skip]
// @version      1.0.0
// @description  This solve google recaptcha automatic after 2.5 sec.
// @author       Janik313 [github.com/Janik313]
// @match	     *
// @include      *
// @grant        none
// @namespace    https://github.com/Janik313/recaptchaSkip/blob/master/%5Brecaptcha%20skip%5D.user.js
// ==/UserScript==

var domain = (window.location != window.parent.location) ? document.referrer.toString() : document.location.toString();
if (domain.indexOf('*') == -1 && domain.indexOf('*') == -1 && domain.indexOf('*') == -1) { //You can exclude domains here (advanced)
    if (location.href.indexOf('google.com/recaptcha') > -1) {
        var clickCheck = setInterval(function() {
            if (document.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0) {
                clearInterval(clickCheck);
                document.querySelector('.recaptcha-checkbox-checkmark').click();
            }
        }, 2500);
    } else {
        var forms = document.forms;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].innerHTML.indexOf('google.com/recaptcha') > -1) {
                var rc_form = forms[i];
                var solveCheck = setInterval(function() {
                    if (grecaptcha.getResponse().length > 0) {
                        clearInterval(solveCheck);
                        rc_form.submit();
                    }
                }, 100);
            }
        }
    }
}
