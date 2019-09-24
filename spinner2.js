process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 0;
const spinArray=['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (let i=0; i< (spinArray.length); i++){
time += i * 200;
setTimeout(() => {
  process.stdout.write(spinArray[i]);
}, time);

}




// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// // ... fill in the rest yourself ...