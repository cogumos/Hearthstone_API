const fillCardsContainer = (cards) => {
    const cards_container = document.querySelector("#cards_container")
    cards_container.innerHTML = "" // limpa tudo que está dentro do elemento com id cards_container
    cards.map((card) => {
        cards_container.innerHTML += `
        <div class="card"> 
            <img src=${card.img} alt=${card.name} width="240" height="237"> 
        </div>`

    })
}