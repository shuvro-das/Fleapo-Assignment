const express = require("express");
const router = express.Router();
const User = require("../DB/DB.js");
var nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.send("Server is running");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shuvrocse98@gmail.com",
    pass: "Shiplu101086",
  },
});
var otp = Math.random();
otp = otp * 10;
otp = `${otp}`;
console.log(otp);
// otp = "1452";
router.get("/", (req, res) => {
  console.log("Server is Running");
  res.send({ message: "Server running" });
});
router.post("/joining", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    function sendMail() {
      var details = {
        from: "shuvrocse98@gmail.com",
        to: req.body.email,
        subject: "Your demo OTP is ",
        html: otp,
      };

      transporter.sendMail(details, function (error, data) {
        if (error) console.log(error);
        else console.log(data);
      });
    }

    sendMail();

    res.status(200).send({
      name: user.name,
      message: user.message,
    });
  } else {
    function sendMail() {
      var details = {
        from: "shuvrocse98@gmail.com",
        to: req.body.email,
        subject: "Your demo OTP is ",
        html: otp,
      };

      transporter.sendMail(details, function (error, data) {
        if (error) console.log(error);
        else console.log(data);
      });
    }

    sendMail();

    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    const createdUser = await user.save();
    res.send(createdUser);
  }
});

router.post("/add", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  const createdUser = await user.save();
  res.send(createdUser);
});

router.post("/verify", (req, res) => {
  if (req.body.otp == otp) {
    res.send({ message: "User verified" });
  } else {
    res.send({ message: "Incorrect OTP" });
  }
});

router.get("/chatdata", async (req, res) => {
  const user = await User.find({});
  if (user) {
    res.send();
  }
});

module.exports = router;
