// import the user model
const User = require("../model/userModel");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "This User already exits" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    res
      .status(201)
      .send({ message: "User has been created successfully!", user: user });
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });
    
    if (!user) {
      return res.status(400).json("User wasn't found");
    }

    if (!user.password === password) {
      return res.send({ message: "Wrong password"});
    }
    res.status(200).send({
      message: "User has been logged in successfully!",
      user: user,
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { registerUser, login };

// //export the user controller functions
// module.exports = {
//   // get all users
//   getAllUsers: async (req, res) => {
//     try {
//       const users = await User.find({});
//       res.status(200).json({ message: "Here is the users", users: users });
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
//   // get user by id
//   getUserById: async (req, res) => {
//     const id = req.params.id;
//     try {
//       const user = await User.findById(id);
//       if (!user) return res.status(404).json("User not found");

//       res.status(200).send({ message: "User successfuly found", user: user });
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
//   // create user
//   createUser: async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//       const newUser = User.create({
//         username: username,
//         email: email,
//         password: password,
//       });

//       (await newUser).save();
//       res
//         .status(201)
//         .send({ message: "User successfuly created", user: newUser });
//     } catch (error) {
//       if (error.code === 11000) {
//         res.status(400).send("User already exists!");
//       } else {
//         console.log(error.message);
//       }
//     }
//   },
//   // update user
//   updateUser: async (req, res) => {
//     const id = req.params.id;
//     const { username, email, password } = req.body;
//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         id,
//         {
//           username: username,
//           email: email,
//           password: password,
//         },
//         { new: true }
//       );
//       if (!updatedUser) return res.status(404).json("User not found");

//       res.status(200).send({ message: "User is updated", user: updatedUser });
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
//   // delete user
//   deleteUser: async (req, res) => {
//     const id = req.params.id;
//     try {
//       const destroyUser = await User.findByIdAndDelete(id);
//       if (!destroyUser) return res.status(404).json("User not found");
//       res.status(200).json("succesfuly deleted");
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
// };
