let body = document.querySelector("body");
let btn = document.createElement("button");
let input = document.createElement("input");

btn.innerText = "Click me";
btn.setAttribute("id", "bttn");
body.append(btn);

btn = document.querySelector("#bttn");
btn.classList.add(".blue");


input.setAttribute("placehoder", "username");
body.append(input);

let h1 = document.createElement("h1");
h1.innerText = "<u>DOM Practice</u>";
h1.classList.add(".underline");
body.append(h1);

let p = document.createElement("p");
p.innerText = "Apna College <b> Delta </b> Practice";
body.append(p);