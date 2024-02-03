const id = 1;

fetch(`https://api.punkapi.com/v2/beers/2`)
  .then((res) => res.json())
  .then(vis);

function vis(beer) {
  console.log(beer[0].ingredients);
  document.querySelector("h2").textContent = beer[0].name;
  document.querySelector("img").src = beer[0].image_url;
  document.querySelector("p").textContent = beer[0].description;
  beer[0].ingredients.hops.forEach((hops) => {
    document.querySelector("#urter").innerHTML += `<li>${hops.name}</li>`;
  });
  beer[0].ingredients.malt.forEach((malt) => {
    document.querySelector("#malt").innerHTML += `<li>${malt.name}</li>`;
  });
  document.querySelector("#yeast").textContent = beer[0].ingredients.yeast;
}
