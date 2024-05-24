# Maestro Extented Boilerplate

Mobile test automation with Maestro boilerplate code (with steroids).

This boilerplate aims to provide important additional setup for professional usage. Such as:

- Design Patterns
  - Page Objects
- Continuous Testing (CI/CD)
  - Github Actions
- Integrations
  - Test Management Tool (Qase)
- Parametrizable Test Data

---

## 🛠️ Setup

1. Follow through [Maestro installation guide](https://maestro.mobile.dev/getting-started/installing-maestro)
1. Clone this repository
1. Use the examples at pageobjects folder to start mapping your application under test with the correct locators. (tip You can use [Maestro studio](https://maestro.mobile.dev/getting-started/maestro-studio) for inspecting the application)
1. Write your flows under tests folder

---

## 🚥 Running

With the iOS simulator or Android emulator running, run the following command (with the correct environment variables):

```shell
maestro test -e APP_ID={replace_for_app_id} -e RUN_ID={replace_for_run_id} -e QASE_TOKEN={replace_for_qase_token} tests/desired-flow.yaml
```

Where:

| Parameter | Description    | Example                                |
| --------- | -------------- | -------------------------------------- |
| APP_ID    | The package id | org.reactjs.native.example.wdiodemoapp |
| RUN_ID    | Qase run id    | 47                                     |
| QASE_TOKEN   | Qase API token    | 1rae529d121bb4bbeea2d7c73f5c650fbb851578kda303e10f892cd99b0d6790                                     |

Sample command: 
```shell
maestro test \
-e APP_ID=org.reactjs.native.example.wdiodemoapp \
-e RUN_ID=47 \
-e QASE_TOKEN=1rae529d121bb4bbeea2d7c73f5c650fbb851578kda303e10f892cd99b0d6790 \
tests/desired-flow.yaml
```