const express = require("express")
const app = express();

//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

const birdArray = [
    {
        id: 1,
        name: "john",
        size: "big",
        color: "yellow"
    },
    {
        id: 2,
        name: "zanduu",
        size: "small",
        color: "blue"
    }
]

app.get("/birds", (req, res) => {
    res.send({birdArray});
});

app.get("/birds/:id", (req, res) => {
    const bird = birdArray.find(birdId => birdId.id === parseInt(req.params.id));
    res.send(bird);
});

app.post("/birds", (req, res) => {
    const bird = req.body;
    birdArray.push(bird);
    res.send({message: "bird added", data: bird});
});

app.put("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id);
    const updatedBird = req.body;

    birdArray.map((bird) => {
        if (bird.id === birdId) {
            bird.name = updatedBird.name || bird.name;
            bird.size = updatedBird.size || bird.size;
            bird.color = updatedBird.color || bird.color;

            return bird;
        }
    });
    res.send(birdArray)
});

app.delete("/birds/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleteBird = birdArray.findIndex((bird) => bird.id === id);

    if (deleteBird !== -1) {
        birdArray.splice(deleteBird, 1);
        res.send({message: "Bird deleted with this id " + req.params.id});
    } else {
        res.send({message: "Bird not found"});
    }
});

app.listen(8080)