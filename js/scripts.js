$(document).ready(function(){

  $("form#survey").submit(function(event) {
    var reactScore = 0;
    var javaScore = 0;
    var railsScore = 0;

    var answer1 = $("input:radio[name=question1Radios]:checked").val();
    var answer2 = $("input:radio[name=question2Radios]:checked").val();
    var answer3 = $("input:radio[name=question3Radios]:checked").val();
    var answer4 = $("input:radio[name=question4Radios]:checked").val();
    var answer5 = $("input:radio[name=question5Radios]:checked").val();


    event.preventDefault();
  });
});
