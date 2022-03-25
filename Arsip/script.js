let body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    img = document.querySelectorAll(".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox .querySelector(".close");

   for (let image of img) {
     image.addEventListener("click", ()=>{
       showImg.src = image.src;
       lightBox.style.display = "block";
       body.style.overflow = "hidden";
       close.onclick = ()=>{
         lightBox.style.display = "none";
         body.style.overflow = "visible";
       };
     });
   };


   const btnHam = document.querySelector('.ham-btn');
   const btnTimes = document.querySelector('.times-btn');
   const navBar = document.getElementById('nav-bar');
   
   btnHam.addEventListener('click', function(){
       if(btnHam.className !== "")
       {
           btnHam.style.display = "none";
           btnTimes.style.display = "block";
           navBar.classList.add("show-nav");
       }
   })
   
   btnTimes.addEventListener('click', function(){
       if(btnHam.className !== "")
       {
           this.style.display = "none";
           btnHam.style.display = "block";
           navBar.classList.remove("show-nav");
       }
   })