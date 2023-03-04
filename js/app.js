// api link data load function
const loadCard = async (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("spinner").classList.add("d-none");
  showCarddata(data.data.tools.slice(0, 6));
};

// card data show function
const showCarddata = (data) => {
  // console.log(data);

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
              <li>4. ${
                data.features[3] ? data.features[3] : "No data Found"
              } </li>
           </ul>
           <hr />
  
           <div
              class="card-text d-flex justify-content-between align-items-center">
              <div class="card-name-date">
                <h5 class="card-title">${
                  data.name ? data.name : "No data Found"
                }</h5>
                <p class="card-date">
                    <i class="bi bi-calendar4-week"></i>   ${
                      data.published_in ? data.published_in : "No data Found"
                    }
                </p>
              </div>
              <button class="card-details "  >
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

// sort by date all data Descending
const sortByDateD = (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
      sortByDateDisplayD(data.data.tools);
    });
};

//  card modal show function
const loadCardDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCardDetails(data.data);
};

// data display function
const displayCardDetails = (data) => {
  // console.log(data.features.feature_name);

  if (data.pricing === null || typeof data.pricing === " undefined") {
    data.pricing = "Free Of Cost";
  }

  if (data.integrations === null || typeof data.integrations === " undefined") {
    data.integrations = "";
  }

  if (
    data.input_output_examples === null ||
    typeof data.input_output_examples === " undefined"
  ) {
    data.input_output_examples = "Can you give any example?";
  }

  const featureValue = Object.values(data.features);
  // console.log(featureValue);

  const cardModal = document.getElementById("card-modal");
  cardModal.innerText = "";

  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("g-4");
  div.innerHTML = `
    <div class="col-lg-6">
     <div class="card modal-info">
        <div class="card-body">
        <h5 class="card-title">
         ${
           data.description
             ? data.description.slice(0, 100) + "..."
             : "No data Found"
         }
        </h5>

        <div
            class="modal-price-container text-center d-md-flex justify-content-between align-items-center"
        > 
            <div class="modal-price one">
            <h5 >${
              data.pricing[0].plan ? data.pricing[0].plan : "Free Of Cost /"
            }
              ${data.pricing[0].price ? data.pricing[0].price : "Basic"}  
            </h5>
            </div>
            <div class="modal-price two">
            <h5 >${
              data.pricing[1].plan ? data.pricing[1].plan : "Free Of Cost /"
            }
            ${data.pricing[1].price ? data.pricing[1].price : "Pro"}  
            </h5>
            </div>
            <div class="modal-price three">
            <h5 >${
              data.pricing[2].plan ? data.pricing[2].plan : "Free Of Cost /"
            }
            ${data.pricing[2].price ? data.pricing[2].price : "Enterprise"}  
            </h5>
            </div>
        </div>

        <div
            class="d-md-flex justify-content-between align-items-center"
        >    
            <ul>
           <h5 class="card-title">Features</h5>
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
            <li>4. ${
              featureValue.length === 4
                ? featureValue[3].feature_name
                : "No data Found"
            }</li>
            </ul>
            <ul class="mt-md-0 mt-2 ">
           <h5 class="card-title">Integrations</h5>
            <li class="list">  ${
              data.integrations[0] ? data.integrations[0] : "No data Found"
            }</li>
            <li class="list">  ${
              data.integrations[1] ? data.integrations[1] : "No data Found"
            }</li>
            <li class="list">  ${
              data.integrations[2] ? data.integrations[2] : "No data Found"
            }</li>
            <li class="list">  ${
              data.integrations[3] ? data.integrations[3] : "No data Found"
            }</li>
            </ul>
        </div>
        </div>
     </div>
    </div>
    <div class="col-lg-6">
     <div class="card">
        <div class="card-body">
        <button type="button" class=" accuracy-btn">${
          data.accuracy.score ? data.accuracy.score : "No"
        } accuracy</button>
        <img
            src="${data.image_link[0] ? data.image_link[0] : "No Image Found"}"
            class="card-img-top w-100"
            alt="..."
        />
        <div class="card-text-info text-center">
            <h5 class="card-title">${
              data.input_output_examples[0].input
                ? data.input_output_examples[0].input.slice(0, 50)
                : "Can you give any example?"
            }</h5>
            <p class="card-text">
            ${
              data.input_output_examples[0].output
                ? data.input_output_examples[0].output.slice(0, 90) + "..."
                : "No! Not Yet! Take a break!!!"
            }
            </p>
        </div>
        </div>
     </div>
    </div>
  `;

  cardModal.appendChild(div);
};

// sort by date all data Ascending
const sortByDateA = (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("d-none");
      sortByDateDisplayA(data.data.tools);
    });
};

// sort by date function
const sortByDateDisplayA = (data) => {
  // console.log(data);

  let result = data.sort(
    (a, b) =>
      new Date(a.published_in).getTime() - new Date(b.published_in).getTime()
  );
  // console.log(result);

  showCarddata(result);
};

// sort by date function
const sortByDateDisplayD = (data) => {
  // console.log(data);

  let results = data.sort(
    (a, b) =>
      new Date(b.published_in).getTime() - new Date(a.published_in).getTime()
  );
  // console.log(results);

  showCarddata(results);
};

//  Show all Data function
const showAllCard = async (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("spinner").classList.add("d-none");
  showCarddata(data.data.tools);
};

sortByDateD();

sortByDateA();

loadCardDetails();

loadCard();
