const cekHariKerja = async(day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject("hari ini bukan hari kerja");
      }
    }, 3000);
  });
};

cekHariKerja("jumat")
  .then((result) => {
    console.log(`Hari kerja: ${result}`);
  })
  .catch((error) => {
    console.log(error);
  });

const cekHariKerja1 = async (day) => {
  try {
    const result = await cekHariKerja(day);
    console.log(`Hari kerja: ${result}`);
  } catch (error) {
    console.log(error);
  }
};

cekHariKerja1("minggu");
