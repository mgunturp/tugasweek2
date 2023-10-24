function perjumlahan(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('Input harus berupa angka.');
      } else {
        setTimeout(() => {
          const result = a + b;
          resolve(result);
        }, 3000); 
      }
    });
  }

  const num1 = 5;
  const num2 = 10;

  perjumlahan(num1, num2)
    .then(result => {
      console.log(`hasil penjumlahan ${num1} dan ${num2} adalah ${result}`);
    })
    .catch(error => {
      console.error(error);
    });
  