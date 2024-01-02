export default function ProductCategoryRow({ category }) {
  return (
    <tr class="border-b bg-gray-80">
      <th class="px-6 py-4 text-black" colSpan="2">
        {category}
      </th>
    </tr>
  );
}
