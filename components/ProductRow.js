export default function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td class="px-6 py-1">{name}</td>
      <td class="px-6 py-1">{product.price}</td>
    </tr>
  );
}
