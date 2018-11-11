'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (knex, brcypt) => {

  router.get('/', (req, res) => {
    knex('users')
      .select('*')
      .from('users')
      .then((results) => {
        res.send(results);
      })

  })

  router.post('/login', (req, res) => {
    knex('users')
      .select('*')
      .from('users')
      .where({email:req.body.email})
      .then((results) => {
        if(results.length === 0){
          return res.sendStatus(404);
        } else if(bcrypt.compareSync(password, results[0].password)) {
          req.session.userID = results[0].id;
          return res.sendStatus(200);
        } else {
          return res.sendStatus(403);
        }
      })

  })

  return router;
}
