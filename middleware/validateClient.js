const { body, validationResult } = require("express-validator");

const validateClient = [
  body("name").not().isEmpty().withMessage("Name is required"),

  body("email").not().isEmpty().withMessage("Email is required"),

  body("telephone").not().isEmpty().withMessage("Telephone is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  },
];

module.exports = { validateClient };
