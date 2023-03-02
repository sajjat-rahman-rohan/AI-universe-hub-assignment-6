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
      showCarddata(data.data);
    });
};

// card data show function
const showCarddata = (data) => {
  console.log(data);
  // html data inject with dom
};

loadCard();
