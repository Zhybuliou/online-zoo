function myFunction() {
    var element = document.getElementById("sidebar");
    // block
    element.classList.toggle("sidebar");
    element.classList.toggle("sidebar-small");
    // arrow
    var elementBtnStart = document.getElementById("btn-item-start");
    elementBtnStart.classList.toggle("sidebar__item-start-label-img");
    elementBtnStart.classList.toggle("sidebar-small__item-start-label-img");
    // active item sidebar
    var elementSidebarContent = document.getElementById("sidebar__content");
    elementSidebarContent.classList.toggle("sidebar-small__content");
    

    var elementSidebarImg = document.getElementById("sidebar__img-active");
    elementSidebarImg.classList.toggle('sidebar__img-active');

    var elementSidebarImgWrapper = document.getElementById("sidebar__img-wrapper");
    elementSidebarImgWrapper.classList.toggle('sidebar__img-wrapper');
   

    var elementContent = document.getElementById("sidebar__content-eagle");
    elementContent.classList.toggle('sidebar-small__content');

    var elementImgEagle = document.getElementById('sidebar__img-eagle');
    elementImgEagle.classList.toggle('sidebar__img-eagle');
    
    var elementSidebarWrapper = document.getElementById('sidebar__wrapper');
    elementSidebarWrapper.classList.toggle('sidebar__wrapper');
    // side bar gorilla
    var elementContentGorilla = document.getElementById("sidebar__content-gorilla");
    elementContentGorilla.classList.toggle('sidebar-small__content');

    var elementImgGorilla = document.getElementById('sidebar__img-gorilla');
    elementImgGorilla.classList.toggle('sidebar__img-eagle');
    
    var elementSidebarGorilla = document.getElementById('sidebar__wrapper-gorilla');
    elementSidebarGorilla.classList.toggle('sidebar__wrapper');
    // sidebar lemur
    var elementContentLemur = document.getElementById("sidebar__content-lemur");
    elementContentLemur.classList.toggle('sidebar-small__content');

    var elementImgLemur = document.getElementById('sidebar__img-lemur');
    elementImgLemur.classList.toggle('sidebar__img-eagle');
    
    var elementSidebarLemur = document.getElementById('sidebar__wrapper-lemur');
    elementSidebarLemur.classList.toggle('sidebar__wrapper');
  }

  document.querySelector(".button-video").onclick = function(){
    this.style.display = "none";
    document.querySelector(".video-overlay").style.display = "none"
    var startVideo = document.getElementById('zoo-top-video').getAttribute('src');
    document.getElementById('zoo-top-video').setAttribute('src', startVideo + '&autoplay=1')
  }

  //input 4 item
  document.getElementById('shest1').oninput = function () {
    if (this.value.length > 4) this.value = this.value.substr(0, 4); // в поле можно ввести только 4 символов
  }