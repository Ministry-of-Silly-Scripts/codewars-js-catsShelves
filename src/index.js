const catsShelves = (start, finish) => {
  let n_jumps = 0;
  let cat_position = start;

  while (cat_position < finish) {
    if (cat_position + 2 <= finish) {
      n_jumps += 1;
      cat_position += 2;
    } else if (cat_position + 1 <= finish) {
      n_jumps += 1;
      cat_position += 1;
    } else {
      break;
    }
  }

  return n_jumps;
};

module.exports = {
  catsShelves,
};
