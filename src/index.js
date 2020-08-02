require("easy-autocomplete");
import Print from "./print";

$(document).ready(() => {
  Print();

  let options = {
    data: ["blue", "green", "pink", "red", "yellow"],
  };

  $("#basics").easyAutocomplete(options);
});
