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
    //Using includes() method to determines whether an array includes targetted value among its entries.
    }else if (i.toString().includes("2")) {
    printOut.push("Boop");

    }else if(i.toString().includes("3")){
    printOut.push("I'm sorry, Dave. I'm afraid I can't do that.")

    }else{
    printOut.push(" " +i);

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
