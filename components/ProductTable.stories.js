import Component from "./ProductTable";

export default {
  title: "Example/ProductTable",
  component: Component,
  args: {
    filterText: "",
    inStockOnly: false,
    products: [],
  },
  argTypes: {
    products: { control: "object" },
    filterText: { control: "text" },
    inStockOnly: { control: "boolean" },
  },
};

const dummyData = [
  { category: "Fruits2", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits2", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits2", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export const Test = {
  args: {
    products: dummyData,
  },
};

export const Test2 = {
  args: {
    products: [
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ],
  },
};

export const Empty = {};
