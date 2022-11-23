const string1 = "Fake it till you make it."
const string2 = "Thats a quote"

// concat()
// console.log(string1.concat(string2));

// endswith()
// console.log(string1.endsWith("it")); //Outputs false

// slice()
// slice(start,stop(excluding))
// console.log(string1.slice(13));
// console.log(string1.slice(13,20));
// console.log(string1.slice(-10));
// console.log(string1.slice(-10, -4));

// split()
// const words = string1.split(" ")
// console.log(words);
// o/p :- [ 'Fake', 'it', 'till', 'you', 'make', 'it.' ]
// const chars = string1.split("")
// console.log(chars);
// [
//   'F', 'a', 'k', 'e', ' ', 'i',
//   't', ' ', 't', 'i', 'l', 'l',
//   ' ', 'y', 'o', 'u', ' ', 'm',
//   'a', 'k', 'e', ' ', 'i', 't',
//   '.'
// ]


// toString()
// const newString = new String("Hello people.")
// console.log(newString);
// console.log(newString.toString());

// trim(). trimStart(), trimEnd()

const String3 = "   .Hello,World.   ";
console.log(String3.trim());
console.log(String3.trimStart());
console.log(String3.trimEnd());