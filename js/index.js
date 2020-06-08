$(document).ready(function () {
 // $("#clgResultTable").hide();
 $("#midTermResultTable").css("display", "none");
 $("#termResultTable").css("display", "none");
 $("#preTestResultTable").css("display", "none");
 $("#testResultTable").css("display", "none");
});

var hiddenDiv;

function replaceResult(hide, show) {
 document.getElementById(hide).style.display = "none";
 document.getElementById(show).style.display = "block";

}

