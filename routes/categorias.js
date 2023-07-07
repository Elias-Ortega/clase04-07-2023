import { Router} from "express";
import {  actualizarController,  eliminarController,  insertarController,  leerTodoController } from "../controllers/categorias.js";

const router =  Router();

router.post('/', leerTodoController );

router.post('/insertar', insertarController );

router.post('/actualizar', actualizarController);

router.post('/eliminar', eliminarController);

export {
    router
}