const express = require("express")
const app = express()
const path = require("path");
const port = 8080;
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


let photos = [
    {
        id: uuidv4(),
        source: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        caption: "hi there"
    },
    {
        id: uuidv4(),
        source: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        caption: "hi there"
    },
    {
        id: uuidv4(),
        source: "https://plus.unsplash.com/premium_photo-1664304752635-3e0d8d8185e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        caption: "hi there"
    }
]

app.listen(port, () => {
    console.log("Listening On Port")
})

app.get("/cars", (req, res) => {
    res.render("index.ejs", { photos })
})
app.get("/cars/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/cars/:id", (req, res) => {
    let { id } = req.params;
    let pic = photos.find((p) => id === p.id)
    res.render("show.ejs", { post })
})

app.delete("/cars/:id", (req, res) => {
    let { id } = req.params;
    photos = photos.filter((p) => id !== p.id)
    res.redirect("/cars")
})
app.post("/cars", (req, res) => {
    let { source, caption } = req.body;
    let id = uuidv4()
    photos.push({ id, source, caption })
    res.redirect("/cars")

})