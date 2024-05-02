// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem('cart'));

/**
 * Renderizar dinámicamente los productos del carrito
 */
//Definir funcion printCart
function printCart() {
  //Traer el selector del contenedor de productos
  const container = document.querySelector(".container");
  //Limpiar el contenedor
  container.innerHTML = "";
  //Iterar sobre los productos del carrito
  cartproducts.forEach(product => {
    //Crear un div que contenga la información del producto
    const productDiv = document.createElement("article");
    //Agregar la clase product al div
    productDiv.classList.add("product-cart");
    //Agregar el contenido al div
    productDiv.innerHTML = `
    <img class="product-img" src="${product.photo}">
  
    <div class="product-details">
      <div class="title-product">${product.title}</div>
      <div class="color-product">${product.color}</div>
      <!--Mostrar la cantidad a comprar-->
      <div class="product-input">${product.quantity}</div>
    </div>
    <div class="product-price">
        P.U. $ ${product.price}.00 <br>
        --------------- <br>
     Subtotal $ ${product.price * product.quantity}.00
    </div>
    `;
    //Agregar el div al contenedor
    container.appendChild(productDiv);
  });
}

/**
 * Renderizar el total a pagar
 */
//Definir función printTotal
function printTotal() {
    //Definir variable para almacenar el precio total
    let totalPrice = 0;
    //Iterar sobre los productos del carrito
    cartproducts.forEach(product => {
      //Sumar el precio de cada producto al total
      totalPrice = totalPrice + (product.price * product.quantity);
    });

  //Traer el selector del contenedor del total
  const totalContainer = document.querySelector("#total");
  //Limpiar el contenedor
  totalContainer.innerHTML = "";
  //Agregar el html
    totalContainer.innerHTML = `
    <h1 class="cart-title">Resumen del pedido</h1>
        <p class="cart-total">Total        USD $${totalPrice}</p>
        <p class="cart-tax">Taxes</p>
        <button class="cart-btn">Comprar</button>
    `;
}

printCart();
printTotal();