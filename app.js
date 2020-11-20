const logo = document.querySelectorAll('#logo path');

const logoArr = Array.from(logo).slice(1, 9);
// console.log(logoArr);
for (let i = 0; i < logoArr.length; i++) {
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
