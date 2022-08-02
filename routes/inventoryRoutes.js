import { Router } from "express"



const router = Router();

router.post("/product/addProduct", validateProduct, addProduct);