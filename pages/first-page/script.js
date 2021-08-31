  //input 4 item
  document.getElementById('shest1').oninput = function () {
    if (this.value.length > 4) this.value = this.value.substr(0, 4); // в поле можно ввести только 4 символов
  }
  document.getElementById('popup2-count').oninput = function () {
    if (this.value.length > 4) this.value = this.value.substr(0, 4); 
  }
  document.getElementById('credit-card').oninput = function () {
    if (this.value.length > 16) this.value = this.value.substr(0, 16); 
  }
  document.getElementById('cvv').oninput = function () {
    if (this.value.length > 3) this.value = this.value.substr(0, 3); 
  }

  

  // Start modal window:

  const popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');
  const getMoneys = document.querySelectorAll('.dollar');
  const btn10 = document.querySelectorAll('.popup2__btnDoll-link')

  let unlock = true;

  const timeout = 800;
 // get money btn 
 if(getMoneys.length > 0){
   for (let i = 0; i < getMoneys.length; i++){
     const getMoney = getMoneys[i];
     getMoney.addEventListener('click', function (e) {
       const getMoneyValue = getMoney.getAttribute('value');
       let inputPopup2 = document.getElementById('popup2-count');
       if(getMoneyValue === '1') {
        window.setTimeout(function ()
        {
          inputPopup2.focus();
          inputPopup2.value = '';
          btn10[0].style.border = 'solid 5px #F27E21';
          btn10[1].style.border = 'solid 0px #F27E21';
          btn10[2].style.border = 'solid 0px #F27E21';
          btn10[3].style.border = 'solid 0px #F27E21';
          btn10[4].style.border = 'solid 0px #F27E21';
          btn10[5].style.border = 'solid 0px #F27E21';
        }, 0);
       }else if(getMoneyValue === '20'){
        btn10[0].style.border = 'solid 0px #F27E21';
        btn10[1].style.border = 'solid 5px #F27E21';
        btn10[2].style.border = 'solid 0px #F27E21';
        btn10[3].style.border = 'solid 0px #F27E21';
        btn10[4].style.border = 'solid 0px #F27E21';
        btn10[5].style.border = 'solid 0px #F27E21';
       inputPopup2.value = getMoneyValue;
      }
      else if(getMoneyValue === '30'){
        btn10[0].style.border = 'solid 0px #F27E21';
        btn10[1].style.border = 'solid 0px #F27E21';
        btn10[2].style.border = 'solid 5px #F27E21';
        btn10[3].style.border = 'solid 0px #F27E21';
        btn10[4].style.border = 'solid 0px #F27E21';
        btn10[5].style.border = 'solid 0px #F27E21';
       inputPopup2.value = getMoneyValue;
      }
      else if(getMoneyValue === '50'){
        btn10[0].style.border = 'solid 0px #F27E21';
        btn10[1].style.border = 'solid 0px #F27E21';
        btn10[2].style.border = 'solid 0px #F27E21';
        btn10[3].style.border = 'solid 5px #F27E21';
        btn10[4].style.border = 'solid 0px #F27E21';
        btn10[5].style.border = 'solid 0px #F27E21';
       inputPopup2.value = getMoneyValue;
      }
      else if(getMoneyValue === '80'){
        btn10[0].style.border = 'solid 0px #F27E21';
        btn10[1].style.border = 'solid 0px #F27E21';
        btn10[2].style.border = 'solid 0px #F27E21';
        btn10[3].style.border = 'solid 0px #F27E21';
        btn10[4].style.border = 'solid 5px #F27E21';
        btn10[5].style.border = 'solid 0px #F27E21';
       inputPopup2.value = getMoneyValue;
      }
      else if(getMoneyValue === '100'){
        btn10[0].style.border = 'solid 0px #F27E21';
        btn10[1].style.border = 'solid 0px #F27E21';
        btn10[2].style.border = 'solid 0px #F27E21';
        btn10[3].style.border = 'solid 0px #F27E21';
        btn10[4].style.border = 'solid 0px #F27E21';
        btn10[5].style.border = 'solid 5px #F27E21';
       inputPopup2.value = getMoneyValue;
      }
     });

   }
 }

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++){
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup =document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault(); // don't refresh page;
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if(popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++){
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));//FIND UP object class = "popup";
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      }else{
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
    
  }
  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
       if (doUnlock) {
         bodyUnLock();
       }
    }
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  // close modal window on esc

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  })

 // value donation amount;

 document.getElementById('your-donate-btn').onclick = function name() {
   let donateBtn = document.getElementById('shest1');
   let inputPopup2 = document.getElementById('popup2-count');
   let btn10 = document.querySelectorAll('.popup2__btnDoll-link');
   inputPopup2.value = donateBtn.value;
   if(Number(inputPopup2.value) == 0 || Number(inputPopup2.value) == 10 ){
      btn10[0].style.border = 'solid 5px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
 }else if(Number(inputPopup2.value) == 20){
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 5px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
 }else if(Number(inputPopup2.value) == 30){
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 5px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
}else if(Number(inputPopup2.value) == 50){
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 5px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
}else if(Number(inputPopup2.value) == 80){
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 5px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
}else if(Number(inputPopup2.value) == 100){
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 5px #F27E21';
}else{
      btn10[0].style.border = 'solid 0px #F27E21';
      btn10[1].style.border = 'solid 0px #F27E21';
      btn10[2].style.border = 'solid 0px #F27E21';
      btn10[3].style.border = 'solid 0px #F27E21';
      btn10[4].style.border = 'solid 0px #F27E21';
      btn10[5].style.border = 'solid 0px #F27E21';
}
  
}








let timers = null;
// check all inputs have value:
document.getElementById('check-field').onclick =

function timer(){ timers = setInterval( function checkField() {
  let field = document.querySelectorAll('.check-field');
  let count = 0;
  for (let i = 0; field.length > i; i++){
    if(field[i].value === ''){
    }else{
      count++;
    }
  }
  if(count === 8){
    document.getElementById('finlay-btn').classList.remove("disable-btn");
  }else{
    document.getElementById('finlay-btn').classList.add("disable-btn");
  }
  console.log(count);

}, 500);};

document.getElementById("stop").addEventListener("click", stopInterval);
function stopInterval() {
  // To cancel an interval, pass the timer to clearInterval()
  clearInterval(timers);
}

// slider meets 
var d = document;
// var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
// var scroller = d.querySelector('.scroller');
var pos = 0;
// var transform = Modernize.prefixed('transform');
function setTransform() {
  items.style.transform = 'translate3d(' + (-pos * 480) + 'px,0,0)';
}
function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}
function next() {
  pos = Math.min(pos + 1, itemCount - 3);
  setTransform();
}
window.addEventListener('resize', setTransform);

// feedback slider //

// slider meets 
var doc = document;
// var wrap = d.querySelector('.wrap');
var itemsStyle = doc.querySelector('.items-style');
var itemsCount = doc.querySelectorAll('.item-style').length;
// var scroller = d.querySelector('.scroller');
var posI = 0;
// var transform = Modernize.prefixed('transform');
function setTransforms() {
  itemsStyle.style.transform = 'translate3d(' + (posI * 550) + 'px,0,0)';
}
function prevs() {
  if(posI === 0){
    posI = -2;
  }else{
    posI = Math.max(posI - 1, 0);
  }
  setTransforms();
}
function nexts() {
  if(posI === -2){
    posI = 0;
  }else{
  posI = Math.min(posI + 1, itemsCount - 4);
  }
  setTransforms();
}

window.addEventListener('load', setInterval(nexts, 15000));



const doll = document.querySelectorAll('.popup2__btnDoll-link');
if(doll.length > 0){
  for (let i = 0; i < doll.length; i++){
    const getDoll = doll[i];
    getDoll.addEventListener('click', function (e) {
      const getDollValue = getDoll.getAttribute('value');
      let inputPopup2 = document.getElementById('popup2-count');
      if(getDollValue === '10') {
         inputPopup2.value = getDollValue;
         btn10[0].style.border = 'solid 5px #F27E21';
         btn10[1].style.border = 'solid 0px #F27E21';
         btn10[2].style.border = 'solid 0px #F27E21';
         btn10[3].style.border = 'solid 0px #F27E21';
         btn10[4].style.border = 'solid 0px #F27E21';
         btn10[5].style.border = 'solid 0px #F27E21';
       }
       else if(getDollValue === '20'){
       btn10[0].style.border = 'solid 0px #F27E21';
       btn10[1].style.border = 'solid 5px #F27E21';
       btn10[2].style.border = 'solid 0px #F27E21';
       btn10[3].style.border = 'solid 0px #F27E21';
       btn10[4].style.border = 'solid 0px #F27E21';
       btn10[5].style.border = 'solid 0px #F27E21';
      inputPopup2.value = getDollValue;
     }
     else if(getDollValue === '30'){
       btn10[0].style.border = 'solid 0px #F27E21';
       btn10[1].style.border = 'solid 0px #F27E21';
       btn10[2].style.border = 'solid 5px #F27E21';
       btn10[3].style.border = 'solid 0px #F27E21';
       btn10[4].style.border = 'solid 0px #F27E21';
       btn10[5].style.border = 'solid 0px #F27E21';
      inputPopup2.value = getDollValue;
     }
     else if(getDollValue === '50'){
       btn10[0].style.border = 'solid 0px #F27E21';
       btn10[1].style.border = 'solid 0px #F27E21';
       btn10[2].style.border = 'solid 0px #F27E21';
       btn10[3].style.border = 'solid 5px #F27E21';
       btn10[4].style.border = 'solid 0px #F27E21';
       btn10[5].style.border = 'solid 0px #F27E21';
      inputPopup2.value = getDollValue;
     }
     else if(getDollValue === '80'){
       btn10[0].style.border = 'solid 0px #F27E21';
       btn10[1].style.border = 'solid 0px #F27E21';
       btn10[2].style.border = 'solid 0px #F27E21';
       btn10[3].style.border = 'solid 0px #F27E21';
       btn10[4].style.border = 'solid 5px #F27E21';
       btn10[5].style.border = 'solid 0px #F27E21';
      inputPopup2.value = getDollValue;
     }
     else if(getDollValue === '100'){
       btn10[0].style.border = 'solid 0px #F27E21';
       btn10[1].style.border = 'solid 0px #F27E21';
       btn10[2].style.border = 'solid 0px #F27E21';
       btn10[3].style.border = 'solid 0px #F27E21';
       btn10[4].style.border = 'solid 0px #F27E21';
       btn10[5].style.border = 'solid 5px #F27E21';
      inputPopup2.value = getDollValue;
     }
    });

  }
}