// Latihan 1: For Loop untuk Lirik Chorus
function chorusLoop() {
  for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
  }
}

// Latihan 2: For Loop untuk Hitung Mundur
function countDownLoop() {
  for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
  }
}

// Latihan 3: Loop untuk Array Nama
function displayNames() {
  const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
  }
}
