// let productos = [
//   {
//     id: "arnes-01",
//     titulo: "Arnes 01",
//     imagen: "./productos/arnes01.jpg",
//     categoria: {
//       nombre: "Arneses",
//       id: "arneses",
//     },
//     precio: 1500,
//   },
//   {
//     id: "arnes-02",
//     titulo: "Arnes 02",
//     imagen: "./productos/arnes02.jpg",
//     categoria: {
//       nombre: "Arneses",
//       id: "arneses",
//     },
//     precio: 1700,
//   },
//   {
//     id: "arnes-03",
//     titulo: "Arnes 03",
//     imagen: "./productos/arnes03.jpg",
//     categoria: {
//       nombre: "Arneses",
//       id: "arneses",
//     },
//     precio: 1200,
//   },
//   {
//     id: "arnes-04",
//     titulo: "Arnes 04",
//     imagen: "./productos/arnes04.jpg",
//     categoria: {
//       nombre: "Arneses",
//       id: "arneses",
//     },
//     precio: 1800,
//   },
//   {
//     id: "casco-01",
//     titulo: "Casco 01",
//     imagen: "./productos/casco01.jpg",
//     categoria: {
//       nombre: "Cascos",
//       id: "cascos",
//     },
//     precio: 10200,
//   },
//   {
//     id: "casco-02",
//     titulo: "Casco 02",
//     imagen: "./productos/casco02.jpg",
//     categoria: {
//       nombre: "Cascos",
//       id: "cascos",
//     },
//     precio: 10900,
//   },
//   {
//     id: "casco-03",
//     titulo: "Casco 03",
//     imagen: "./productos/casco03.jpg",
//     categoria: {
//       nombre: "Cascos",
//       id: "cascos",
//     },
//     precio: 15200,
//   },
//   {
//     id: "casco-04",
//     titulo: "Casco 04",
//     imagen: "./productos/casco04.jpg",
//     categoria: {
//       nombre: "Cascos",
//       id: "cascos",
//     },
//     precio: 17800,
//   },
//   {
//     id: "casco-05",
//     titulo: "Casco 05",
//     imagen: "./productos/casco05.jpg",
//     categoria: {
//       nombre: "Cascos",
//       id: "cascos",
//     },
//     precio: 19999,
//   },
//   {
//     id: "cuerda-01",
//     titulo: "Cuerda 01",
//     imagen: "./productos/cuerda01.jpeg",
//     categoria: {
//       nombre: "Cuerdas",
//       id: "cuerdas",
//     },
//     precio: 70200,
//   },
//   {
//     id: "cuerda-02",
//     titulo: "Cuerda 02",
//     imagen: "./productos/cuerda02.jpg",
//     categoria: {
//       nombre: "Cuerdas",
//       id: "cuerdas",
//     },
//     precio: 69200,
//   },
//   {
//     id: "cuerda-03",
//     titulo: "Cuerda 03",
//     imagen: "./productos/cuerda03.jpg",
//     categoria: {
//       nombre: "Cuerdas",
//       id: "cuerdas",
//     },
//     precio: 80000,
//   },
//   {
//     id: "mosqueton-01",
//     titulo: "Mosqueton 01",
//     imagen: "./productos/mosqueton01.jpg",
//     categoria: {
//       nombre: "Mosquetones",
//       id: "mosquetones",
//     },
//     precio: 3500,
//   },
//   {
//     id: "mosqueton-02",
//     titulo: "Mosqueton 02",
//     imagen: "./productos/mosqueton02.jpg",
//     categoria: {
//       nombre: "Mosquetones",
//       id: "mosquetones",
//     },
//     precio: 4500,
//   },
//   {
//     id: "mosqueton-03",
//     titulo: "Mosqueton 03",
//     imagen: "./productos/mosqueton03.jpg",
//     categoria: {
//       nombre: "Mosquetones",
//       id: "mosquetones",
//     },
//     precio: 4300,
//   },
//   {
//     id: "mosqueton-04",
//     titulo: "Mosqueton 04",
//     imagen: "./productos/mosqueton04.jpg",
//     categoria: {
//       nombre: "Mosquetones",
//       id: "mosquetones",
//     },
//     precio: 5150,
//   },
//   {
//     id: "mosqueton-05",
//     titulo: "Mosqueton 05",
//     imagen: "./productos/mosqueton05.jpg",
//     categoria: {
//       nombre: "Mosquetones",
//       id: "mosquetones",
//     },
//     precio: 5200,
//   },
// ];

fetch("./productos.json")
  .then((response) => response.json())
  .then((productos) => {
    // const contenedorProductos = document.querySelector("#contenedor-productos");
    const contenedorProductos = document.getElementById("contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.getElementById("tituloPrincipal");
    let botonesAgregar = document.querySelectorAll(".produdcto-agregar");

    function cargarProductos(productosElegidos) {
      contenedorProductos.innerHTML = "";
      productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen img-fluid">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="produdcto-agregar" id="${producto.id}">Agregar al carrito</button>
           
        </div>
        `;

        contenedorProductos.append(div);
      });
      actualizarBotonesAgregar();
      //   console.log(botonesAgregar);
    }

    cargarProductos(productos);

    botonesCategorias.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        botonesCategorias.forEach((boton) => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(
            (producto) => producto.categoria.id === e.currentTarget.id
          );
          tituloPrincipal.innerText = `
            Productos / ${productoCategoria.categoria.nombre}
            `;
          let productosBoton = productos.filter(
            (producto) => producto.categoria.id === e.currentTarget.id
          );

          cargarProductos(productosBoton);
        } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
        }
      });
    });

    function actualizarBotonesAgregar() {
      botonesAgregar = document.querySelectorAll(".produdcto-agregar");

      botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
      });
    }

    let productosCarrito;
    let productosEnCarritoDos = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoDos) {
      productosCarrito = JSON.parse(productosEnCarritoDos);
    } else {
      productosCarrito = [];
    }

    function agregarAlCarrito(e) {
      let idBoton = e.currentTarget.id;
      let productosAgregar = productos.find(
        (producto) => producto.id === idBoton
      );

      if (productosCarrito.some((producto) => producto.id === idBoton)) {
        let index = productosCarrito.findIndex(
          (producto) => producto.id === idBoton
        );
        productosCarrito[index].cantidad++;
      } else {
        productosAgregar.cantidad = 1;
        productosCarrito.push(productosAgregar);
      }

      console.log(productosCarrito);

      localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosCarrito)
      );
      // Libreria JS
      Toastify({
        text: "Producto agregado al carrito",
        duration: 900,
        close: true,
        gravity: "top",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

      }).showToast();
    }
  });
