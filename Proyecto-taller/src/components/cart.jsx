import { useContext } from "react";
import { CartContext } from "@context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <aside className="cart">
      <h3>Carrito de Compras</h3>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío 🛒</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </aside>
  );
};

export default Cart;
