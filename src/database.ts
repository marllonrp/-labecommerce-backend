import { TProduct, TPurchase, TUser } from "./types";

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
    name:"Morango",
    price:12,
    category:"frutas"   
},{
    id:2,
    name:"Manga",
    price:15,
    category:"frutas" 
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