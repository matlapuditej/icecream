const flavors = [
  {
    FlavorGUID: "5b21ca3eeb7f6fbccd471815",
    LongName: "Vanilla",
    ShortName: "vanilla",
    Active: true
  },
  {
    FlavorGUID: "5b21ca3eeb7f6fbccd471816",
    LongName: "Chocolate",
    ShortName: "chocolate",
    Active: true
  },
  {
    FlavorGUID: "5b21ca3eeb7f6fbccd471817",
    LongName: "Pineapple",
    ShortName: "pineapple",
    Active: true
  },
  {
    FlavorGUID: "5b21ca3eeb7f6fbccd471819",
    LongName: "Cherry",
    ShortName: "cherry",
    Active: true
  }
];

export function getFlavors() {
  return flavors;
}

export function getFlavor(id) {
  return flavors.find(f => f._id === id);
}
