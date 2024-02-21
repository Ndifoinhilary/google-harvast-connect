import { products } from "../data/data.js";



const grid1 = document.querySelector('.grid-1 ');
const grid2 = document.querySelector('.grid-2 ');
const grid3 = document.querySelector('.grid-3');
 


function addHtml(firstIndex, lastIndex){
  let productHtml = ''
  products.slice(firstIndex, lastIndex).forEach(product =>{  
    
    productHtml +=  `     
      <div class="cart">
          <div class="produc-img-wrapper relative">
             <img class="product-img" src="./img/${product.image}" alt="">
             <img class="absolute top-0" src"./img/menu_vertical_24px.png">
          </div>
          <div class="product-info">
             <div class="product-name">${product.name}</div>
             <div class="description">
                 ${product.description}
                 </div>
                 <div class="product-price"><i class="">Price: ${product.price}XAF</i></div>
                 <div class="location"><span class="material-symbols-outlined">
                     location_on
                     </span><i class="">${product.location}</i>
                 </div>
            </div>
            <div class="btn-wrapper mt-2">
            <button class="sup-btn mrkt-btn">Contact Supplier</button>
            <button class="chat-btn mrkt-btn">Chat now</button>
            </div>
            
        </div>
     `
  });
     return productHtml;
}
function renderDesktopgrid(){
   const textContent = addHtml(0, -1)
   document.querySelector('.carts-grid ').innerHTML = textContent;
   
}

renderDesktopgrid();
function rendegrid1(){
  
  const textContent = addHtml(0, 3)
  document.querySelector('.grid-1').innerHTML = textContent;
  
}
rendegrid1();

function rendegrid2(){
  const textContent = addHtml(3, 6)
  document.querySelector('.grid-2').innerHTML = textContent;
  
}
rendegrid2()

function rendegrid3(){
  const textContent = addHtml(6, 9)
  document.querySelector('.grid-3').innerHTML = textContent;
  
}
rendegrid3()





