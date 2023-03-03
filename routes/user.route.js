import {createUserHandler} from '../controllers/user.controller.js';
import { loginUserHandler } from '../controllers/user.controller.js';
function userRoutes(server){
    server.post("/api/users", createUserHandler)
    server.post("/api/users/login", loginUserHandler)
}
export default userRoutes