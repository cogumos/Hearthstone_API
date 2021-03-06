const types = {
    "hero": "Hero",
    "minion": "Minion",
    "spell": "Spell",
    "enchantment": "Enchantment",
    "weapon": "Weapon",
    "hero_power": "Hero Power",
}

const callApiType = (event) => {
    faction_select.value = "0"
    race_select.value = "0"
    class_select.value = "0"
    const type_name = event.target.value //esse é o valor que vai ser passado na requisição
    const optionsType = {
        method: 'POST',
        url: 'http://localhost:3000/Types',
        data: { "type_name": type_name },
        // headers: { "Content-Type": "application/json" }
    };
    axios.request(optionsType).then(function (response) {
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
const fillTypes = () => {

    type_select.innerHTML += "<option value='0' selected disabled hidden>Todos os tipos</option>"
    Object.entries(types).map((item) => {
        const type_value = item[0]
        const type_name = item[1]
        type_select.innerHTML += `<option class="option" value=${type_value}>${type_name}</option>`
    })
    type_select.addEventListener("change", callApiType)
}
fillTypes()