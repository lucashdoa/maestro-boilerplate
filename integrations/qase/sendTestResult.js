const response = http.post(`https://api.qase.io/v1/result/MB/${output.runId}`, {
  headers: {
    'Content-Type': 'application/json',
    Token: "19ae529d120bb4bbeea2d7c73f5e650fbb851578bda309e10f892cd99b0d6797"
  },
  body: JSON.stringify(
    {
      case_id: output.caseId,
      status: output.testResult
    }
  ),
})