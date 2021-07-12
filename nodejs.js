// const sname = "Baffour:"
// console.log(sname);
// const greet = (fname) => {
//     console.log(`Hello,${fname}`);
// }

// greet('Salami');
// greet('Lash');

const s = new Date().getSeconds();

function meme() {
    // prints out "2", meaning that the callback is not called immediately 
    // after 500 milliseconds.
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}
setTimeout(meme, 5000);
while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}