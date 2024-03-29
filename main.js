fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  data.forEach((beer) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("a").href = `single.html?id=${beer.id}`;
    klon.querySelector("h3").textContent = beer.name;
    klon.querySelector("img").src = beer.image_url;
    if (beer.method.twist) {
      klon.querySelector("article").classList.add("twisted");
      klon.querySelector("details span").textContent = beer.method.twist;
    }
    if (beer.abv > 5.5) {
      klon.querySelector("article").classList.add("strong");
    }
    klon.querySelector("p span").textContent = beer.abv;
    klon.querySelector("p+p span").textContent = beer.ebc;
    parent.appendChild(klon);
  });
}
