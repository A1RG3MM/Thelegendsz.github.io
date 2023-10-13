// Main search bar

const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const gameCards = gameList.querySelectorAll(".card");
  
  gameCards.forEach((card) => {
    const title = card.querySelector(".title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.visibility = "visible";
    } else {
      card.style.visibility = "hidden";
    }
  });
  
  const visibleCards = Array.from(gameList.querySelectorAll(".card"));

  if (visibleCards.length > 0) {

  } else {
    
  }
});




