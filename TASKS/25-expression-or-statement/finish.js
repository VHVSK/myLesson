/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // expression statement

// statement
const myObject = { // expression
  x: 10,
  y: true,
}

// expression statement
myObject.z = 'abc' // expression

// expression statement
delete myObject.x

 // statement
let newVariable

 // expression statement
newVariable = 30 + 5 // expression

 // expression statement
console.log(newVariable)
/**              ^
 *           expression
 */

// statement
if (newVariable > 10) {
  /**      ^
   *   expression
   */

  // expression statement
  console.log(`${newVariable} больше 10`)
  /**     
   *           _________________________
   *                  ^
   *                   expression
   *              __________
   *                 ^
   *             expression
   */
}

