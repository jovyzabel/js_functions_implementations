/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
    let count = initialValue;

   return function counter() {
       return count++;
   };


}
const counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2
