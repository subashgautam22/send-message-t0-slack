const express = require("express");
const router = express.Router();

const slackController = require("./../controllers/slack.controller");


router.post('/posts', slackController.create);

module.exports = router;