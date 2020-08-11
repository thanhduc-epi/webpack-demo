import $ from "jquery";
require("bootstrap-slider");
import("../node_modules/bootstrap-slider/dist/css/bootstrap-slider.css");
require("easy-autocomplete");
import Bingmaps from "./bingmaps";

$(document).ready(() => {
  let bingmaps = new Bingmaps();
  bingmaps.init();

  let options = {
    data: ["blue", "green", "pink", "red", "yellow"],
  };

  $("#basics").easyAutocomplete(options);

  var mySlider = $("#input-slider").slider();
});
