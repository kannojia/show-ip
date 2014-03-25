
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var Request = require("sdk/request").Request;

var url;
var domain_name;
var requestURL;


var showipWidget = widgets.Widget({
	id : "show-ip",
	label : "Display IP Address of current Page",
	contentURL : data.url("lens_icon.png"),
	contentScriptFile : [data.url("click_handler.js"),data.url("jquery-1.8.3.min.js")],
	panel : infoPanel,
	onClick : function() {
		var curtab = tabs.activeTab;
		url = curtab.url;
		this.port.emit('getDomain',url);
	}
	
});

showipWidget.port.on("setDomain", function(domain) {
	domain_name=domain;
	getDomainInfo(domain_name);
});


function getDomainInfo(domain) {
	requestURL = "http://dazzlepod.com/ip/"+domain+".json";
	//requestDomainInfo.get();

	Request({
	  url: requestURL,
	  onComplete: function (response) {
	    var out = response.json;
	    console.log("Response: "+out.ip);

	    //alert(out);
	  }
	}).get();

}
