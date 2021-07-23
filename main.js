$(document).ready(function () {
  $("#toggle").click(function () {
    $("#t1").toggle();
    $(this).css("color", "red");
  });
  $('#id2').click(function () {
    $('#id1').slideToggle("", function () {
      $("#id3").show("slow");
    });
  });
  

});
function function1() {
  var name = $('#nameId').val();
  $("#id4").text(name);
  $("#id5").show();
  $("#toggle").prepend(name + " need ");
}
function check1(obj) {
  var value = obj
  $("ol").append("<li>" + value + "</li>");
}
var person =[
  {"name":"ganesh","age":12,"gender":"male"},
  {"name":"Rajesh","age":13,"gender":"male"},
  {"name":"divya","age":17,"gender":"female"}
]

function fun6(){
  var str = "";

	str += '<thead>';
	str += '<tr>';
	str += '<th>Select All <input type="checkbox" onclick="clickAll(this)"  id="selectAll" /> </th>';
	str += '<th>Carrier</th>';
	str += '<th>Contract Credit Limit</th>';
	str += '<th>Dynamic Credit Limit</th>';
	str += '<th>Net Outstanding</th>';
	str += '<th>Due Amount</th>';
	str += '<th>Invoice OS</th>';
	str += '</tr>';
	str += '</thead><tbody></tbody>';
  $("#id6").append(str);
  $("#id6").css("border",'')
}
