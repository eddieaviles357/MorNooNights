"use strict";

/** Routes for users. */

const express = require("express");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *
 * Authorization required: admin or same user-as-:username
 **/

router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** Update recents news for User.
* 
* Returns undefined
*  
* Must be correct user or admin
**/
router.post("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
  try {
      const { username } = req.params; 
      let { recents } = req.body;
      
      // console.log('\nPOST::NEWS/{username}/RECENTS::');
      await User.setRecents(username, recents);
      return res.json({ success: true });
  } catch (err) {
      return next(err);
  }
});

/** Gets recents news from User.
* 
* Returns recent news obj
* {
*	 recents: [
*		{ uuid, title, description, keywords,
*		  snippet, url, image_url, language,
*		  published_at, source, categories: [], visitedAt }
*	 ]
* }
*  
* Returns an Empty array [] if no recent news exist.
*
* If an error occurs in retrieving recent news an error obj will return { error: msg }
*
* Must be correct user or admin
**/
router.get("/:username/recents", ensureCorrectUserOrAdmin, async (req, res, next) => {
  try {
      const { username } = res.locals.user; 
      // get recently visited news -> [{ uuid, visitedAt}]
      let recents = await User.getRecents(username);

      // console.log('\nGET::NEWS/{username}/RECENTS::', recents);
      return res.json({ recents });
  } catch (err) {
      return next(err);
  }
});
module.exports = router;