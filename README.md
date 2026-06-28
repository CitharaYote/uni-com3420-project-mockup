# WMG Calculator Mockup

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## Overview

WMG Calculator Mockup is a static React recreation of the original <a href="https://github.com/CitharaYote/uni-com3420-project">COM3420 WMG Calculator Project</a> interface. The source project was built by Team 24 for the Department of Music at the University of Sheffield as a Ruby on Rails application for managing student marks, programme data, CSV imports, and weighted mean grade calculations.

This repository keeps the experience lightweight and deployable through GitHub Pages. It focuses on presenting the main dashboard flow, visual design, and interaction patterns from the original system without requiring a Rails server, PostgreSQL database, or university authentication.

The mockup includes:

- A University of Sheffield-branded header and responsive navigation.
- A mocked login flow using temporary administrator credentials.
- A marks dashboard with module selection, department/programme controls, and student search.
- Module list sidebars for selecting and reviewing module groups.
- Student detail modals with summary and calculation-detail views.
- Visual indicators for unusual marks, failing grades, and registration status.

## Preview

Give it a go <a href="https://citharayote.github.io/uni-com3420-project-mockup/">here</a>!

## Getting Started

### Dependencies and Prerequisites

Before running the project locally, install:

- Node.js 20 or later
- npm

The React application lives in the `web/` directory.

### Installation

Clone the repository and install the frontend dependencies:

```bash
git clone https://github.com/CitharaYote/uni-com3420-project-mockup.git
cd uni-com3420-project-mockup/web
npm install
```

### Usage

Start the local development server:

```bash
npm start
```

Open <http://localhost:3000> in your browser.

The login is mocked for demonstration purposes:

- Username: `admin`
- Password: `admin`

To create a production build:

```bash
npm run build
```

To run the default React test command:

```bash
npm test
```

## Notes

This is a frontend mockup of the original Rails project, not a full replacement for it. The deployed app uses static demo data and hard-coded interface states to represent the core workflow.

Sample CSV files are included in `web/src/data/`, and the source contains early CSV parsing work using Papa Parse. In the current mockup, the dashboard data is loaded from static JavaScript data so the app can run entirely in the browser.

The original COM3420 project is available at <https://github.com/CitharaYote/uni-com3420-project>. It includes the Rails implementation, PostgreSQL setup, CSV import work, student/course/programme management, and stale-record notification behaviour.

Deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`, which installs dependencies in `web/`, builds the React app, and publishes `web/build` to GitHub Pages.

## Get in Touch

<p align="center">
  <i>Built with <b>code</b>, <b>caffeine</b>, and 💜 by CitharaYote</i>
</p>

<p align="center">
  <a href="https://citharayote.xyz">
    <img src="https://img.shields.io/badge/Portfolio-Visit%20my%20site-8A2BE2?style=for-the-badge&logo=firefoxbrowser&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://github.com/CitharaYote">
    <img src="https://img.shields.io/badge/GitHub-CitharaYote-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/theo-cruddace/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect%20with%20me-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:theocruddace@gmail.com">
    <img src="https://img.shields.io/badge/Email-Say%20hello-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<p align="center">
  <i>Like what I’m building? Feel free to support my work!</i>
</p>
<p align="center">
  <a href="https://www.buymeacoffee.com/citharayote">
    <img src="https://img.shields.io/badge/Buy%20me%20a%20coffee-Fuel%20my%20addiction-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" />
  </a>
</p>
