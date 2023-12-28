var cont = document.querySelector(".container")



  function fetchData() {

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            createCard(data)
        })
}




function createCard(data){
 
  
    data.forEach((val) =>{
        var div= document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
      
        <img src=${val.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${val.name}</h4>
          <p class="card-symbol">Symbol=${val.symbol}</p>
          <p class="card-price">Price=${val.current_price}</p>
          <p class="card_market_cap_rank">market_cap_rank=${val.market_cap_rank}</p>
        </div>
   
        `
        cont.appendChild(div)
    })
   
}

createCard()