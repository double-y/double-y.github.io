$(function () {
  $('#blog_title').textillate({
    loop: true,
    initialDelay: 500
  });
  $('.sub_title').textillate({
    initialDelay: 900
  });
  var dates = [
    new Date(2015, 8, 26),
    new Date(2015, 8, 27),
    new Date(2015, 8, 28),
    new Date(2015, 8, 29),
    new Date(2015, 8, 30),
    new Date(2015, 9, 1),
    new Date(2015, 9, 2),
    new Date(2015, 9, 3),
    new Date(2015, 9, 4),
    new Date(2015, 9, 5),
    new Date(2015, 9, 6),
    new Date(2015, 9, 7),
    new Date(2015, 9, 8),
    new Date(2015, 9, 9),
    new Date(2015, 9, 10)
  ];
  $('#article_date_picker').datetimepicker({
    inline: true,
    sideBySide: true,
    showTodayButton: true,
    toolbarPlacement: 'top',
    useCurrent: false,
    enabledDates: dates
  });
  $('#article_date_picker').on("click", "td", function(e){
    console.log("clicked");
  });
  $('td.day').on("click", function(e){
    var dataday = this.getAttribute("data-day").split("/");

    location.href = dataday[1]+"-"+dataday[0]+"-"+dataday[2]+".html";
  })
})
