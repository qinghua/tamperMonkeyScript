// ==UserScript==
// @name         Google on baidu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Google it!
// @author       You
// @match        https://www.baidu.com/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    $('#su').after('<input type="button" id="google" value="Google一下" class="btn self-btn bg s_btn" style="background-color:grey;" />');
    $("#google").click(function() {
        googleIt();
    });

    function googleIt() {
        var searchText = $('#kw').val();
        GM_openInTab(getGoogleUrl(searchText), false);
    }

    function getGoogleUrl(searchText) {
        return 'https://www.google.com/search?q=' + searchText;
    }
})();
