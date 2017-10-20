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

    //answer 1 branches
    if (answer1 === "react") {
      reactScore++;
    } else if (answer1 === "java") {
      javaScore++;
    } else if (answer1 === "rails") {
      railsScore++;
    } else {
      //no entry
      $("");
    }
    //answer 2 branches
    if (answer2 === "react") {
      reactScore++;
    } else if (answer2 === "java") {
      javaScore++;
    } else if (answer2 === "rails") {
      railsScore++;
    } else {
      //no entry
    }
    //answer 3 branches
    if (answer3 === "react") {
      reactScore++;
    } else if (answer3 === "java") {
      javaScore++;
    } else if (answer3 === "rails") {
      railsScore++;
    } else {
      //no entry
    }
    //answer 4 branches
    if (answer4 === "react") {
      reactScore++;
    } else if (answer4 === "java") {
      javaScore++;
    } else if (answer4 === "rails") {
      railsScore++;
    } else {
      //no entry
    }
    //answer 5 branches
    if (answer5 === "react") {
      reactScore++;
    } else if (answer4 === "java") {
      javaScore++;
    } else if (answer4 === "rails") {
      railsScore++;
    } else {
      //no entry
    }
    // determine highscore
    if (reactScore === javaScore && javaScore === railsScore && reactScore === 0){
      $("#fail").show();
    } else if (reactScore > javaScore && reactScore > railsScore){
      $("#react-track").show();
    } else if (javaScore > reactScore && javaScore > railsScore){
      $("#java-track").show();
    } else if (railsScore > reactScore && railsScore > javaScore ){
      $("#rails-track").show();
    } else if (reactScore === javaScore){
      $("#react-track").show();
      $("#java-track").show();
    } else if (reactScore === railsScore){
      $("#react-track").show();
      $("#rails-track").show();
    } else {
      $("#java-track").show();
      $("#rails-track").show();
    }
    event.preventDefault();
  });
});
