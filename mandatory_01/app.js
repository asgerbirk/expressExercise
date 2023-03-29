import express from "express"
import path from 'path';

const __dirname = path.resolve();


const app = express();
app.use(express.static("public"))
import templateEngine from "./util/templateEngine.js";

app.use(express.urlencoded({extended: true}));

//pages
const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/frontpage/frontpage.css">`
});

const introduction = templateEngine.readPage("./public/pages/introduction/introduction.html");
const introductionPage = templateEngine.renderPage(introduction, {
    tabTitle: "Introduction",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/introduction/introduction.css">`
})
const expressPage = templateEngine.readPage("./public/pages/express/express.html");
const expressPagePage = templateEngine.renderPage(expressPage, {
    tabTitle: "Express",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/express/express.css">`
})

const ssr = templateEngine.readPage("./public/pages/ssr/ssr.html");
const ssrPage = templateEngine.renderPage(ssr, {
    tabTitle: "SSR",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/SSR/ssr.css">`
})

const crud = templateEngine.readPage("./public/pages/CRUD/CRUD.html");
const crudPage = templateEngine.renderPage(crud, {
    tabTitle: "CRUD",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/CRUD/crud.css">`
})

const exportAndImport = templateEngine.readPage("./public/pages/exportImport/exportAndImport.html");
const exportAndImportPage = templateEngine.renderPage(exportAndImport, {
    tabTitle: "Export and import"
})

const serverClientSide = templateEngine.readPage("./public/pages/serverClientSide/serverClientSide.html");
const serverClientSidePage = templateEngine.renderPage(serverClientSide, {
    tabTitle: "Server client side"
})

const admin = templateEngine.readPage("./public/pages/login/admin.html")
const adminPage = templateEngine.renderPage(admin, {
    tabTitle: "login",
    cssLink: `<link rel="stylesheet" type="text/css" href="/pages/login/admin.css">`

})


app.get("/", (req, res) => {
    res.send(frontpagePage)
})


app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/pages/login/login.html")
});

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    if (username === "john" && password === "zando") {
        res.send(adminPage)
    } else {
        res.send({message: "invalid username or password"})
    }
})

app.get("/introduction", (req, res) => {
    res.send(introductionPage)
})

app.get("/exportAndImport", (req, res) => {
    res.send(exportAndImportPage)
})

app.get("/serverClientSide", (req, res) => {
    res.send(serverClientSidePage)
})

app.get("/express", (req, res) => {
    res.send(expressPagePage)
})

app.get("/crud", (req, res) => {
    res.send(crudPage)
})

app.get("/ssr", (req, res) => {
    res.send(ssrPage)
})

app.post("/api/content", (req, res) => {
    res.send(req.body)
})


const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("server is running on " + PORT)
})
