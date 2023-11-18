// ==UserScript==
// @name         对分易下载
// @license MIT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  破解对分易下载，将禁止下载替换为下载链接
// @author       Zky
// @match        https://www.duifene.com/_FileManage/PC/StFileManage.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        document.querySelectorAll('div.action > div > span').forEach(function(downloadSpan, index) {
            var fileLinkElement = downloadSpan.closest('div[data-id]').querySelector('a[onclick^="FileViewAction"]');
            if (fileLinkElement) {
                var fileLink = fileLinkElement.getAttribute('onclick');
                var filePath = /FileViewAction\(\d+,'([^']+)'/i.exec(fileLink)[1];
                var downloadLink = 'https://fs.duifene.com' + filePath;
                downloadSpan.innerHTML = '<a href="' + downloadLink + '" style="text-decoration: underline; color: blue; cursor: pointer;">下载</a>';
            }
        });
    }, 3000);
})();
