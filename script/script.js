import { data } from "./data.js";
//// HEADER////
let main = document.querySelector("main");
let header = document.createElement("header");
let body = document.querySelector("body");
let div1 = document.createElement("div");
div1.classList.add("divbox");
header.append(div1);
body.prepend(header);
let div2 = document.createElement("div");
div2.classList.add("container");
header.append(div2);
div2.append(div1);
let title = document.createElement("h1");
title.classList.add("title1");
let text = document.createElement("h2");
text.classList.add("text1");

div1.append(title);
div1.append(text);
title.innerText = "Harry Potter";
text.append("View all characters from the Harry Potter universe");
//MAIN///

/// INPUT     SELECT /////
let div3 = document.createElement("div");
let div4 = document.createElement("div");
main.append(div3);
main.append(div4);
div3.classList.add("container");
div4.classList.add("inputbox");
div3.append(div4);
let label = document.createElement("label");
label.classList.add("LableName");
label.innerText = "Name";
div4.append(label);
let label2 = document.createElement("label2");
label2.classList.add("Labelshcool");
label2.innerText = "Shcool";
div4.append(label2);

let input1 = document.createElement("input");
let select = document.createElement("select");
input1.classList.add("inputName");
select.classList.add("selectShcool");
div4.append(input1);
div4.append(select);
input1.setAttribute("type", "text", "placeholder", "Hermione");

let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");
let option5 = document.createElement("option");
let option6 = document.createElement("option");
option1.innerText = "Choose one";
option2.innerText = "Gryffindor";
option3.innerText = "Slytherin";
option4.innerText = "Hufflepuff";
option5.innerText = "Ravenclaw";
option6.innerText = "Saint Code";
select.append(option1);
select.append(option2);
select.append(option3);
select.append(option4);
select.append(option5);
select.append(option6);
let hr = document.createElement("hr");

main.append(hr);
////       Flex CARD          /////
function cardShcool(icon, name, actor, gender, house, wand, alive) {
  let div7 = document.createElement("div");
  let image = document.createElement("img");
  image.setAttribute("src", icon);
  let namecard = document.createElement("h3");
  let _actor = document.createElement("p");
  let _gender = document.createElement("p");
  let _house = document.createElement("p");
  let _wand = document.createElement("p");
  let _alive = document.createElement("p");

  console.log(image);

  div7.append(image);

  div7.append(namecard);
  namecard.append(name);
  _actor.append(actor);
  div7.append(_actor);
  _gender.append(gender);
  div7.append(_gender);
  _house.append(house);
  div7.append(_house);
  _wand.append(wand);
  div7.append(_wand);
  _alive.append(alive);
  div7.append(_alive);

  namecard.classList.add("namestudent");
  // .classList.add("info");

  div5.classList.add("container1");
  div6.classList.add("Flexbox");
  div7.classList.add("Flexrow");
  main.append(div5);
  div5.append(div6);
  div6.append(div7);
}
let div6 = document.createElement("div");
let div5 = document.createElement("div");

console.log(data);
data.forEach((elem) =>
  cardShcool(
    elem.image,
    elem.name,
    elem.actor,
    elem.gender,
    elem.house,
    elem.wand?.core,
    elem.alive ? "Yes" : "No"
  )
);

input1.addEventListener("input", (event) => inputHandler(event));

function inputHandler(event) {
  console.log(event);
  let sort = data.filter(
    (element) =>
      element.actor.toLowerCase().includes(event.target.value.toLowerCase()) ||
      element.name.toLowerCase().includes(event.target.value.toLowerCase())
  );

  document.querySelector(".Flexbox").innerHTML = "";
  getSortData(sort);
}

let getSortData = (sort) => {
  sort.forEach((element) => {
    cardShcool(
      element.image,
      element.name,
      element.actor,
      element.gender,
      element.house,
      element.wand,
      element.alive ? "Yes" : "No"
    );
  });
};

// let new_element = document.createElement("div"); ///main[0].append(document.createElement("p"))
// // main_element.innerText = "Так добавить текс внутри тега p";
// main[0].append(new_element);
// new_element.innerHTML = "<img src = 'img/img.png  ' >  ";

// new_element.append((document.createElement("p").innerText = "100"));
// new_element.append(
//   (document.createElement("p").innerText =
//     "Hundred, points, symbol, wow, win, perfect, parties")
// );
// new_element.innerText;
// text-decoration: underline;
// let new1 = document.createElement("p");
// new_element.append(new1);
// new1.innerText = "100";
// let new2 = document.createElement("p");
// new_element.append(new2);
// new2.innerText = "Hundred, points, symbol, wow, win, perfect, parties";

// let main = document.getElementsByTagName("main")[0];
// let param = " Я переменная";
// main.insertAdjacentHTML("afterbegin", "<p>" + param + "</p>");

// main.insertAdjacentElement("afterbegin", document.createElement("section"));
// /КЛОНИРУЕМ ОБЬЕКТ/; //
// let clone = main.cloneNode(false);
// console.log(clone);
// let section = document.getElementsByTagName("section")[0];
// section.insertAdjacentHTML("afterbegin", "<div> привет </div>");

// document;

// getEmoji("", "fff", "fff");
// getEmoji("", "fff", "fff");
// getEmoji("", "fff", "fff");
// getEmoji("", "fff", "fff");
// getEmoji("", "fff", "fff");
// getEmoji("", "fff", "fff");
