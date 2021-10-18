const helper = require('../../../helper')

module.exports = function straightLine(req, res) {
  const assetCost = req.body.assetCost
  const salvageValue = req.body.salvageValue
  const depreciationYears = req.body.depreciationYears
  
  const depreciation = helper.depreciationFormula.straightLine(assetCost,salvageValue,depreciationYears)
  const depreciationPerYear = parseFloat(depreciation.depreciationPerYear.toFixed(3))
  const depreciationDetails = depreciation.details

  res.render(
    'resultStraightLine',
    {
      title:'Fixed Assets Depreciation Calculator',
      result: {
        depreciationPerYear,
        depreciationDetails
      }
    }
  )
}