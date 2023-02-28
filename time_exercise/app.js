const express = require("express")
const app = express()

app.use(express.static("public"))

const teams = [
    {id: 1, name: "Chelsea", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/52914.png"},
    {id: 2, name: "Liverpool", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/7889.png"},
    {id: 3, name: "Bayern Munchen", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50037.png"},
    {id: 4, name: "Benfica", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50147.png"},
    {id: 5, name: "Brugge", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50043.png"},
    {id: 6, name: "Dortmund", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/52758.png"},
    {id: 7, name: "Frankfurt", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50072.png"},
    {id: 8, name: "Inter Milan", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50138.png"},
    {id: 9, name: "Leipzig", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/2603790.png"},
    {id: 10, name: "Manchester City", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/52919.png"},
    {id: 11, name: "AC Milan", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50058.png"},
    {id: 12, name: "Napoli", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50136.png"},
    {id: 13, name: "Paris", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/52747.png"},
    {id: 14, name: "Porto", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50064.png"},
    {id: 15, name: "Real Madrid", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/50051.png"},
    {id: 16, name: "Tottenham", imgURL: "https://img.uefa.com/imgml/TP/teams/logos/100x100/1652.png"}
]

app.get("/championsLeauge", (req, res) => {
    res.sendFile(__dirname + "/public/time/time.html")
})

app.get("/api/teams", (req, res) => {
    res.send({data: teams})
})

app.post("/api/teams", (req, res) => {

})


const PORT = 8080;


app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log("Server is running on port", PORT)
})

