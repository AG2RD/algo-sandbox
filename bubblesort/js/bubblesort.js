console.log("script bubblesort init");
var arr = [9,5,10,4,2,3,8,7,1,6];
var bubblesort = function(){

var currentElem,
    iTargetElem,
    arrLength = arr.length,
    tempElem;

  //  console.log("arrLength: " + arrLength);
  // Loop on array random number in order to sort them
  for (var iArr = arrLength-2 ; iArr > 0 ; iArr-- ){

    currentElem = arr[iArr];
    iTargetElem = iArr+1; //reset pointer target
    console.log("currentElem: "+currentElem);
    // find new position of currentElem
    while (currentElem > arr[iTargetElem] && iTargetElem < arrLength){
      iTargetElem++;
    }
    console.log("targetElem: "+arr[iTargetElem] );
    if (currentElem > arr[iTargetElem]) { // check that currentElem must be moved
      tempElem = arr[iTargetElem]; // we get current value of current elem

      // switch element
      for (var iShift = arrLength-1 ; iShift > iArr ; iShift--){
        arr[iShift] = arr[iShift-1];
      }
      //set current elem to it's new postion
      arr[iArr] = tempElem;
    //  console.log("iteration : "+ iArr);
      console.log (arr);
    }
   else{
    console.log( currentElem + 'not > ' + arr[iTargetElem] );
  }
}
  console.log("end of bubblesort");
//  console.log("result : ", arr);
}

bubblesort(arr);
