document.addEventListener("DOMContentLoaded", () => {
  function manipulateData(array) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(array);
          }, 3000);
      }).then((arr) => {
          return new Promise((resolve) => {
              setTimeout(() => {
                  const filteredArray = arr.filter(elem => elem % 2 == 0);
                  document.querySelector('#output').textContent = `${filteredArray}`;
                  console.log(filteredArray);
                  resolve(filteredArray); // Resolve with filtered array
              }, 1000);
          });
      }).then((filteredArray) => {
          setTimeout(() => {
              const mappedArray = filteredArray.map(elem => elem * 2);
              document.querySelector('#output').textContent = `${mappedArray}`;
              console.log(mappedArray);
          }, 2000);
      }).catch((err) => {
          console.log('Error occurred', err);
      });
  }

});
