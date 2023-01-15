import { createProduct, createPurshase, createUser, getAllProducts, getAllPurchaseFromUserID, getAllUsers, getProductById, products, purchases, queryProductByName, users } from "./database";
import express, {Request, Response} from "express"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3002,()=>{
    console.log("Servidore rodando na porta 3002")
})



createUser(4, "leandra@gmail.com", "jdjajdh")
getAllUsers()
createProduct(21,"Monitor HD", 950, "Eletrônicos")
getAllProducts()
getProductById(2)
queryProductByName("chinelo")
createPurshase(4,21,1,950)
getAllPurchaseFromUserID(4)

app.get("/ping",(req:Request,res:Response)=>{
    res.status(200).send("Pong!")
})

app.get("/users",(req:Request,res:Response)=>{
    res.status(200).send(users)
})


app.get("/products",(req:Request,res:Response)=>{
    res.status(200).send(products)
})

app.get("/products/search", (req:Request,res:Response)=>{
    const q = req.query.q as string
    
    const productsFilter = products.filter(product =>product.name.toLowerCase().includes(q.toLowerCase()))
    
    res.status(200).send(productsFilter) 
})

app.post("/users",(req:Request,res:Response)=>{
    const id = req.body.id
    const email = req.body.email
    const password = req.body.password

    createUser(id,email,password)
    res.status(201).send("Usuario adicionado com sucesso!")
})

app.post("/purchases",(req:Request,res:Response)=>{
    const userId = req.body.userId
    const productId = req.body.productId
    const quantity = req.body.quantity
    const totalPrice = req.body.totalPrice

    createPurshase(userId,productId,quantity,totalPrice)
    res.status(201).send("Produto adicionado com sucesso!")
})

app.get("/purchases",(req:Request,res:Response)=>{
    res.status(200).send(purchases)
})

app.post("/products",(req:Request,res:Response)=>{
    const id = req.body.id 
    const name = req.body.name 
    const price = req.body.price 
    const category = req.body.category 

    createProduct(id, name, price, category)
    res.status(201).send("Produto adicionado com sucesso!")
})