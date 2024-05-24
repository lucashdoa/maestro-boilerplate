function createTestRun() {
  const response = http.post('https://api.qase.io/v1/run/MB', {
    headers: {
      'Content-Type': 'application/json',
      Token: QASE_TOKEN
    },
    body: JSON.stringify(
      {
        title: "Automated Regression Suite - wdio app",
        cases: [1,2]
      }
    ),
  })
  const data = json(response.body)

  return data.result.id
}

output.runId = createTestRun()