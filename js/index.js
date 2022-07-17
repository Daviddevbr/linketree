let img = document.querySelector("img");
let bottonlink = document.querySelectorAll("button.linkrede");
let mudacor = document.querySelector("button.cor");
let body = document.querySelector("body");
let fotoperfil = document.querySelector("img");
let link = document.querySelectorAll("a.link");
let caso = 0;
let layout = document.querySelector("button.layout");

mudacor.addEventListener("click", () => {

  caso++;
  if (caso === 6) {//ESTRUTURA QUE VERIFICA O VALOR DA VARIAVEL CASO PARA INICIA O SWITCH
    caso = 1
  }

  switch (caso) {//EM CADA CASO TEM UMA MANIPULAÇÃO CSS
    case 1:

      body.style.background = "linear-gradient(#6D36FB, #6D36FB )";
      img.style.borderColor = "white";

      link.forEach((item) => {
        item.style.color = "black"

      })

      bottonlink.forEach(function (item, index) {
        item.style.backgroundColor = "white";
        item.style.border="none"


      })

      break;

    case 2:
      body.style.background = "linear-gradient(#8EE2BC, #C95DF7)";
      img.style.borderColor = "white"
      link.forEach((item) => {
        item.style.color = "white"

      })

      bottonlink.forEach(function (item) {
        item.style.backgroundColor = "#293243";
        item.style.border="none"


      })
      break;

    case 3:
      body.style.background = "linear-gradient(#B500BE, #399CE1)";
      img.style.borderColor = "white";
      link.forEach((item)=>{
        item.style.color="black";
      })
      bottonlink.forEach(function (item) {
        item.style.backgroundColor = "white";
        item.style.border="none"

      })
      break;

    case 4:
      body.style.background="linear-gradient(#CF5996, #FA815E)"
      link.forEach((item)=>{
        item.style.color="white";
      })
      bottonlink.forEach(function (item) {
        item.style.backgroundColor = "#ffc53200";
        item.style.border="solid"
        item.style.borderColor="white"

      })
      break;
    case 5:

      body.style.background="linear-gradient(#191816, #191816)"
      img.style.borderColor="#FFC632"
      link.forEach((item)=>{
        item.style.color="black";
      })
      bottonlink.forEach(function (item) {
        item.style.backgroundColor = "#FFC632";
        item.style.border="none"
        

      })

      break;
  }



});

layout.addEventListener("click",()=>{

  /*
  let header=document.querySelector("header");
  img.style.borderRadius="10px"
  img.style.width="300px"
  img.style.height="300px"

  header.style.alignItems="start"*/

  window.alert("estamos ainda trabalhando nisso")

 
})