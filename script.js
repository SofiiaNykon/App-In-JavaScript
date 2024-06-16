
const userFetch = async () =>{
  const response  = await fetch('https://fakestoreapi.com/products?limit=12');
   const productFetch =  await response.json();
    return productFetch;
}                 //creating element
              async function createContainer(){
                const products = await userFetch();
                const list = document.querySelector(".products-container");
                for(const product of products){
                const productItem = document.createElement("div");
                const img = document.createElement("img");
                const productTitle = document.createElement("h1");
                const productDescribe = document.createElement("p");
                const price = document.createElement("span");
                const button = document.createElement("button");
                //adding classes
                productItem.classList.add("product-item");
                img.classList.add("pictures");
                productTitle.classList.add("title");
                productDescribe.classList.add("product-description");
                price.classList.add("product-item-price-span");
                button.classList.add("product-price-button");
            
                img.src = product.image;
                console.log(img)
                productTitle.innerHTML = product.title;
                productDescribe.innerHTML = product.description;
                price.innerHTML = product.price;
                button.innerText = "Add";
              
                productItem.append(img, productTitle, productDescribe, price, button);
                list.append(productItem);
              }
}
createContainer()

button.onclick(){
const cart = document.querySelector(".cart");
const cartEmptyTitle = document.querySelector(".cart-list-titles");
const cartListWrapper = document.querySelector(".cart-list-wrapper");
const cartListTitles = document.querySelector(".cart-list-titles");
const cartListItemTitle = document.querySelector(".cart-list-item-title");
const  cartListQuantityTitle = document.querySelector(".cart-list-quantity-title");
const cartList = document.querySelector(".cart-list");
const totalAmount = document.querySelector(".total-amount");



}

// button.onclick (){
// const counter = 0;

// }