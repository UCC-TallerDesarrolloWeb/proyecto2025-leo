import { useContext } from "react";
import { CartContext } from "@context/CartContext";

// Import imágenes
import fc26 from "@assets/fc26.jpg";
import battlefield from "@assets/battlefield.jpg";


const Home = () => {
  const { addToCart } = useContext(CartContext);

  const featuredGames = [
    { id: 1, title: "FC 26", price: 69.99, img: fc26 },
    { id: 2, title: "Battlefield 6", price: 69.99, img: battlefield },
    
  ];

  return (
    <main className="home-page">
      <h1>Juegos Populares</h1>

      <div className="catalogo">
        {featuredGames.map((game) => (
          <div className="card" key={game.id}>
            <div className="content">
              <img src={game.img} alt={game.title} />
              <p>${game.price}</p>
              <button onClick={() => addToCart(game)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="login-box">
        <h2>Inicio de Sesión</h2>

        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Ingrese su email" />

          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="Ingrese su contraseña" />

          <button type="submit">Entrar</button>
        </form>
      </footer>
    </main>
  );
};

export default Home;