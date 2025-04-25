// importing router
const router = require("express").Router();

const { registerUser, login } = require("../controller/userController");

router.post("/signUp", registerUser);
router.post("/login", login);

module.exports = router;

// // importing the product controller
// const {
//   getAllUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controller/userController");

// // defining the routes
// router.get("/", getAllUsers);
// router.get("/:id", getUserById);
// router.post("/create", createUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

// module.exports = router;
