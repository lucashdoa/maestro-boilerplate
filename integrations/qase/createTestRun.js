function createTestRun() {
  const response = http.post('https://api.qase.io/v1/run/MB', {
    headers: {
      'Content-Type': 'application/json',
      Token: "19ae529d120bb4bbeea2d7c73f5e650fbb851578bda309e10f892cd99b0d6797"
    },
    body: JSON.stringify(
      {
        title: "Automated Regression Suite - wdio app",
        cases: [1, 2]
      }
    ),
  })
  const data = json(response.body)

  return data.result.id
}

output.runId = createTestRun()