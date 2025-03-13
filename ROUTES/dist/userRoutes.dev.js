"use strict";

var express = require("express");

var app = express();

var User = require("../MODELS/user");

var router = express.Router();
router.post('/register', function _callee(req, res) {
  var _req$body, FirstName, MiddleName, LastName, Email, existingUser, newUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, FirstName = _req$body.FirstName, MiddleName = _req$body.MiddleName, LastName = _req$body.LastName, Email = _req$body.Email;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            Email: Email
          }));

        case 4:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'User is already registered with this email'
          }));

        case 7:
          newUser = new User({
            FirstName: FirstName,
            MiddleName: MiddleName,
            LastName: LastName,
            Email: Email
          });
          res.status(200).json({
            message: 'This email is being registered,user id and password will be given to the registered mail once verified by admin'
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
router.post;
module.exports = router;