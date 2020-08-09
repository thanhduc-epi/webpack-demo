export default class Bingmaps {
  init() {
    this.loadscript(
      "https://www.bing.com/api/maps/mapcontrol?callback=bingmapsCallback&key=[YOUR_BING_MAPS_KEY]"
    );
    window.bingmapsCallback = function () {
      let map = new Microsoft.Maps.Map(document.getElementById("myMap"), {});
      let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
        color: "red",
      });
      map.entities.push(pushpin);
    };
  }

  loadscript(url) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
