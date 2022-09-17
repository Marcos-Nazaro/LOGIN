import "./styles.css";

/*
Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el
sistema tiene registrado el usuario: Juan y la clave
claveJuan
*/

let inpUser = document.getElementById("user");
let inpPasword = document.getElementById("pasword");
let btn = document.getElementById("btn");
let p = document.getElementById("parraf");
let user: string = "Juan";
let pasword: string = "claveJuan";

btn.addEventListener("click", () => {
  if (user === inpUser.value && pasword === inpPasword.value) {
    p.innerText = " Usuario y Contraseña Correctos";
  } else {
    p.innerText = "Usuario o Contraseña Incorrectos";
  }
});
