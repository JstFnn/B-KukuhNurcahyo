//  Define Practice - printHeart
function printHeart() {
  console.log("<3");
  alert("<3"); // Opsi untuk menampilkan di alert
}

// Return Value Practice - multiply
function multiply(a, b) {
  return a * b;
}

// Fungsi untuk menampilkan hasil dari multiply() dengan beberapa nilai contoh
function tampilkanHasilPerkalian() {
  console.log("multiply(2, 3):", multiply(2, 3)); // Output: 6
  console.log("multiply(9, 9):", multiply(9, 9)); // Output: 81
  console.log("multiply(5, 4):", multiply(5, 4)); // Output: 20
  alert(`multiply(2, 3): ${multiply(2, 3)}\nmultiply(9, 9): ${multiply(9, 9)}\nmultiply(5, 4): ${multiply(5, 4)}`);
}

// Scope Practice - observe
let hewan = "Giant Pacific Octopus";

function observe() {
  let hewan = "Pajama Squid";
  console.log(hewan);
}

function jalankanObserve() {
  observe(); // Output: "Pajama Squid"
}

// Scope Practice - handleAnimal
let hewanMematikan = "Blue-Ringed Octopus";

function handleAnimal() {
  let hewanMematikan = "Scorpionfish";
  console.log(hewanMematikan);
}

function jalankanHandleAnimal() {
  handleAnimal(); // Output: "Scorpionfish"
  console.log(hewanMematikan); // Output: "Blue-Ringed Octopus"
}

// Arrow Function Exercise - sayHello
const sayHello = (nama) => `Hello ${nama}!`;

function sayHelloWrapper() {
  console.log(sayHello("Hagrid")); // Output: "Hello Hagrid!"
  console.log(sayHello("Luna")); // Output: "Hello Luna!"
  alert(sayHello("Hagrid") + "\n" + sayHello("Luna"));
}
