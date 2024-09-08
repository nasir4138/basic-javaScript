// const sentence = 'I am new in this town';
// let reverse = ''
// for (const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse);

// shortcut reverse 
// const sentence = 'I am new in this town';
// const reversed = sentence.split('').reverse().join('')
// console.log(reversed);

const numbers = [1,2,3,4,5,6,9]
// numbers.reverse();
// console.log(numbers);

// const rev_numbers =[];
for( let i = numbers.length-1; i>=0; i--){
    const num = numbers[i];
   console.log(num); 
}



