"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
(0, database_1.createUser)(4, "leandra@gmail.com", "jdjajdh");
(0, database_1.getAllUsers)();
(0, database_1.createProduct)(21, "Monitor HD", 950, "Eletrônicos");
(0, database_1.getAllProducts)();
(0, database_1.getProductById)(2);
(0, database_1.queryProductByName)("chinelo");
(0, database_1.createPurshase)(4, 21, 1, 950);
(0, database_1.getAllPurchaseFromUserID)(4);
//# sourceMappingURL=index.js.map