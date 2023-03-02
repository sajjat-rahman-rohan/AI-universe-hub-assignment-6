// const singlePlayer = (id) => {
//   const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => showSinglePlayer(data.players[0]));
// };

// api link card load function
const loadCard = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      showCarddata(data.data.tools.slice(0, 6));
    });
};

// card data show function
const showCarddata = (data) => {
  console.log(data);
  // html data inject with dom
  const cardContainer = document.getElementById("card-info");
  cardContainer.innerHTML = "";

  data.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
       <div class="card">
        <div class="card-body">
           <img src="${data.image}" class="card-img w-100 " alt="..." />
           <h5 class="card-title mt-2">Features</h5>
           <ul>
              <li>1. ${
                data.features[0] ? data.features[0] : "No data Found"
              } </li>
              <li>2. ${
                data.features[1] ? data.features[1] : "No data Found"
              } </li>
              <li>3. ${
                data.features[2] ? data.features[2] : "No data Found"
              } </li>
           </ul>
           <hr />
  
           <div
              class="card-text d-flex justify-content-between align-items-center">
              <div class="card-name-date">
              <h5 class="card-title">${
                data.name ? data.name : "No data Found"
              }</h5>
              <p class="card-text mb-2"> ${
                data.description
                  ? data.description.slice(0, 28)
                  : "No data Found"
              }</p>
              <p class="card-date">
                  <i class="bi bi-calendar4-week"></i>   ${
                    data.published_in ? data.published_in : "No data Found"
                  }
              </p>
              </div>
              <button class="card-details">
              <i class="bi bi-arrow-right"></i>
              </button>
           </div>
        </div>
       </div>
    `;

    cardContainer.appendChild(div);
  });
};

//  Show all Data
const showAllCard = (id) => {
  // document.getElementById("spinner").classList.remove("d-none");
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // document.getElementById("spinner").classList.add("d-none");
      showCarddata(data.data.tools);
    });
};

loadCard();
