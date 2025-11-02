export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={`/src/assets/${product.imagen}`} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <button onClick={onAdd}>Añadir al carrito</button>
    </div>
  )
}
