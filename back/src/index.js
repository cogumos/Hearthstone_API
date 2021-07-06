const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const axios = require("axios").default;

const classes = [
    "death_knight",
    "druid",
    "hunter",
    "mage",
    "paladin",
    "priest",
    "rogue",
    "shaman",
    "warlock",
    "warrior",
    "dream",
    "neutral",
    "whizbang",
    "demon_hunter"
]

const types = [
    "hero",
    "minion",
    "spell",
    "enchantment",
    "weapon",
    "hero_power"
]

const factions = [
    "horde",
    "alliance",
    "neutral"
]

const races = [
    "orc",
    "murloc",
    "demon",
    "mech",
    "elemental",
    "beast",
    "totem",
    "pirate",
    "dragon",
    "all",
    "quilboar"
]

app.post("/types", function (req, res) {
    if (!req.body.type_name) {
        res.status(400).json({ "message": "Error! type_name is required." })
    }
    if (!types.includes(req.body.type_name)) {
        res.status(400).json({ "message": "Error! type_name is not valid." })
    }
    const optionsType = {
        method: 'get',
        params: { locale: 'ptBR' },
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/',
        headers: {
            'x-rapidapi-key': '2b0f45e4d5mshe8737fa9981b342p17c7bfjsn317863bb7645',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        },

    };
    optionsType.url = optionsType.url + req.body.type_name
    axios.request(optionsType).then(function (response) {
        res.status(200).json(response.data)
    }).catch(function (error) {
        res.status(500).json({ "message": error.message });
    });
})
app.post("/classes", function (req, res) {
    if (!req.body.class_name) {
        res.status(400).json({ "message": "Error! class_name is required." })
    }
    if (!classes.includes(req.body.class_name)) {
        res.status(400).json({ "message": "Error! class_name is not valid." })
    }
    const optionsClass = {
        method: 'get',
        params: { locale: 'ptBR' },
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/',
        headers: {
            'x-rapidapi-key': '2b0f45e4d5mshe8737fa9981b342p17c7bfjsn317863bb7645',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };
    optionsClass.url = optionsClass.url + req.body.class_name
    axios.request(optionsClass).then(function (response) {
        res.status(200).json(response.data)
    }).catch(function (error) {
        res.status(500).json({ "message": error.message });
    });
})
app.post("/factions", function (req, res) {
    if (!req.body.faction_name) {
        res.status(400).json({ "message": "Error! faction_name is required." })
    }
    if (!factions.includes(req.body.faction_name)) {
        res.status(400).json({ "message": "Error! faction_name is not valid." })
    }
    const optionsFactions = {
        method: 'get',
        params: { locale: 'ptBR' },
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/',
        headers: {
            'x-rapidapi-key': '2b0f45e4d5mshe8737fa9981b342p17c7bfjsn317863bb7645',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };
    optionsFactions.url = optionsFactions.url + req.body.faction_name
    axios.request(optionsFactions).then(function (response) {
        res.status(200).json(response.data)
    }).catch(function (error) {
        res.status(500).json({ "message": error.message });
    });
})
app.post("/races", function (req, res) {
    if (!req.body.race_name) {
        res.status(400).json({ "message": "Error! race_name is required." })
    }
    if (!races.includes(req.body.race_name)) {
        res.status(400).json({ "message": "Error! race_name is not valid." })
    }
    const optionsRaces = {
        method: 'get',
        params: { locale: 'ptBR' },
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/',
        headers: {
            'x-rapidapi-key': '2b0f45e4d5mshe8737fa9981b342p17c7bfjsn317863bb7645',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };
    optionsRaces.url = optionsRaces.url + req.body.race_name
    axios.request(optionsRaces).then(function (response) {
        res.status(200).json(response.data)
    }).catch(function (error) {
        res.status(500).json({ "message": error.message });
    });
})

app.listen(3000)