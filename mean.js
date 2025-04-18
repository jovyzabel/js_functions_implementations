/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
    let res = 0;
      let result;
    if(array instanceof Array){
    if (array.length == 0){
         result = Number.NaN
    }
    else{
    for(let i = 0; i <array.length; i++){
        if(Number.isInteger(parseInt(array[i]))){
       let larray = array.length
        res = (res + array[i]);
        result = res/larray;
      } 
    }
    
      }
      
       return result;  
    
    }
    
       
   
  
  }
  
  mean([4, 2, 8, 6]); // => 5
  mean([1, 2, 3, 4]); // => 2.5
  mean([1, 2, 2]); // => 1.6666666666666667
  