
function updateSearchBarVisbility(){
    const subHeaderOne = document.querySelector('#subHeaderH1');
    window.addEventListener('scroll', ()=>{
        if(window.innerWidth < 630){
            if(window.scrollY > 500){
            subHeaderOne.classList.remove('hidden');
            subHeaderOne.classList.add('flex');
            }
            else if( window.scrollY < 500){
                subHeaderOne.classList.add('flex');
                subHeaderOne.classList.remove('hidden');
            }
        }
        
        else if(window.innerWidth >= 640){
            if(window.scrollY > 500){
            subHeaderOne.classList.add('flex');
            subHeaderOne.classList.remove('hidden');
            }
            else if ( window.scrollY < 500){
                subHeaderOne.classList.add('hidden')
                subHeaderOne.classList.add('flex');
            }
        }
    })


}



document.querySelector('#camera-btn').addEventListener('click', ()=>{
  document.querySelector('.upload-img-container').style.display = 'block';
});

document.querySelector('.cancel-btn').addEventListener('click', ()=>{
  document.querySelector('.upload-img-container').style.display = 'none';
})




updateSearchBarVisbility();
window.addEventListener('resize', 
    updateSearchBarVisbility
);
window.addEventListener('scroll',
    updateSearchBarVisbility
); 


  document.querySelector('.prevBtn').addEventListener('click', ()=> {
    scrollContainer(-1500);
  });
  
  document.querySelector('.nextBtn').addEventListener('click', ()=> {
    scrollContainer(1500);
  });



function scrollContainer(scrollAmount){
  const container = document.querySelector('.carts-container');
  container.scrollLeft += scrollAmount;
  return container.scrollLeft;
}

function googletranslateElementInit(){
  new google.translate.TranslateElement({
    pageLanguage: 'en', includesLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'translateButton');
}






  
