require("easy-autocomplete");
import Bingmaps from "./bingmaps";

$(document).ready(() => {
  let bingmaps = new Bingmaps();
  bingmaps.init();

  let options = {
    data: ["blue", "green", "pink", "red", "yellow"],
  };

  $("#basics").easyAutocomplete(options);
});
