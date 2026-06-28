/*  
    Add the following html to the top of the body tag in the index.html file:
    <div id="fireworks">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
*/

// create fireworks element
let fireworksElement = document.createElement("div");
fireworksElement.id = "fireworks";
for (let i = 0; i < 7; i++) {
  let div = document.createElement("div");
  fireworksElement.appendChild(div);
}

document.body.prepend(fireworksElement);
