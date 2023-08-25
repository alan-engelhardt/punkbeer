fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  data.forEach((beer) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("h3").textContent = beer.name;
    klon.querySelector("img").src = beer.image_url;
    if (beer.method.twist) {
      klon.querySelector("article").classList.add("twisted");
      klon.querySelector("details span").textContent = beer.method.twist;
    }
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("p+p span").textContent = beer.ebc;
    parent.appendChild(klon);
  });
}
