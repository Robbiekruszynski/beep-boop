//business logic

var numberOutput = function(userNumber) {
  var dumpOldArray = [];
  var dumpNewArray = [];

//creating a for loop to count by 1 up to userNumber
  for (var i =0; i <=userNumber; i++) {
  dumpOldArray.push(i+1);
  }


  for (var i = 0; i <=userNumber; i++) {
    if (dumpOldArray[i].includes(1)){
      dumpNewArray[i] = "Beep"
        }
  }

};


// user-interface logic
