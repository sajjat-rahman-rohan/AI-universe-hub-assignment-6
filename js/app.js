// const singlePlayer = (id) => {
//   const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => showSinglePlayer(data.players[0]));
// };

// api link card load function
const loadCard = (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
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
              <button class="card-details"  >
              <i class="bi bi-arrow-right" onclick="loadCardDetails('${
                data.id
              }')"   data-bs-toggle="modal"
              data-bs-target="#exampleModal" ></i>
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
  document.getElementById("spinner").classList.remove("d-none");
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
      showCarddata(data.data.tools);
    });
};

//  card modal show
const loadCardDetails = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayCardDetails(data.data));
};

// display
const displayCardDetails = (data) => {
  console.log(data.features.feature_name);

  const featureValue = Object.values(data.features);
  console.log(featureValue[0].feature_name);

  const cardModal = document.getElementById("card-modal");
  cardModal.innerText = "";

  //   data.forEach((data) => {
  const div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML = `
    <div class="col-6">
     <div class="card modal-info">
        <div class="card-body">
        <h5 class="card-title">
         ${data.description ? data.description : "No data Found"}
        </h5>

        <div
            class="modal-price-container text-center d-flex justify-content-between align-items-center"
        >
            <div class="modal-price one">
            <h5>
              ${
                data.pricing[0].price ? data.pricing[0].price : "No data Found"
              }   ${
    data.pricing[0].plan ? data.pricing[0].plan : "No data Found"
  }
            </h5>
            </div>
            <div class="modal-price two">
            <h5>
            ${
              data.pricing[1].price ? data.pricing[1].price : "No data Found"
            }   ${data.pricing[1].plan ? data.pricing[1].plan : "No data Found"}
            </h5>
            </div>
            <div class="modal-price three">
            <h5>
            ${
              data.pricing[2].price ? data.pricing[2].price : "No data Found"
            }   ${data.pricing[2].plan ? data.pricing[2].plan : "No data Found"}
            </h5>
            </div>
        </div>

        <div
            class="d-flex justify-content-between align-items-center"
        >
            <ul>
            <li>1. ${
              featureValue[0].feature_name
                ? featureValue[0].feature_name
                : "No data Found"
            } </li>
            <li>2. ${
              featureValue[1].feature_name
                ? featureValue[1].feature_name
                : "No data Found"
            }</li>
            <li>3. ${
              featureValue[2].feature_name
                ? featureValue[2].feature_name
                : "No data Found"
            }</li>
            </ul>
            <ul>
            <li>1. ${
              data.integrations[0] ? data.integrations[0] : "No data Found"
            }</li>
            <li>2. ${
              data.integrations[1] ? data.integrations[1] : "No data Found"
            }</li>
            <li>3. ${
              data.integrations[2] ? data.integrations[2] : "No data Found"
            }</li>
            </ul>
        </div>
        </div>
     </div>
    </div>
    <div class="col-6">
     <div class="card">
        <div class="card-body">
        <img
            src="${data.image_link[0] ? data.image_link[0] : "No Image Found"}"
            class="card-img-top w-100"
            alt="..."
        />
        <div class="card-text-info text-center">
            <h5 class="card-title">${
              data.input_output_examples[0].input
                ? data.input_output_examples[0].input
                : "No data Found"
            }</h5>
            <p class="card-text">
            ${
              data.input_output_examples[0].output
                ? data.input_output_examples[0].output
                : "No data Found"
            }
            </p>
        </div>
        </div>
     </div>
    </div>

  `;

  cardModal.appendChild(div);
};

loadCardDetails();

loadCard();
