# Notes

## Description

An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf `i` to shelf `i+1` or `i+3` (the cat cannot climb on the shelf directly above its head), according to the illustration:

```
                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐
│------5-│
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │
BANG!────┘  ├─────► OK!
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
```

Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start `1`, finish `5`, then answer is `2` `(1 => 4 => 5 or 1 => 2 => 5)`

## Domain

- Shelves
- Cat
  - Jump

### Rules

- shelves are arranged one above the other in a staggered fashion
- cat can jump either one or three shelves at a time: from shelf `i` to shelf `i+1` or `i+3` (the cat cannot climb on the shelf directly above its head)
- input: start and finish shelf numbers (positive integers)
- output: minimum number of jumps to go from start to finish

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG

---

TODO:

# Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works construction ✅
- it should return 0 for start shelf 1 and finish shelf 1 ✅
