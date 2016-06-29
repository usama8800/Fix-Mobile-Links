chrome.webNavigation.onBeforeNavigate.addListener(function(details){
	var url = details.url;
	var tabId = details.tabId;
	if (url.search(/https?:\/\/m\./)==0){
		url = url.replace(/http(s?):\/\/(m\.)/,"http$1://");
		chrome.tabs.update(tabId, {url:url});
	}
	if(url.search(/^https?:\/\/kickass\.so.*$/)==0){
		url = url.replace(/^http(s?):\/\/kickass\.so(.*)$/, "http$1://kickass.to$2");
		chrome.tabs.update(tabId, {url:url});
	}
	if(url.search(/^(https?:\/{2}\w{2,3}\.)m\.(wikipedia\.org\/.*)$/)==0){
		url = url.replace(/^(https?:\/{2}\w{2,3}\.)m\.(wikipedia\.org\/.*)$/, "$1$2");
		chrome.tabs.update(tabId, {url:url});
	}
});