const races = {
    "orc": "Orc",
    "murloc": "Murloc",
    "demon": "Demon",
    "mech": "Mech",
    "elemental": "Elemental",
    "beast": "Beast",
    "totem": "Totem",
    "pirate": "Pirate",
    "dragon": "Dragon",
    "all": "All",
    "quilboar": "Quilboar",
}

const callApiRace = (event) => {
    const race_name = event.target.value //esse é o valor que vai ser passado na requisição
    const optionsRace = {
        method: 'POST',
        url: 'http://localhost:3000/Races',
        data: { "race_name": race_name },
    };
    axios.request(optionsRace).then(function (response) {
        let cards = []
        const data = response.data.filter((card) => {
            if (card.img) {
                return card
            }
        })
        if (data.length > 50) {
            cards = data.slice(0, 50) // pega as 50 primeiras cartas
        } else {
            cards = data
        }
        fillCardsContainer(cards)

    }).catch(function (error) {
        console.error(error.massage)
    });


}
const fillRaces = () => {
    const race_select = document.querySelector("#race_select")
    race_select.innerHTML += "<option value='' selected disabled hidden>Todos as raças</option>"
    Object.entries(races).map((item) => {
        const race_value = item[0]
        const race_name = item[1]
        race_select.innerHTML += `<option class="option" value=${race_value}>${race_name}</option>`
    })
    race_select.addEventListener("change", callApiRace)
}
fillRaces()