const productosCarrito = JSON.parse(
  localStorage.getItem("productos-en-carrito")
);
// console.log(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const contenedorCarritoComprado = document.querySelector("#carrito-acciones");

let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
let contenedorTotalCarrito = document.querySelector("#total");

function cargarProductosCarrito() {
  if (productosCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
    <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${
        producto.titulo
      }">
    <div class="carrito-producto-titulo">
        <small>Titulo</small>
        <h3>${producto.titulo}
    </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
        
    </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>$${producto.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>$${producto.precio * producto.cantidad}</p>
    </div>
    <button class="carrito-producto-eliminar" id="${
      producto.id
    }"><i class="bi bi-trash3-fill"></i></button>
    
    `;

      contenedorCarritoProductos.append(div);
    });
  } else {
   
  }
  actualizarBotonesEliminar();
  actualizarTotalCarrito();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  let idBoton = e.currentTarget.id;
  let index = productosCarrito.findIndex((producto) => producto.id === idBoton);
  productosCarrito.splice(index, 1);
  // console.log(productosCarrito)
  cargarProductosCarrito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosCarrito)
  );
}

function actualizarTotalCarrito() {
  let calculoTotal = (total.innerText = productosCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  ));
  total.innerText = `$${calculoTotal}`;
}
