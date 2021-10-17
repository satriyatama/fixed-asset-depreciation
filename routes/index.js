const express = require('express')
const router = express.Router()

// Handler
const handler = require('../app/handler')

router.get(
  '/',
  (req, res) => {
    res.render('index', {title:'Fixed Assets Depreciation Calculator'})
  }
)

router.post(
  '/result/straight-line',
  handler.calculator.straightLine,
)

router.get(
  '/result/straight-line',
  (req,res) => {
    res.render(
      'resultStraightLine',
      {
        title:'Fixed Assets Depreciation Calculator'
      }
    )
  }
)

module.exports = router