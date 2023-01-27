"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3002, () => {
    console.log("Servidore rodando na porta 3002");
});
(0, database_1.createUser)("a004", "leandra@gmail.com", "jdjajdh");
(0, database_1.getAllUsers)();
(0, database_1.createProduct)("p0021", "Monitor HD", 950, "Eletrônicos");
(0, database_1.getAllProducts)();
(0, database_1.getProductById)("a002");
(0, database_1.queryProductByName)("chinelo");
(0, database_1.createPurshase)("a004", "p0021", 1, 950);
(0, database_1.getAllPurchaseFromUserID)("a004");
app.get("/ping", (req, res) => {
    res.status(200).send("Pong!");
});
app.get("/users", (req, res) => {
    res.status(200).send(database_1.users);
});
app.get("/products", (req, res) => {
    res.status(200).send(database_1.products);
});
app.get("/products/search", (req, res) => {
    const q = req.query.q;
    const productsFilter = database_1.products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
    res.status(200).send(productsFilter);
});
app.post("/users", (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    (0, database_1.createUser)(id, email, password);
    res.status(201).send("Usuario adicionado com sucesso!");
});
app.post("/purchases", (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;
    (0, database_1.createPurshase)(userId, productId, quantity, totalPrice);
    res.status(201).send("Produto adicionado com sucesso!");
});
app.get("/purchases", (req, res) => {
    res.status(200).send(database_1.purchases);
});
app.post("/products", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    (0, database_1.createProduct)(id, name, price, category);
    res.status(201).send("Produto adicionado com sucesso!");
});
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const result = database_1.products.find(product => product.id === id);
    res.status(200).send(result);
});
//# sourceMappingURL=index.js.map