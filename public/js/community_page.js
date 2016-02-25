'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializeCommunityPage();
    console.log("Initialized page");
})

/*
 * Function that is called when the document is ready.
 */
function initializeCommunityPage() {
    $('a[id|="link"]').click(confirmAndGo);
    $('#submitBtn').hide();
    console.log("Applied click function");
}
function confirmAndGo(name, link) {
    console.log("Clicked a link");
    var ask = window.confirm("Do you want to leave Crescendo to "+ name + "?");
    if (ask) {
        console.log("Moving to site");
        document.location.assign(link);
    }
}