console.log("#1") 

for(let i = 1; i <= 10; i++){
    console.log(i * 3)
}

console.log("")
console.log("")

console.log("#2")

for(let i = 10; i >=1; i--){
    console.log(i)
}

console.log("")
console.log("")

console.log("#3")



let sum = 0

for(let i = 1; i <= 100; i++){
    sum += i
}

console.log(sum)

console.log("")
console.log("")

console.log("#4 FizzBuzz")



for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzBuzz" + " - " + i);
    }else if(i % 3 === 0){
      console.log("fizz" + " - " + i);
    }else if(i % 5 === 0){
      console.log("buzz" + " - " + i);
    }else{
      console.log(i);
    }
  }