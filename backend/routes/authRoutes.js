const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("./../models/User");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Veuillez fournir une adresse mail valide.")
      .normalizeEmail(),

    body("password")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Le nom de passe est requis et doit exéder 4 caractères"),
    body("firstname").trim().notEmpty().withMessage("Le nom est requis"),
    body("lastname").trim().notEmpty().withMessage("Le prénom est requis"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(({ path, msg }) => ({
          field: path,
          msg,
        }));

        const error = new Error("Echec de la validation");
        error.statusCode = 422;
        error.data = formattedErrors;
        throw error;
      }

      await authController.signup(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Veuillez fournir une adresse mail valide.")
      .normalizeEmail(),

    body("password")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Le nom de passe est requis et doit exéder 4 caractères"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(({ path, msg }) => ({
          field: path,
          msg,
        }));
        const error = new Error("Echec de la validation");
        error.statusCode = 422;
        error.data = formattedErrors;
        throw error;
      }

      await authController.login(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
