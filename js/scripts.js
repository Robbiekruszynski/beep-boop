//business logic

//using elements within the array as a string to search for targetted value
//(1,2,3) without converting with parseInt

var numberOutput = function(userNumber) {
  // var dumpOldArray = [];
  var printOut = [];

//creating a for loop to count by 1 up to userNumber
  for (var i =0; i <=userNumber; i++) {

    //using i.toString capturing the i and converting to strring to find "1"
    if (i.toString().includes("1")) {
     printOut.push("Beep");

   }else if (i.toString().includes("2")) {
    printOut.push("Boop");
    
}



  }
    return printOut;
};


// user-interface logic
  $(document).ready(function(){
  $("form#manipulator").submit(function(event){
  event.preventDefault();
  var userInput = $("input#userInput").val();

  $("#yourResult").text(numberOutput(userInput));
})
});


// for (var i = 0; i <=userNumber; i++) {
//
//   if (dumpOldArray[i].includes(1)){
//     dumpNewArray[i] = "Beep";
//     console.log(userNumber)
//
//  }else if (dumpOldArray[i].includes(2)){
//     dumpNewArray[i] = "Boop";
//
//  }else if (dumpOldArray[i].includes(3)){
//     dumpNewArray[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
//  }
//
