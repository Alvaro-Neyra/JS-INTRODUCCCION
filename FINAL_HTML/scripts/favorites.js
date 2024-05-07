let favoritesProducts = JSON.parse(localStorage.getItem('favorites'));

function printFavorites(id) {
    const product = favoritesProducts.find(product => product.id == id);
    const container = document.querySelector(".container");
    container.innerHTML = "";

    if (favoritesProducts === null || favoritesProducts.length === 0) {
        container.innerHTML = `
        <article class="product-cart">
            <div class="title-product">No hay productos en favoritos</div>
        </article>
        `
    } else {
            favoritesProducts.forEach(product => {
                const productDiv = document.createElement("article");
                productDiv.classList.add("product-cart");
                productDiv.innerHTML = `
                <img class="product-img" src="${product.photo}">
                
                <div class="product-details">
                <div class="title-product">${product.title}</div>
                <div class="color-product">${product.color}</div>
                <!--Mostrar la cantidad a comprar-->
                <input class="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)">
                </div>
                <div class="product-price">
                    P.U. $ ${product.price}.00 <br>
                    --------------- <br>
                Subtotal $ ${product.price * product.quantity}.00
                <button type="button" class="favoritos-button" onclick="starItem(${product.id})" >Anadir a favoritos</button>
                </div>
                `;
                        //Agregar el div al contenedor
                        container.appendChild(productDiv);
            });
        }
};