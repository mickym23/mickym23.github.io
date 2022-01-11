// let i = 0;
// let j = 0;
// let text = 'I am Mikhail Cedras';
// let text2 = "Junior Full Stack Web Developer";
// let speed = 200;

// function typeWriter2() {

//    if (j < text2.length) {
//       document.getElementById("headText2").innerHTML += text2.charAt(j);
//       j++;
//       setTimeout(() => {
//          typeWriter2();
//       }, 100);
//    }
// }

// function typeWriter() {
//    return new Promise((resolve, reject) => {
//       if (i < text.length) {
//          document.getElementById("headText1").innerHTML += text.charAt(i);
//          i++;

//          if (i == text.length) {
//             return;
//          }

//          setTimeout(() => {
//             typeWriter();
//             if (i == (text.length)) {
//                typeWriter2();
//                resolve();
//             }
//          }, speed);
//       }
//    })
// }

// async function render() {
//    await typeWriter();    
// }

//    window.addEventListener("DOMContentLoaded", () => {
//       render();
//    });
