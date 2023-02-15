import { createProduct, createPurshase, createUser, getAllProducts, getAllPurchaseFromUserID, getAllUsers, getProductById, products, purchases, queryProductByName, users } from "./database";
import express, {Request, Response} from "express"
import cors from "cors"
import { ECategorys } from "./types";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3002,()=>{
    console.log("Servidore rodando na porta 3002")
})



createUser("a004", "leandra@gmail.com", "jdjajdh")
getAllUsers()
createProduct("p0021","Monitor HD", 950, "Eletrônicos")
getAllProducts()
getProductById("a002")
queryProductByName("chinelo")
createPurshase("a004","p0021",1,950)
getAllPurchaseFromUserID("a004")

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
    const category:ECategorys = req.body.category 

    createProduct(id, name, price, category)
    res.status(201).send("Produto adicionado com sucesso!")
})


app.get("/products/:id",(req: Request, res: Response) =>{
    const id = req.params.id

    const result = products.find(product=>product.id === id)
    res.status(200).send(result)
})


app.get ("/users/:id/purchases",(req: Request, res: Response) =>{
    const userID = req.params.id

    const result = purchases.filter(purchase => purchase.userId === userID)
    res.status(200).send(result)
})

app.delete("/users/:id",(req: Request, res: Response) =>{
    const userID = req.params.id

    const userIndex = users.findIndex(user => user.id === userID)
    if (userIndex >= 0){
        users.splice(userIndex,1)
    }

    res.status(200).send("User apagado com sucesso!")

})

app.delete("/products/:id",(req: Request, res: Response) =>{
    const productID = req.params.id

    const productIndex = products.findIndex(product => product.id ===  productID)
    if (productIndex >= 0){
        products.splice(productIndex,1)
        res.status(200).send("Produto apagado com sucesso!")
    }

})

app.put("/users/:id",(req: Request, res: Response) =>{
    const userId = req.params.id

    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const user = users.find(userC => userC.id === userId)

    if (user){
        user.email = newEmail || user.email
        user.password = newPassword || user.password
    }  

    res.status(200).send("Atualização realizada com sucesso!")

})

app.put("/products/:id",(req: Request, res: Response) =>{
    const productID = req.params.id

    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as ECategorys | undefined

    const product = products.find(productC => productC.id === productID)

    if (product){
        product.name = newName || product.name
        product.price = isNaN(newPrice as number)? product.price : newPrice
        product.category= newCategory || product.category
    }


    res.status(200).send("Atualização realizada com sucesso!")

})