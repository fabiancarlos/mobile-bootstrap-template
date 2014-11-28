
/***
	* List Nodes
***/

var nav_section_node_list = document.getElementsByClassName('nav-section'),
    section_content_node_list = document.getElementsByClassName('content-section');

/***
	* Screen Size
	* http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
***/
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    screen_width = w.innerWidth || e.clientWidth || g.clientWidth,
    screen_height = w.innerHeight|| e.clientHeight|| g.clientHeight;

console.log(screen_width + ' × ' + screen_height);

/***
	* IOS
***/

var ios = window.device 
	     && window.device.platform 
	     && window.device.platform.toLowerCase() == "ios"
	     && parseFloat(window.device.version) >= 7.0;

var body = document.body;
if (ios){
    body.className = body.className + ' iphone-fix-bar';
    screen_height = screen_height - 20;
}

/*** 
	* NAV SECTION
	* getElementsByClassName: doesn't work with IE8 -> http://caniuse.com/#feat=getelementsbyclassname 
	* 
***/

var nav_section_height = nav_section_node_list.length > 0 ? nav_section_node_list[0].scrollHeight : null;

console.log("Nav Secton Height: ", nav_section_node_list[0].scrollHeight);

/*** 
	* SECTION CONTENT
	* getElementsByClassName: doesn't work with IE8 -> http://caniuse.com/#feat=getelementsbyclassname 
	* 
***/

var section_content = section_content_node_list[0];

/* Only one section content */
if (section_content_node_list.length > 1) alert("You have more than one section content!");

var apply_section_content_height = function(){
	var count_nav_section = nav_section_node_list ? nav_section_node_list.length : 0;
	var total_nav_section_height = count_nav_section * nav_section_height;
	var section_content_height = screen_height - total_nav_section_height;

	section_content.style.height = section_content_height + 'px';
}

apply_section_content_height();

/* BUTTONS */

var btns_node_list = document.getElementsByClassName('btn');

for (var i = 0; i < btns_node_list.length; ++i){

	if (btns_node_list[i].nodeType !== 1) break;

	/* buttons active */
	btns_node_list[i].addEventListener('touchstart', function(){
	  if(this.className.indexOf('active') === -1){
	  	this.className = this.className + ' active';
	  }
	});
	btns_node_list[i].addEventListener('touchend', function(){
		this.className = this.className.replace('active', '');
	});
	/* fix when active is stuck bug */
	btns_node_list[i].addEventListener('touchcancel', function(){
		this.className = this.className.replace('active', '');
	});
  
}
