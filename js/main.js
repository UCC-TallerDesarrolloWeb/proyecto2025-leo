
/**
* Actualiza visualmente el contenido del carrito en pantalla.
* @method actualizarCarrito
* @description
* Recorre todos los productos del arreglo `carrito`, los muestra en la lista HTML
* y calcula el total del precio. También permite eliminar productos individualmente.
* @return {void} No retorna ningún valor.
*/



const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");
const vaciarBtn = document.getElementById("vaciar-carrito");
const carritoContenedor = document.getElementById("carrito-contenedor");

const iconoCarrito = document.querySelector(".carrito img");
iconoCarrito.addEventListener("click", () => {
  carritoContenedor.classList.toggle("carrito-oculto");
});

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const eliminar = document.createElement("button");
    eliminar.textContent = "❌";
    eliminar.style.border = "none";
    eliminar.style.background = "transparent";
    eliminar.style.cursor = "pointer";
    eliminar.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
    li.appendChild(eliminar);
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  totalTexto.textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const productoDiv = e.target.parentElement;
    const nombre = productoDiv.querySelector("h3").textContent;
    const precioTexto = productoDiv.querySelector(".precio").textContent;
    const precio = parseFloat(precioTexto.replace("$", ""));

    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

vaciarBtn.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});


