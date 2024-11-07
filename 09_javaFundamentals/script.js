// Function to display various data types
function showDataTypes() {
  // String
  let myString = "Hello, World!";
  console.log("String:", myString);
  alert("String: " + myString);

  // Number
  let myNumber = 42;
  console.log("Number:", myNumber);
  alert("Number: " + myNumber);

  // Boolean
  let myBoolean = true;
  console.log("Boolean:", myBoolean);
  alert("Boolean: " + myBoolean);

  // Object
  let myObject = { name: "John", age: 30 };
  console.log("Object:", myObject);
  alert("Object: " + JSON.stringify(myObject));

  // Array
  let myArray = [1, 2, 3, 4, 5];
  console.log("Array:", myArray);
  alert("Array: " + myArray);

  // Null
  let myNull = null;
  console.log("Null:", myNull);
  alert("Null: " + myNull);

  // Undefined
  let myUndefined;
  console.log("Undefined:", myUndefined);
  alert("Undefined: " + myUndefined);

  // Symbol
  let mySymbol = Symbol("unique");
  console.log("Symbol:", mySymbol.toString());
  alert("Symbol: " + mySymbol.toString());
}
