const getArrWith10RandomsNumbers = () => {
  let arr = [];
  let num = 0;
  for (let index = 0; index < 10; index += 1) {
    num = Math.floor(Math.random() * 50) + 1
    arr.push(Math.pow(num, 2))
  }
  return arr;
}

const sumArrPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = getArrWith10RandomsNumbers();
    const sumArr = arr.reduce((a, b) => a + b, 0)

    sumArr < 8000 ? resolve(sumArr) : reject();
  });

  myPromise
    .then((response) => (
      [2, 3, 5, 10].map((num) => Math.round(response / num))
    ))
    .then((array) => array.reduce((num, acc) => num + acc, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

sumArrPromise();