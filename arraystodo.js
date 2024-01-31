function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
  }
  
  // Examples
  console.log(pushFront([5, 7, 2, 3], 8)); 
  console.log(pushFront([99], 7));          


  function popFront(arr) {
    if (arr.length === 0) {
      console.log("Array is empty");
      return;
    }
  
    const removedValue = arr[0];
  
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    arr.length--; 
  
    console.log(`${removedValue} returned, with [${arr}] printed in the function`);
    return removedValue;
  }
  
  // Examples
  popFront([0, 5, 10, 15]); 
  popFront([4, 5, 7, 9]);   


  function insertAt(arr, index, value) {
    if (index < 0 || index > arr.length) {
      console.log("Invalid index");
      return;
    }
  
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
  
    arr[index] = value;
  
    console.log(`[${arr}]`);
    return arr;
  }
  
  // Examples
  insertAt([100, 200, 5], 2, 311);
  insertAt([9, 33, 7], 1, 42);    

  function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) {
      console.log("Invalid index");
      return;
    }
  
    let removedValue;
  
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    removedValue = arr.pop();
  
    console.log(`${removedValue} returned, with [${arr}] printed in the function`);
    return removedValue;
  }
  
  // Examples
  removeAt([1000, 3, 204, 77], 1); 
  removeAt([8, 20, 55, 44, 98], 3); 

  function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr;
  }
  
  // Examples
  swapPairs([1, 2, 3, 4]); 
  swapPairs(["Brendan", true, 42]);

  function removeDupes(arr) {
    const uniqueArr = [arr[0]];
  
    for (let i = 1; i < arr.length; i++) {
      let isDuplicate = false;
  
      
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      
      if (!isDuplicate) {
        uniqueArr.push(arr[i]);
      }
    }
  
    return uniqueArr;
  }
  
  // Examples
  removeDupes([-2, -2, 3.14, 5, 5, 10]); 
  removeDupes([9, 19, 19, 19, 19, 19, 29]); 
  
  