interface Elm {
  id: number;
  name: string;
  parent?: number;
}

interface NodeTree {
  id: number;
  name: string;
  children: NodeTree[];
  parent?: number;
}

const elements: Elm[] = [
  { id: 1, name: "Hydrogen" },
  { id: 2, name: "Helium" },
  { id: 3, name: "Lithium" },
  { id: 4, name: "Beryllium" },
  { id: 5, name: "Boron" },
  { id: 6, name: "Carbon" },
  { id: 7, name: "Nitrogen" },
  { id: 8, name: "Oxygen" },
  { id: 9, name: "Fluorine" },
  { id: 10, name: "Neon" },
  { id: 11, name: "Sodium", parent: 1 },
  { id: 12, name: "Magnesium", parent: 2 },
  { id: 13, name: "Aluminum", parent: 3 },
  { id: 14, name: "Silicon", parent: 4 },
  { id: 15, name: "Phosphorus", parent: 5 },
  { id: 16, name: "Sulfur", parent: 6 },
  { id: 17, name: "Chlorine", parent: 7 },
  { id: 18, name: "Argon", parent: 8 },
  { id: 19, name: "Potassium", parent: 9 },
  { id: 20, name: "Calcium", parent: 9 },
  { id: 21, name: "Scandium", parent: 8 },
  { id: 22, name: "Titanium", parent: 7 },
  { id: 23, name: "Vanadium", parent: 6 },
  { id: 24, name: "Chromium", parent: 5 },
  { id: 25, name: "Manganese", parent: 4 },
  { id: 26, name: "Iron", parent: 3 },
  { id: 27, name: "Cobalt", parent: 2 },
  { id: 28, name: "Nickel", parent: 1 },
  { id: 29, name: "Copper", parent: 11 },
  { id: 30, name: "Zinc", parent: 12 },
  { id: 31, name: "Gallium", parent: 13 },
  { id: 32, name: "Germanium", parent: 14 },
  { id: 33, name: "Arsenic", parent: 15 },
  { id: 34, name: "Selenium", parent: 16 },
  { id: 35, name: "Bromine", parent: 17 },
  { id: 36, name: "Krypton", parent: 18 },
  { id: 37, name: "Rubidium", parent: 19 },
  { id: 38, name: "Strontium", parent: 19 },
  { id: 39, name: "Yttrium", parent: 18 },
  { id: 40, name: "Zirconium", parent: 17 },
  { id: 41, name: "Niobium", parent: 16 },
  { id: 42, name: "Molybdenum", parent: 15 },
  { id: 43, name: "Technetium", parent: 14 },
  { id: 44, name: "Ruthenium", parent: 13 },
  { id: 45, name: "Rhodium", parent: 12 },
  { id: 46, name: "Palladium", parent: 11 },
  { id: 47, name: "Silver", parent: 10 },
  { id: 48, name: "Cadmium", parent: 9 },
  { id: 49, name: "Indium", parent: 8 },
  { id: 50, name: "Tin", parent: 7 },
  { id: 51, name: "Antimony", parent: 6 },
  { id: 52, name: "Tellurium", parent: 5 },
  { id: 53, name: "Iodine", parent: 4 },
  { id: 54, name: "Xenon", parent: 3 },
  { id: 55, name: "Caesium", parent: 2 },
  { id: 56, name: "Barium", parent: 1 },
  { id: 57, name: "Lanthanum", parent: 21 },
  { id: 58, name: "Cerium", parent: 22 },
  { id: 59, name: "Praseodymium", parent: 23 },
  { id: 60, name: "Neodymium", parent: 24 },
  { id: 61, name: "Promethium", parent: 25 },
  { id: 62, name: "Samarium", parent: 26 },
  { id: 63, name: "Europium", parent: 27 },
  { id: 64, name: "Gadolinium", parent: 28 },
  { id: 65, name: "Terbium", parent: 29 },
  { id: 66, name: "Dysprosium", parent: 29 },
  { id: 67, name: "Holmium", parent: 28 },
  { id: 68, name: "Erbium", parent: 27 },
  { id: 69, name: "Thulium", parent: 26 },
  { id: 70, name: "Ytterbium", parent: 25 },
  { id: 71, name: "Lutetium", parent: 24 },
  { id: 72, name: "Hafnium", parent: 23 },
  { id: 73, name: "Tantalum", parent: 22 },
  { id: 74, name: "Tungsten", parent: 21 },
  { id: 75, name: "Rhenium", parent: 20 },
  { id: 76, name: "Osmium", parent: 19 },
  { id: 77, name: "Iridium", parent: 18 },
  { id: 78, name: "Platinum", parent: 17 },
  { id: 79, name: "Gold", parent: 16 },
  { id: 80, name: "Mercury", parent: 15 },
  { id: 81, name: "Thallium", parent: 14 },
  { id: 82, name: "Lead", parent: 13 },
  { id: 83, name: "Bismuth", parent: 12 },
  { id: 84, name: "Polonium", parent: 11 },
  { id: 85, name: "Astatine", parent: 10 },
  { id: 86, name: "Radon", parent: 9 },
  { id: 87, name: "Francium", parent: 8 },
  { id: 88, name: "Radium", parent: 7 },
  { id: 89, name: "Actinium", parent: 6 },
  { id: 90, name: "Thorium", parent: 5 },
  { id: 91, name: "Protactinium", parent: 4 },
  { id: 92, name: "Uranium", parent: 3 },
  { id: 93, name: "Neptunium", parent: 2 },
  { id: 94, name: "Plutonium", parent: 1 },
  { id: 95, name: "Americium", parent: 31 },
  { id: 96, name: "Curium", parent: 32 },
  { id: 97, name: "Berkelium", parent: 33 },
  { id: 98, name: "Californium", parent: 34 },
  { id: 99, name: "Einsteinium", parent: 35 },
  { id: 100, name: "Fermium", parent: 36 }
];

const nodes: NodeTree[] = [];

const createNode = (elm: Elm) => {
  const node: NodeTree = {
    id: elm.id,
    name: elm.name,
    children: [],
    parent: elm.parent
  };
  return node;
};

const fillElements = (elements: Elm[], node: NodeTree) => {
  elements.forEach(elm => {
    if (elm.parent === node.id) {
      const child = node.children.find(
        (child: NodeTree) => child.id === elm.id
      );

      if (!child) {
        node.children.push(createNode(elm));
      }
    }
  });
};

const fillTree = (elements: Elm[], node: NodeTree) => {
  fillElements(elements, node);

  if (node.children.length > 0) {
    node.children.forEach(n => {
      fillElements(elements, n);

      fillTree(elements, n);
    });
  }
};

elements.forEach(elm => {
  if (!elm.parent) {
    const root: NodeTree = createNode(elm);
    fillTree(elements, root);
    nodes.push(root);
  }
});

console.table(nodes);
console.log("🚩");
console.table(nodes[0].children);
console.log("🚩");
console.table(nodes[0].children[0].children);
console.log("🚩");
console.table(nodes[0].children[0].children[0].children);
