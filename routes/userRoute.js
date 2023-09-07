import express from "express";
import authorization from "../middlewares/authorization.js";
import {
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
  userRegister,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", loginUser);


router.get("/getUser", authorization, getUser);

router.get("/all", getAllUsers);

router.put("/", authorization, updateUser);

router.delete("/" , authorization , deleteUser);

export default router;
