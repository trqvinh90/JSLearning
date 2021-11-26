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
rAvg(10);
rAvg(11);
rAvg(12);