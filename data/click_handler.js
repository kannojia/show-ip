
function getDomainInfo(url) {
	var a = document.createElement('a');
	a.href = url;

	var domain = a.hostname;
	var requestURL = "http://dazzlepod.com/ip/"+domain+".json";
    alert(requestURL);
    console.log(requestURL);
	return httpGet(requestURL);
}

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log(xmlhttp.responseText);
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}

var check = self.port.on("clicked", function(url) {
   	var json = getDomainInfo(url);
    alert(json);
    console.log(json);
});

