function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}

setInterval(setTime, 1000);
console.log("Program Finish");

function divide(a, b) {
  try {
    if (a === undefined || b === undefined) {
      throw new Error("Isi semua parameter");
    }

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("input angka");
    }

    if (b === 0) {
      throw new Error("tidak bisa dibagi dengan 0");
    }

    return a / b;
  } catch (error) {
    console.error("error:", error.message);
    return null;
  }
}

// Contoh penggunaan
console.log(divide(10));
console.log(divide(10, "a"));
console.log(divide("a", "b"));
console.log(divide(10, 0));
console.log(divide(10, 2));
