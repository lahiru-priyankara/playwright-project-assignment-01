# SwiftTranslator Automation Suite 🚀

![Playwright](https://img.shields.io/badge/Framework-Playwright-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-35_Cases_Passed-brightgreen)

This project provides a comprehensive automated testing solution for **SwiftTranslator** (Singlish to Sinhala transliteration). It uses **Playwright** to perform data-driven testing across 24 positive, 10 negative, and 1 UI test case.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Test Case Summary](#test-case-summary)

---

## 🎯 Overview

SwiftTranslator Automation Suite is a robust end-to-end testing framework built with Playwright to validate the functionality and user interface of the SwiftTranslator application. The suite employs data-driven testing methodologies to ensure comprehensive coverage of both positive and negative test scenarios.

### Key Highlights

- **35 Total Test Cases**: Covering functional and UI testing requirements
- **Data-Driven Approach**: Parameterized tests for maximum coverage with minimal code
- **Cross-Browser Support**: Tests can run on Chromium, Firefox, and WebKit
- **Detailed Reporting**: HTML reports with screenshots and trace files for debugging

---

## ✨ Features

- ✅ **Positive Functional Testing**: 24 test cases validating correct transliteration behavior
- ❌ **Negative Functional Testing**: 10 test cases ensuring robust error handling
- 🎨 **UI Testing**: Validates real-time conversion feedback and interface responsiveness
- 📊 **HTML Reports**: Beautiful, interactive test reports with screenshots
- 🔄 **Headless & Headed Modes**: Flexible execution options for CI/CD or local debugging
- 🌐 **Multi-Browser Testing**: Support for Chromium, Firefox, and WebKit browsers

---

## 🛠️ Installation & Setup

Follow these steps to set up the environment on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)
- Git (optional, for cloning the repository)

### 1. Clone the Repository
```bash
git clone 
cd swifttranslator-automation-suite
```

### 2. Install Dependencies

First, install all required Node modules:
```bash
npm install
```

### 3. Install Playwright Browsers

Playwright requires specific browser binaries to execute tests. Download Chromium, Firefox, and WebKit:
```bash
npx playwright install
```

---

## 🧪 Running the Tests

You can execute the tests in various modes depending on your needs.

### Run All Tests (Headless)

This is the default mode. Tests run in the background without opening a browser window:
```bash
npx playwright test
```

### Run Tests in Headed Mode

Use this command to watch the browser open and see the automation in real-time:
```bash
npx playwright test --headed
```

### Run a Specific Test File

To run only the main test file:
```bash
npx playwright test outputscheck.spec.js
```

### Run Tests in Debug Mode

Step through tests interactively with the Playwright Inspector:
```bash
npx playwright test --debug
```

### Run Tests on a Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests with UI Mode

Launch Playwright's interactive UI for a visual testing experience:
```bash
npx playwright test --ui
```

---

## 📂 Project Structure
```
swifttranslator-automation-suite/
├── tests/
│   └── outputscheck.spec.js   # Main automation script containing all 35 test cases
├── playwright.config.js       # Playwright configuration and browser settings
├── package.json               # Node.js project metadata and dependencies
├── package-lock.json          # Lock file for exact dependency versions
├── README.md                  # Project documentation (this file)
└── playwright-report/         # Generated HTML reports (after test execution)
```

### Key Files

- **`outputscheck.spec.js`**: Contains all test cases organized by category (positive, negative, UI)
- **`playwright.config.js`**: Global configuration including timeouts, retries, and browser settings
- **`package.json`**: Defines project dependencies and npm scripts

---

## 📝 Test Case Summary

The suite is built using a **Data-Driven approach**, mapping exactly to the project's CSV documentation:

| Category              | Total Cases | Description                                                                 |
|-----------------------|-------------|-----------------------------------------------------------------------------|
| Positive Functional   | 24          | Validates simple/compound sentences and long paragraphs (Pos_Fun_0001 - 0024) |
| Negative Functional   | 10          | Checks system robustness against slang, typos, and nested brackets (Neg_Fun_0001 - 0010) |
| UI Testing            | 1           | Verifies real-time conversion feedback (Pos_UI_0001)                        |

### Test Case Categories Breakdown

#### Positive Functional Cases (24)
- Simple sentence transliteration
- Compound sentence handling
- Long paragraph processing
- Special character handling
- Mixed content transliteration
- Edge case scenarios with valid inputs

#### Negative Functional Cases (10)
- Invalid character handling
- Slang and informal language
- Typographical errors
- Nested brackets and special symbols
- Empty input validation
- Boundary value testing

#### UI Testing (1)
- Real-time conversion feedback
- Interface responsiveness
- Visual element validation

---

## 👤 Author

**IT23760110**

- **Module**: IT3040 – ITPM
- **Assessment**: Assignment 1
- **Institution**: SLIIT
- **Contact**: officiallahiru.p@gmail.com

---

## 🙏 Acknowledgments

- Playwright team for the excellent testing framework
- SwiftTranslator team for the application under test
- Course instructors and peers for guidance and support

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [SwiftTranslator User Guide](https://www.swifttranslator.com/docs)

---

**Last Updated**: January 2026

**Version**: 1.0.0

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
