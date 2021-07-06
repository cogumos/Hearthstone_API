const factions = {
    "horde": "Horde",
    "alliance": "Alliance",
    "neutral": "Neutral",
}

const callApiFaction = (event) => {
    const faction_name = event.target.value //esse é o valor que vai ser passado na requisição
    const faction = {
        method: 'POST',
        url: 'http://localhost:3000/Factions',
        data: { "faction_name": faction_name },
    };
    axios.request(faction).then(function (response) {
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
const fillFactions = () => {
    const faction_select = document.querySelector("#faction_select")
    faction_select.innerHTML += "<option value='' selected disabled hidden>Todos as facções</option>"
    Object.entries(factions).map((item) => {
        const faction_value = item[0]
        const faction_name = item[1]
        faction_select.innerHTML += `<option class="option" value=${faction_value}>${faction_name}</option>`
    })
    faction_select.addEventListener("change", callApiFaction)
}
fillFactions()