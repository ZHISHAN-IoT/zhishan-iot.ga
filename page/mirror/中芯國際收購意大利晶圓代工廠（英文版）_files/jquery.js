//NOTE: IE6 / jQuery 1.5.1: Cannot expand sub menu$(document).ready(function() {	ddsmoothmenu.init({		mainmenuid: "smoothmenu", //menu DIV id		orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"		classname: 'ddsmoothmenu', //class added to menu's outer DIV		//customtheme: ["#1c5a80", "#18374a"],		contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]	});});