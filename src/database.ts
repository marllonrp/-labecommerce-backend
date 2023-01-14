import { ECategorys, TProduct, TPurchase, TUser } from "./types";

export const users:TUser[] = [{
    id:1,
    email:"fulano@teste.com",
    password:"fulano123",
},
{
    id:2,
    email:"ciclano@teste.com",
    password:"ciclano123",

}]

export const products:TProduct[]=[{
    id:1,
    name:"Chinelo",
    price:45,
    category:ECategorys.SHOES
},{
    id:2,
    name:"Regata",
    price:80,
    category:ECategorys.CLOTHES
}    
]

export const purchases:TPurchase[]=[
    {
    userId:1,
    productId:1,
    quantity:2,
    totalPrice:24
    },{
        userId:2,
    productId:2,
    quantity:3,
    totalPrice:45
    }
]

export const createUser = (idIn:number, emailIn:string, passwordIn:string):void=>{
    const newUser:TUser = {
        id: idIn,
        email:emailIn,
        password:passwordIn
    }

    users.push(newUser)
    console.log(`Novo usuário cadastrado com sucesso! Você tem um total de ${users.length} usuário(s) cadastrado(s).`)
    }


export const getAllUsers = ():void=>{
    console.table(users)
}

export const createProduct = (idIn:number, nameIn:string, priceIN:number, categoryIn:string):void=>{
    const result:TProduct[] = []
    if (categoryIn === ECategorys.ACCESSORIES){
        const newProduct:TProduct = {
            id:idIn,
            name:nameIn,
            price:priceIN,
            category:ECategorys.ACCESSORIES
            }
            result.push(newProduct)
        }else if(categoryIn === ECategorys.CLOTHES){
            const newProduct:TProduct = {
                id:idIn,
                name:nameIn,
                price:priceIN,
                category:ECategorys.CLOTHES
                }
                result.push(newProduct)
        }else if(categoryIn === ECategorys.ELETRONICS){
            const newProduct:TProduct = {
                id:idIn,
                name:nameIn,
                price:priceIN,
                category:ECategorys.ELETRONICS
                }
                result.push(newProduct)
        }else if(categoryIn === ECategorys.SHOES){
            const newProduct:TProduct = {
                id:idIn,
                name:nameIn,
                price:priceIN,
                category:ECategorys.SHOES
                }
                result.push(newProduct)
        }

       if (result!== undefined){
        products.push(result[0])
        console.log(`Novo produto cadastrado com sucesso! Você tem um total de ${products.length} produto(s) cadastrado(s).`)
       } else {
        console.log("Erro ao cadastrar produto, por favor, revise os parâmetros!")
       }
    }
    

export const getAllProducts = ():void =>{
        console.table(products)
    }

export const getProductById = (idToSearch:number):void=>{
   const filtred = products.filter(item=>item.id === idToSearch)

   filtred.length !== 0?console.table(filtred): console.log("Nenhum produto encontrado!")
}

export const queryProductByName =(q:string):void=>{
    const nameToSearch:string = q.toLowerCase()
    const result = products.filter(item => item.name.toLocaleLowerCase() === nameToSearch)
    
    result.length !== 0?console.table(result): console.log("Nenhum produto encontrado!")

}


export const createPurshase = ( userIdIn:number, productIdIn:number, quantityIn:number, totalPriceIN:number):void=>{
    const newPurshase:TPurchase = {
        userId:userIdIn,
        productId:productIdIn,
        quantity:quantityIn,
        totalPrice:totalPriceIN
    }

    purchases.push(newPurshase)
    console.log(`Compra realizada com sucesso!`)
    }

export const getAllPurchaseFromUserID = (idIn:number):void=>{
const result = purchases.filter(item=>item.userId ===idIn)

result.length !== 0?console.table (result): console.log("Nenhuma compra encontada para este ID de Usuário.")
}