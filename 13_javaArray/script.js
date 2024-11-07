function kelolaAntrian() {
  // Array yang menyimpan antrian pembeli awal
  let antrian = ["ray", "fiki", "fadhilla", "farah"];

  // Menampilkan antrian awal di console
  console.log("Antrian awal: " + antrian.join(", "));

  // 1. Pembeli baru datang
  antrian.push("nabila");
  console.log("Antrian setelah Nabila datang: " + antrian.join(", "));

  // 2. Dua pembeli datang
  antrian.push("maza", "elsi");
  console.log("Antrian setelah Maza dan Elsi datang: " + antrian.join(", "));

  // 3. Antrian terakhir tidak jadi antri dan pulang
  let pulang = antrian.pop();
  console.log(pulang + " pulang. Antrian sekarang: " + antrian.join(", "));

  // 4. Antrian pertama sudah mendapatkan belanjaannya
  let pertama = antrian.shift();
  console.log(pertama + " sudah mendapatkan belanjaannya. Antrian sekarang: " + antrian.join(", "));

  // 5. Antrian kedua sudah mendapatkan belanjaannya
  let kedua = antrian.shift();
  console.log(kedua + " sudah mendapatkan belanjaannya. Antrian sekarang: " + antrian.join(", "));

  // 6. Pembeli baru yang nyerobot antrian
  antrian.unshift("tomi");
  console.log("Antrian setelah Tomi nyerobot antrian: " + antrian.join(", "));

  // Hasil akhir
  console.log("Hasil akhir antrian: " + antrian.join(", "));
}
