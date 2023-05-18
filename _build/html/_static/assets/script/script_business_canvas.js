var fieldToAddTo = "";

$(".segment").click(function() {
  fieldToAddTo = $(this);
  
  $("#input-box").toggleClass("hidden");
});

function addNewItem(text) {
  
  fieldToAddTo.append("<div class='segment-details'></div>");
}