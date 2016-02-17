'use strict';

$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	
	$('.listing').click(extendTab);
}
function extendTab(e){
	e.preventDefault();
	$(this).css("background-color","red");
	$(this).next().slideToggle( "slow" );
	/*$(this).after("<div class='row row-bottom-margin info' style = 'margin-bottom: 0px; background-color: #151515; background-size: 100% auto ; padding-bottom: 0px;overflow:hidden;'>  </div>");
		*/

}