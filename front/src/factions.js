const factions = {
    "horde": "Horde",
    "alliance": "Alliance",
    "neutral": "Neutral",
}

const callApiFaction = (event) => {
    race_select.value = "0"
    type_select.value = "0"
    class_select.value = "0"
    const faction_name = event.target.value //esse é o valor que vai ser passado na requisição
    const faction = {
        method: 'POST',
        url: 'http://localhost:3000/Factions',
        data: { "faction_name": faction_name },
    };
    axios.request(faction).then(function (response) {
        const data = response.data.filter((card) => {
            if (card.img) {
                return card
            }
        })
        if (data.length > 50) {
            cardsData = data.slice(0, 50) // pega as 50 primeiras cartas
        } else {
            cardsData = data
        }
        fillCardsContainer(cardsData)


    }).catch(function (error) {
        console.error(error.massage)
    });


}
const fillFactions = () => {

    faction_select.innerHTML += "<option value='0' selected disabled hidden>Todos as facções</option>"
    Object.entries(factions).map((item) => {
        const faction_value = item[0]
        const faction_name = item[1]
        faction_select.innerHTML += `<option class="option" value=${faction_value}>${faction_name}</option>`
    })
    faction_select.addEventListener("change", callApiFaction)
}
fillFactions()