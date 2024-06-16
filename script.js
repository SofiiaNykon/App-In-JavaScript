
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
                button.innerText = "Add";
                producItemPrice.append(price, button)
                productItem.append(img, productTitle, productDescribe, producItemPrice);
                list.append(productItem);
              }
}
createContainer()

button.addEventListener(`click`, () => {
const cart = document.querySelector(".cart");
const cartListWrapper = document.querySelector(".cart-list-wrapper");
const cartListTitles = document.querySelector(".cart-list-titles");
const cartListItemTitle = document.querySelector(".cart-list-item-title");
const  cartListQuantityTitle = document.querySelector(".cart-list-quantity-title");
const cartList = document.querySelector(".cart-list");
const totalAmount = document.querySelector(".total-amount");

const cartImg = document.createElement("img");
cartImg.classList.add("cart-list-img-section-img")
const inputPrice = document.createElement("input");
inputPrice.classList.add("input")
const buttonResult = document.createElement("button");
const totalAmountSpan = document.createElement("span");
totalAmountSpan.classList.add("total-amount-span")
buttonResult.classList.add("cart-list-quantity-section-button")
// inputPrice.innerHTML = counter;




cart.append(cartEmptyTitle, cartListWrapper, cartListTitles, cartListItemTitle, cartListQuantityTitle, cartList, totalAmount)
})

