"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('users')
      .select('*')
      .from('users')
      .then((results) => {
        res.send(results);
      })

  })

  return router;
}
