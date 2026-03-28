const os = require("os")
const fs = require("fs")
const _ = require("lodash")

const greet = require("./utils")

console.log("Greeting function:")
console.log(greet("Wohoo ye le"))

console.log("\nOS Information:")
console.log("Platform:", os.platform())
console.log("CPU cores:", os.cpus().length)

console.log("\nReading File:")

const data = fs.readFileSync("data.txt","utf-8")
console.log(data)

console.log("\nUsing Lodash:")

const arr = [1,2,2,4,5]
const shuffled = _.shuffle(arr)
const unique= _.uniq(arr)

console.log("Original:", arr)
console.log("Shuffled:", shuffled)
console.log("No duplicates -> ",unique)

fs.appendFileSync("./data.txt","\njab isko pta h humse bach nhi paega")
const data2=fs.readFileSync("./data.txt","utf-8")
console.log(data2)
console.log({temp : fs.readFileSync("./data.txt","utf-8")})
/*{} in this if you want a value from a function you have to
 initialize a key and then the function .... like i did in this last line */