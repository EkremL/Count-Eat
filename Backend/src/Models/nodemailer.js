const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { userSchema } = require("../Models/users");

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

  await sendVerificationEmail(email, verificationCode);
  await newUser.save();
  return newUser;
};

module.exports = { sendVerificationEmail };
