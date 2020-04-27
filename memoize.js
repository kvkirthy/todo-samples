
const memoizeAny = (func) => {
    // Use this variable memoizedKeyValues to save results
    // Identify each result with it's input.
    // If the memoized function is called with the same input, use the existing value.  
    let memoizedKeyValues = [
       /* {
            args: stringified_input_parameters
            result: result
        }*/
    ];
    // Return a function. When we memoized multiply below, we called this function, for each invocation of multiplication
    return (...args) => {

        // for the given input (params), check if there is a cached result
        let result = memoizedKeyValues.find( x => x.args === JSON.stringify(args))

        // YES, there is a cached result
        if(result){ 
            console.log("from cache", args);
            return result.result; // return cached result
        }

        // controls comes to this line only if there is no cached result.
        result = func.apply(this,args); // invoke the function

        // cache result
        memoizedKeyValues.push({
            args: JSON.stringify(args),
            result: result
        })

        // return the result
        return result;
    }
}

const multiply = memoizeAny((p1, p2) => {
    console.log("invoked original function", p1, p2);
    return p1 * p2;
});

const sum = memoizeAny((p1, p2) => {
    console.log("invoked original function", p1, p2);
    return p1 + p2;
});

console.log("multiply", multiply(10,30));// A new set of params. Performs multiplication and caches the result 
console.log("multiply", multiply(10,20));// A new set of params. Performs multiplication and caches the result
console.log("sum", sum(10,20));// A new set of params (for sum). Performs multiplication and caches the result
console.log("sum", sum(10,20));/* *** RETURNS CACHED VALUE *** */
console.log("multiply", multiply(10,20));/* *** RETURNS CACHED VALUE *** */ 
console.log("multiply", multiply(10,10));// A new set of params. Performs multiplication and caches the result
console.log("sum", sum(10,10));/* *** RETURNS CACHED VALUE *** */
console.log("multiply", multiply(10,20));/* *** RETURNS CACHED VALUE *** */
console.log("sum", sum(10,10));/* *** RETURNS CACHED VALUE *** */
