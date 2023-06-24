const router = require("express").Router();
const jsonschema = require("jsonschema");
const User = require("../models/user");
const userRegisterSchema = require("../schemas/userRegisterSchema");
const { BadRequestError } = require("../MornoonightsError");
const createToken = require("../helpers/tokens");

/** POST /auth/register:   { user } => { token }
 *
 * user must include { username, firstName, lastName, password, email }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 */
router.post("/register", async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, userRegisterSchema);
      if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
      }
      // Register user set isAdmin to false for now
      const newUser = await User.register({ ...req.body, isAdmin: false });
      const token = createToken(newUser);
      return res.status(201).json({ token });
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;