// check off specfic by clicking

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
  //   //if li gray
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     //turn it black
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none",
  //     });
  //   } else {
  //     $(this).css({
  //       color: "gray",
  //       textDecoration: "line-through",
  //     });
  //   }
});

//click on x to delete todo

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(300, function () {
      remove();
    });
  event.stopPropagation();
});

//creation of new todos
$("input[type='text'").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //crete li to add to new method
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text'").fadeToggle(200);
});
