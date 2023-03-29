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
];

let currentId = 1;

app.get("/birds", (req, res) => {
    res.send({birdArray});
});

app.get("/birds/:id", (req, res) => {
    const bird = birdArray.find(birdId => birdId.id === parseInt(req.params.id));
    res.send(bird);
});

app.post("/birds", (req, res) => {
    const bird = req.body;
    //prefix notation to update
    bird.id = ++currentId;
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


//Anders metode med patch
app.patch("/birds/:id", (req, res) => {
    let foundIndex = birdArray.findIndex(bird => bird.id === Number(req.params.id));

    if (foundIndex === -1) {
        res.status(404).send({message: "no bird"})
    } else {
        const foundBird = birdArray[foundIndex];
        const birdToUpdate = {...foundBird, ...req.body, id: foundBird.id} //put the id in the end
        //having the original(foundBird) and having body to override and then the id should be from the find bird.
        birdArray[foundIndex] = birdToUpdate
        res.send({data: foundBird})
    }
});


app.delete("/birds/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundIndex = birdArray.findIndex((bird) => bird.id === id);

    //-1 hvis der ikke er en bird - det er derfor vi bruger -1
    if (foundIndex !== -1) {
        const deletedBird = birdArray.splice(foundIndex, 1)[0];
        res.send({data: deletedBird});
    } else {
        res.status(404).send({message: "Bird not found"});
    }
});

app.listen(8080)

