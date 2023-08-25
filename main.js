fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then((data) => vis(data));

const temp = document.querySelector("template").content;
const gode = document.querySelector("#gode");
const onde = document.querySelector("#onde");

function vis(data) {
  data.forEach((beer) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("h3").textContent = beer.name;
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("img").src = beer.image_url;
    if (beer.method.twist) {
      klon.querySelector("article").classList.add("twisted");
      klon.querySelector("details span").textContent = beer.method.twist;
    }
    if (beer.abv > 5.5) {
      klon.querySelector("article").classList.add("strong");
    }
    if (beer.srm > 20) {
      dark.appendChild(klon);
    } else {
      light.appendChild(klon);
    }
  });
}
