
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var showipWidget = widgets.Widget({
	id : "show-ip",
	label : "Display IP Address of current Page",
	contentURL : data.url("lens_icon.png"),
	contentScriptFile : [data.url("click_handler.js"),data.url("jquery-1.8.3.min.js")],

	onClick : function() {
		var curtab = tabs.activeTab;
		this.port.emit('clicked',curtab.url);
	}
	
});

