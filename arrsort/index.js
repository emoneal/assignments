// const arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => a - b)

  
// console.log(arr); // [1, 2, 3, 5, 20, 90] */

// arr.sort((a, b) => b - a)

//const arr = ["dog", "wolf", "by", "family", "eaten"]

// arr.sort((a, b) => a.length - b.length)

// arr.sort((a, b) => a.localeCompare(b))

const info = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

info.sort((a,b) => a.age - b.age)

console.log(info)


