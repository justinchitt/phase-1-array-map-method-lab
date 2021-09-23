const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newOne = tutorials.map(function whatever(element){
    let arrayOfWords = element.split(" ");
    let innerArray = arrayOfWords.map(function(elements){
      let capitals = elements[0].toUpperCase() + elements.slice(1)
      // let combined = capitals + elements.slice(1)
      return capitals;
    })
    let final =innerArray.join(' ')
    console.log(final)
    return final;
  
  })
  return newOne
}
console.log(titleCased())




// let test = tutorials[2].split(" ")[0][0].toUpperCase()

// function capitalize(array) {
//   let what = array[0].split(' ')
//   let who = what[1]
//   let where = who
//   let the = who.charAt(0).toUpperCase()
//   let word = who.substr(1)
//   let final = the + word
//   return final
// }

// console.log(titleCased());

// function whatever(element){
//   let arrayOfWords = element.split(" ");
//   let innerArray = arrayOfWords.map(function(elements){
//     let capitals = elements[0].toUpperCase()
//     let combined = capitals + elements.slice(1)
//     // console.log(combined)
//     return combined;
//   })
//   let final =innerArray.join(' ')
//   // console.log(final)
//   return [final];

// }
// console.log(whatever(tutorials[0]))