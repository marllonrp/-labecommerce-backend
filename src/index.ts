import { createProduct, createPurshase, createUser, getAllProducts, getAllPurchaseFromUserID, getAllUsers, getProductById, queryProductByName } from "./database";

createUser(4, "leandra@gmail.com", "jdjajdh")
getAllUsers()
createProduct(21,"Monitor HD", 950, "Eletrônicos")
getAllProducts()
getProductById(2)
queryProductByName("chinelo")
createPurshase(4,21,1,950)
getAllPurchaseFromUserID(4)