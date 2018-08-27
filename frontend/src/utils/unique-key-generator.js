export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomId = (min, max, timestamp) => {
  const randomInt = getRandomInt(min, max);

  const randomId = timestamp.split('').map(char => {
    const randomIntAux = getRandomInt(min, max);

    return `${randomInt}${char}${randomIntAux}`
  }).join('');

  return randomId;
};
