import logger from "../utils/logger.js";
import _ from "lodash";
import { createUser } from "../services/user.service.js";
export async function createUserHandler(req, res) {
  try {
    logger.debug(req.body);
    const user = await createUser(req.body);

    return res
      .status(200)
      .send({
        user: _.pick(user, ["username",  "email"]),
        message: `user ${user.username} created succesfully`,
      });
  } catch (error) {
    logger.error(error.message);
    res.status(409);
  }
}
export async function loginUserHandler(req, res) {
  logger.info("logged in succefuly");
  res.status(200).send("Logged in succesfuly");
}
