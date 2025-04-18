/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
    if (!array || array.length === 0) {
      return undefined;
    }
    
    let minElement = undefined;
    let minValue = undefined;
    let hasValidElement = false;
    
    for (const element of array) {
      const value = iteratee(element);
      
      // Skip null or undefined values
      if (value === null || value === undefined) {
        continue;
      }
      
      // Initialize minElement and minValue with the first valid element
      if (!hasValidElement) {
        minElement = element;
        minValue = value;
        hasValidElement = true;
        continue;
      }
      
      // Update minElement and minValue
      if (value < minValue) {
        minElement = element;
        minValue = value;
      }
    }
    
    return minElement;
  }