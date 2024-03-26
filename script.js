//your JS code here. If required.
function manipulateData(inputArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        document.getElementById('output').innerText = evenNumbers.join(', ');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        document.getElementById('output').innerText = multipliedNumbers.join(', ');
        resolve(multipliedNumbers);
      }, 2000);
    });
  });
}