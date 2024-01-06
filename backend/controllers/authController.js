const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Echec de la validation");
    error.status_code = 422;
    error.data = errors.array();

    throw error;
  }

  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;

  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("Cette adresse email est déjà utilisée");
    error.statusCode = 422;
    error.data = null;
    throw error;
  }

  try {
    const passwordHashed = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      firstname,
      lastname,
      password: passwordHashed,
    });

    const result = await newUser.save();

    res.status(200).json({
      message: "Votre compte a été crée",
      userId: result._id,
      statusCode: 200,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Echec de validation");
    error.statusCode = 422;
    throw error;
  }

  const email = req.body.email;
  const password = req.body.password;

  console.log(password);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("Compte non trouvé");
      error.statusCode = 422;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      const error = new Error("Mot de passe incorrect");
      error.data = null;
      error.statusCode = 401;

      throw error;
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "an_awesome_secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: "Connexion éffectuée",
      token,
      userId: user._id,
      data: {
        user: user,
      },
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
