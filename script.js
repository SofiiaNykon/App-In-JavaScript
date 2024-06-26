
const userFetch = async () =>{
  const response  = await fetch('https://fakestoreapi.com/products?limit=15');
   const productFetch =  await response.json();
    return productFetch;
}               
              async function createContainer(){
                const products = await userFetch();
                const list = document.querySelector(".products-container");
                for(const product of products){
                const productItem = document.createElement("div");
                const img = document.createElement("img");
                const productTitle = document.createElement("h1");
                const productDescribe = document.createElement("p");
                const  producItemPrice = document.createElement("div");
                const price = document.createElement("span");
                const button = document.createElement("button");
                //adding classes
                productItem.classList.add("product-item");
                img.classList.add("pictures");
                productTitle.classList.add("title");
                productDescribe.classList.add(".product-item-price");
                productDescribe.classList.add("product-description");
                producItemPrice.classList.add("product-item-price");
                price.classList.add("product-item-price-span");
                button.classList.add("product-price-button");
            
                img.src = product.image;
                console.log(img)
                productTitle.innerHTML = product.title;
                productDescribe.innerHTML = product.description;
                price.innerHTML = product.price;
                button.addEventListener(`click`, () => addToCart(product))
                button.innerText = "Add";
                producItemPrice.append(price, button)
                productItem.append(img, productTitle, productDescribe, producItemPrice);
                list.append(productItem);
              }
}


const addToCart = (product) => (`click`, () => {
const cartListItems = document.getElementsByClassName("cart-list-item");
for(const item of cartListItems){
  if(product.id === +item.getAttribute("id")){
    const quantityInput = item.querySelector(".cart-list-quantity-section > input");
    quantityInput.value++;
    updateCarTotal();
    return;
  }
}

const cart = document.querySelector(".cart-list");
const emptyCartTitle = document.querySelector(".cart-empty-title");
const cartListWrapper = document.querySelector(".cart-list-wrapper");
// creating elements
const cartListItem = document.createElement("li");
const cartListImgSection = document.createElement("section");
const cartListPriceSection = document.createElement("section");
const cartListQuantitySection = document.createElement("section");
const image = document.createElement("img");
const title = document.createElement("h4");
const price = document.createElement("span");
const quantity = document.createElement("input");
const removeBtn = document.createElement("button");
quantity.addEventListener("change", updateCartTotal);
removeBtn.addEventListener("click", (event) =>
  removeProductFromCart(event, product)
);
cartListItem.classList.add("cart-list-item");
cartListImgSection.classList.add(
  "cart-list-item-section",
  "cart-list-img-section"
);
cartListPriceSection.classList.add(
  "cart-list-item-section",
  "cart-list-price-section"
);
cartListQuantitySection.classList.add(
  "cart-list-item-section",
  "cart-list-quantity-section"
);

image.src = product.image;
title.innerText = product.title;
price.innerText = `${product.price}$`;
quantity.type = "number";
quantity.value = 1;
quantity.min = 1;
removeBtn.innerText = "REMOVE";
emptyCartTitle.style.display = "none";
cartListWrapper.style.display = "block";
// appending values
cartListImgSection.append(image, title);
cartListPriceSection.appendChild(price);
cartListQuantitySection.append(quantity, removeBtn);
cartListItem.setAttribute("id", product.id);
cartListItem.append(
  cartListImgSection,
  cartListPriceSection,
  cartListQuantitySection
);
cart.appendChild(cartListItem);
updateCartTotal();
});
createContainer()


// const cart = document.querySelector(".cart");
// const cartListWrapper = document.querySelector(".cart-list-wrapper");
// const cartListTitles = document.querySelector(".cart-list-titles");
// const cartListItemTitle = document.querySelector(".cart-list-item-title");
// const  cartListQuantityTitle = document.querySelector(".cart-list-quantity-title");
// const cartList = document.querySelector(".cart-list");
// const totalAmount = document.querySelector(".total-amount");

// const cartImg = document.createElement("img");
// cartImg.classList.add("cart-list-img-section-img")
// const inputPrice = document.createElement("input");
// inputPrice.classList.add("input")
// const buttonResult = document.createElement("button");
// const totalAmountSpan = document.createElement("span");
// totalAmountSpan.classList.add("total-amount-span")
// buttonResult.classList.add("cart-list-quantity-section-button")
// inputPrice.innerHTML = counter;

// cart.append(cartEmptyTitle, cartListWrapper, cartListTitles, cartListItemTitle, cartListQuantityTitle, cartList, totalAmount)
// })

