const express = require("express")
const app = express();

app.use(express.json());

const birdArray= [{
    id: 1,
    name:"john",
    size:"big",
    color:"yellow"
},
    {
        id: 2,
        name:"zanduu",
        size: "small",
        color: "blue"
    }
]
app.get("/api/v1/getAllBirds", (req,res) =>{
    res.send({birdArray})
})

app.get("/api/v1/getBirdById/:id", (req,res) =>{
    const bird = birdArray.find(birdId => birdId.id === parseInt(req.params.id))
    res.send(bird)
})


app.listen(8080)