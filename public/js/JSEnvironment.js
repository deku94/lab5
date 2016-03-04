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

function extendTab(event){
	event.preventDefault();
	var link=($(this).next()).attr('id');
	//console.log(link);
	//var icon=$(this).find('#dir');
	//$(this).css("background-color","red");
	/*$(this).next().slideToggle( "slow" );
	
	$(this).toggleClass("row-bottom-margin");
	
	$(icon).toggleClass("fa-sort-desc");
	$(icon).toggleClass("fa-sort-asc");*/
	$.get("environment/view/"+link,views);
	/*$(this).after("<div class='row row-bottom-margin info' style = 'margin-bottom: 0px; background-color: #151515; background-size: 100% auto ; padding-bottom: 0px;overflow:hidden;'>  </div>");
		*/

}
function views(e){
	console.log(e);
	var key;
	var height= String(e['equip'].length*150)+"px";
	var n=e['OGID'];
	$("[id='"+n+"']"+' div').css('max-height',height);
	var text="";
	for(key in e['equip']){
		//console.log(e['equip'][key]);
		
		var abbr=e['equip'][key];
		//console.log($( "[id="+n+"]"+' div div span'));
		text=text+"Equipment:" + abbr['name']+"<br>Type:"+abbr['type']+"<br>Usage:"+abbr['usage']+"<br><br>";

		
	}

	$("[id='"+n+"']"+' div div span p').html(text);
	$("[id='"+n+"']"+' div').css('max-height',height);
	var link="[id='"+n+"']";
	toggling(link);
	return;

}
function toggling(l){

	$(l).slideToggle( "slow" );
	
	$(l).prev().toggleClass("row-bottom-margin");
	var icon=($(l).prev()).find('#dir')
	
	$(icon).toggleClass("fa-sort-desc");
	$(icon).toggleClass("fa-sort-asc");
}
/*
It should be sound level, environment name, the equipment used in the environment.
For now. I'll deal with styling and standardizing CSS when I get back

Associated environments
Name of equipment
*/


