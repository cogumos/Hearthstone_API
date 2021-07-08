const class_select = document.querySelector("#class_select")
const type_select = document.querySelector("#type_select")
const faction_select = document.querySelector("#faction_select")
const race_select = document.querySelector("#race_select")

let cardsData = []
const fillCardsContainer = (cards = cardsData) => {
    const length = Number(document.querySelector("#length").value)
    const cards_container = document.querySelector("#cards_container")
    cards_container.innerHTML = "" // limpa tudo que está dentro do elemento com id cards_container
    const filteredCards = cards.slice(0, length)
    filteredCards.map((card) => {
        cards_container.innerHTML += `
            <div class="card"> 
                <img src=${card.img} alt=${card.name} width="240"> 
            </div>`
    })
}

document.querySelector("#length").addEventListener("change", (event) => {
    fillCardsContainer()
})