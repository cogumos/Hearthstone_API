const classes = {
    "death_knight": "Death Knight",
    "druid": "Druid",
    "hunter": "Hunter",
    "mage": "Mage",
    "paladin": "Paladin",
    "priest": "Priest",
    "rogue": "Rogue",
    "shaman": "Shaman",
    "warlock": "Warlock",
    "warrior": "Warrior",
    "dream": "Dream",
    "neutral": "Neutral",
    "whizbang": "Whizbang",
    "demon_hunter": "Demon Hunter",
}


const callApiClass = (event) => {
    faction_select.value = "0"
    race_select.value = "0"
    type_select.value = "0"
    const class_name = event.target.value //esse é o valor que vai ser passado na requisição
    const optionsClass = {
        method: 'POST',
        url: 'http://localhost:3000/classes',
        data: { "class_name": class_name },
        // headers: { "Content-Type": "application/json" }
    };
    axios.request(optionsClass).then(function (response) {
        const data = response.data.filter((card) => {
            if (card.img) {
                return card
            }
        })

        if (data.length > 60) {
            cardsData = data.slice(0, 60) // pega as 60 primeiras cartas
        } else {
            cardsData = data
        }

        fillCardsContainer(cardsData)


    }).catch(function (error) {
        console.error(error.massage)
    });


}
const fillclasses = () => {
    class_select.innerHTML += "<option value='0' selected disabled hidden>Todas as classes</option>"
    Object.entries(classes).map((item) => {
        const class_value = item[0]
        const class_name = item[1]
        class_select.innerHTML += `<option class="option" value=${class_value}>${class_name}</option>`
    })
    class_select.addEventListener("change", callApiClass)
}
fillclasses()