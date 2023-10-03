const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
let ProductSchema = require('./models/ProductSchema')

mongoose.connect("mongodb://127.0.0.1:27017/oaktech")
    .then(() => console.log("Conectado com o DB"))
    .catch(err => console.log(err))

let ProductModel = mongoose.model("products", ProductSchema)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.get('/', async (req, res) => {
    try {
        let allProducts = await ProductModel.aggregate().sort({ "price": 1 })
        res.json({ allProducts })
    } catch (err) {
        console.log(err)
        res.json({ msg: "Error" })
    }
})

app.post('/product', async (req, res) => {
    let { name, description, price, disponible } = req.body

    if (name == "" || description == "" || price == "") {
        res.sendStatus(400)
        return
    } else {
        let Product = new ProductModel({
            name,
            description,
            price,
            disponibility: disponible
        })
        try {
            await Product.save()
            console.log("Novo produto cadastrado")
            res.redirect("/")
        } catch (err) {
            res.json({ msg: "Produto não cadastrado" })
            console.log(err)
        }
    }

})

app.listen(5000, () => {
    console.log('Servidor rodando')
})