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
    new Date(2015, 9, 10),
    new Date(2015, 9, 11),
    new Date(2015, 9, 12),
    new Date(2015, 9, 13),
    new Date(2015, 9, 14),
    new Date(2015, 9, 15),
    new Date(2015, 9, 16),
    new Date(2015, 9, 17),
    new Date(2015, 9, 18),
    new Date(2015, 9, 19),
    new Date(2015, 9, 20),
    new Date(2015, 9, 21),
    new Date(2015, 9, 22),
    new Date(2015, 9, 26)
  ];
  var href = location.href.split("/");
  var fileName = href[href.length-1];
  var dateInfo = fileName.split(/-|\./).map(function(string){
    return Number(string);
  });
  var selectedDate = new Date(dateInfo[2], dateInfo[1]-1, dateInfo[0]);
  $('#article_date_picker').datetimepicker({
    inline: true,
    sideBySide: true,
    showTodayButton: true,
    toolbarPlacement: 'top',
    useCurrent: false,
    defaultDate: selectedDate,
    enabledDates: dates
  }).on("dp.change", function(e){
    var date = e.date._d;
    var day = date.getDate();
    var dayString = day < 10 ? "0"+day : day;
    var month = date.getMonth();
    var monthString = month < 9 ? "0"+(month+1) : month+1;
    var yearString = date.getFullYear();
    location.href = dayString+"-"+monthString+"-"+yearString+".html";
  });
})
