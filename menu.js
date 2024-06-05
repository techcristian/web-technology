
document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav-menu").classList.toggle("show");
})

  document.querySelector(".showcase").addEventListener("click",()=>{
  document.querySelector(".nav-menu").classList.toggle("show");
})
document.querySelector(".small-x").addEventListener("click",()=>{
  document.querySelector(".nav-menu").classList.toggle("show");
})


const subMenus = document.querySelectorAll(".sub-menu");
  const buttons = document.querySelectorAll(".sidebar ul button");

const onClick = (item) => {
  subMenus.forEach((menu) => (menu.style.height = "0px"));
  buttons.forEach((button) => button.classList.remove("active"));

  if (!item.nextElementSibling) {
    item.classList.add("active");
    return;
  }

  const subMenu = item.nextElementSibling,
    ul = subMenu.querySelector("ul");

  if (!subMenu.clientHeight) {
    subMenu.style.height = `${ul.clientHeight}px`;
    item.classList.add("active");
  } else {
    subMenu.style.height = "0px";
    item.classList.remove("active");
  }
};


ScrollReveal().reveal('.showcase',{daley:500});
ScrollReveal().reveal('.news-cards',{daley:1000});
ScrollReveal().reveal('.cards-banner-one',{daley:1000});
ScrollReveal().reveal('.cards-banner-two',{daley:1000});
ScrollReveal().reveal('.social',{daley:1000});
ScrollReveal().reveal('.fotter-links',{daley:1000});

/*Images with zoom*/
 let imgs = document.querySelectorAll("img");
 for(let i=0; i < imgs.length; i++){
 imgs[i].addEventListener("mouseover", mostrarEfecto,false);
 imgs[i].addEventListener("mouseout", retirarEfecto,false);
 }
function mostrarEfecto(e) {
  let actionZone;
  if(e.target == document.getElementById("img1")){
    actionZone= "#img1";
  } else if(e.target == document.getElementById("img2")){
    actionZone="#img2";
  } else if(e.target == document.getElementById("img3")){
    actionZone="#img3";
  }else if(e.target == document.getElementById("img4")){
    actionZone="#img4";
  }else if(e.target == document.getElementById("img5")){
    actionZone="#img5";
  }else if(e.target == document.getElementById("img6")){
    actionZone="#img6";
  } else if(e.target == document.getElementById("img7")){
    actionZone="#img7";
  } else if(e.target == document.getElementById("img8")){
    actionZone="#img8";
  }
  $(actionZone).css({
    transform:"scale(1.3)",
    transition:"transform 0.3s",
    opacity:"0.5",
  })
}
function retirarEfecto(e) {
  let actionZone;
  if(e.target == document.getElementById("img1")){
    actionZone= "#img1";
  } else if(e.target == document.getElementById("img2")){
    actionZone="#img2";
  } else if(e.target == document.getElementById("img3")){
    actionZone="#img3";
  }else if(e.target == document.getElementById("img4")){
    actionZone="#img4";
  }else if(e.target == document.getElementById("img5")){
    actionZone="#img5";
  }else if(e.target == document.getElementById("img6")){
    actionZone="#img6";
  }else if(e.target == document.getElementById("img7")){
    actionZone="#img7";
  } else if(e.target == document.getElementById("img8")){
    actionZone="#img8";
  }
  $(actionZone).css({
    transform:"scale(1)",
    transition:"transform 0.3s",
    opacity:"0.9",
  })   
};
    //parallax
    $(window).scroll(function () {
      let barra = $(window).scrollTop();
      let position = barra * 0.15;
      $("body").css({
        "background-position": "0-" + position + "px",
      });
   
      $(".cards-banner-one").css({
        "background-position": "0-" + position + "px",   
      });
      $(".cards-banner-two").css({
        "background-position": "0-" + position + "px",   
      });
     
    });