var data = require("self").data;
var widgets = require("widget");

widgets.Widget({
  id: "x-ray",
  label: "Activar las X Ray Goggles",
  contentURL: data.url("icon.png"),
  onClick: function() {
    require("tabs").activeTab.attach({
      contentScript: "function xray(){var script=document.createElement('script');script.src='http://webxray.hackasaurus.org/webxray.js';script.className='webxray';document.head.appendChild(script);}xray();"
    })
  }
});
