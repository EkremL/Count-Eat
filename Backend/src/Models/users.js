const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// Eğer User model'i zaten tanımlandıysa, tekrar tanımlamayalım.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  verificationCode: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

// Send verification email function
const sendVerificationEmail = async (email, verificationCode) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Replace with your email
      pass: "your-email-password", // Replace with your email password
    },
  });

  const message = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Verify your account",
    text: `Your verification code is ${verificationCode}`,
  };

  try {
    await transporter.sendMail(message);
    console.log("Verification email sent.");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

// Static method to register user
userSchema.statics.register = async function (username, email, password) {
  const existingUser = await this.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error("Kullanıcı adı veya e-posta zaten var");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  const newUser = new this({
    username,
    email,
    password: hashedPassword,
    verificationCode,
  });

  // Send verification email
  await sendVerificationEmail(email, verificationCode);

  await newUser.save();
  return newUser;
};

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

// Eğer User modeli daha önce tanımlanmışsa, tekrar tanımlama
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
