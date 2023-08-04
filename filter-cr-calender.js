// ==UserScript==
// @name         Remove CR calender dubs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filters away all the dub announcements in the release calendar to make it more readable
// @author       Frederik Haagensen
// @match        https://www.crunchyroll.com/simulcastcalendar
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let daysList = document.getElementsByClassName('days')[0];
    for (let i = 0; i < daysList.children.length; ++i) {
        let dayList = daysList.children[i];
        if (!dayList.classList.contains('day')) continue;

        let releases = dayList.getElementsByClassName('releases')[0];
        let removeList = [];
        for (let j = 0; j < releases.children.length; ++j) {
            let release = releases.children[j];
            if (release.innerHTML.includes(' Dub)')) {
                removeList.push(release);
            }
        }
        for (const release of removeList) {
            releases.removeChild(release);
        }
    }
})();
