const db = require("../models")

module.exports = {
  show: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err))
  }
};




// const express               = require("express");
// const bcrypt                = require("bcryptjs");
// const jwt                   = require("jsonwebtoken");
// const keys                  = require("../../config/keys");
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput    = require("../../validation/login");
// const User                  = require("../../models/User");
// const router                = express.Router();

// router.post("/register", (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body)

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (user) {
//         return res.status(400).json({ email: "Email already exists" });
//       } else {
//         const newUser = new User({
//           name: req.body.name,
//           email: req.body.email,
//           password: req.body.password
//         });
//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => res.json(user))
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
// });

// router.post("/login", (req, res) => {
//   // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   const email = req.body.email;
//   const password = req.body.password;
//   // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };
//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });

// module.exports = router;
