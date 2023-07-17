const catsShelves = (start, finish) => {
  let n_jumps = 0;
  let cat_position = start;

  while (cat_position < finish) {
    if (cat_position + 3 <= finish) {
      n_jumps += 1;
      cat_position += 3;
    } else if (cat_position + 1 <= finish) {
      n_jumps += 1;
      cat_position += 1;
    }
  }

  return n_jumps;
};

module.exports = {
  catsShelves,
};
