const runningAverage = () => {
    let counter = 0;
    let number = 0;

    return (input) => {
      number++;
      counter+=input;
      return counter/number;
    };
  };

const rAvg = runningAverage();
console.log(rAvg(10));
console.log(rAvg(11));
console.log(rAvg(12));