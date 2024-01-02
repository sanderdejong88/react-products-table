import { useState } from "react";
import SearchButton from "./SearchButton";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  const [text, setText] = useState(filterText);

  const handleChange = (t) => {
    setText(t);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterTextChange(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "400px" }}
      className="p-4 mb-4 border-b-2 border-gray-200 "
    >
      <div class="flex items-center mb-4">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5"
          placeholder="Search..."
        />
        <SearchButton>Search products</SearchButton>
      </div>

      <input
        id="default-checkbox"
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        for="default-checkbox"
        class="ms-2 text-sm font-medium text-gray-900 select-none"
      >
        Only show products in stock
      </label>
    </form>
  );
}
