module.exports = function straightLine(assetCost, salvageValue, depreciationYears, isDetailed=true) {
  const depreciationPerYear = (assetCost - salvageValue) / depreciationYears

  if (isDetailed === false) {
    return { depreciationPerYear }
  }

  let details = [
    {
      year: 1,
      beginningValue : parseInt(assetCost),
      depreciationPercent : parseFloat((100/depreciationYears).toFixed(2)),
      depreciationAmount : Math.round(depreciationPerYear),
      accumulatedDepAmount : Math.round(depreciationPerYear),
      endingValue : Math.round(assetCost - depreciationPerYear),
    }
  ]


  for (let i = 0; i < depreciationYears; i++) {
    let depreciationDetail = {}
    depreciationDetail.year = details[i].year + 1
    depreciationDetail.beginningValue = Math.round(details[i].beginningValue - depreciationPerYear)
    depreciationDetail.depreciationPercent = parseFloat((100/depreciationYears).toFixed(2))
    depreciationDetail.depreciationAmount = Math.round(depreciationPerYear)
    depreciationDetail.accumulatedDepAmount = Math.round(details[i].accumulatedDepAmount + depreciationPerYear)
    depreciationDetail.endingValue = Math.round(details[i].endingValue - depreciationPerYear)
    details.push(depreciationDetail)
    if (i === depreciationYears-2) {
      break
    }
  }

  return {
    depreciationPerYear,
    details
  }
}