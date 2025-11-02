import { useContext } from "react";
import { CartContext } from "@context/CartContext";

import battlefield from "@assets/battlefield.jpg";
import thelastofus from "@assets/thelastofus.jpg";
import terraria from "@assets/terraria.jpg";
import snipereelite from "@assets/sniper.jpg";
import metro from "@assets/metro.jpg";
import gta from "@assets/gta.jpg";
import doom from "@assets/doom.jpg";
import fc26 from "@assets/fc26.jpg";




const products = [
  { id: 1, title: "Battlefield", price: 39.99, img: battlefield },
  { id: 2, title: "The Last of Us", price: 39.99, img: thelastofus },
  { id: 3, title: "Terraria", price: 9.99, img: terraria },
  { id: 4, title: "Sniper Elite 5", price: 29.99, img: snipereelite },
  { id: 5, title: "Metrot", price: 26.99, img: metro },
  { id: 6, title: "GTA V", price: 22.99, img: gta },
  { id: 7, title: "doom", price: 44.99, img: doom },
  { id: 8, title: " FC26", price: 49.99, img: fc26 },
];

export default function Catalogo() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="catalogo-container">
      <h1>Catálogo de Videojuegos</h1>

      <div className="products-grid">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.title} />
            
            <h3>{item.title}</h3>
            <p>${item.price}</p>

            <button onClick={() => addToCart(item)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}