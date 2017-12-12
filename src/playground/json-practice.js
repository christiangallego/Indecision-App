// run these commands in the Chrome Dev Tools console
// JSON is a string representation of an object or array and makes for communicating data, such as API's,
// much easier because of it's readibility


// convert an object into JSON format string representation
JSON.stringify({age: 26});
// output: "{"age": 26}"

// turn an object into JSON format and place in a variable
const json = JSON.stringify({age: 26});
json;
// output: "{"age": 26}"

// convert the JSON to pure Javascript - in this case, an object
JSON.parse(json);
// output: Object {age: 26}

JSON.parse(json).age
// output: 26
