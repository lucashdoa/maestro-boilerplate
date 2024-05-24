const response = http.post(`https://api.qase.io/v1/result/MB/${RUN_ID}`, {
  headers: {
    'Content-Type': 'application/json',
    Token: QASE_TOKEN
  },
  body: JSON.stringify(
    {
      case_id: output.caseId,
      status: output.testResult
    }
  ),
})