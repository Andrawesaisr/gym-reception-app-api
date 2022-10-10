let now = new Date();
console.log(now.toUTCString())

const newdate = new Date(now.setDate(now.getDate() + 30))

console.log(newdate.toUTCString())