# COM3420 Mockup

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## Overview

This repository is a GitHub Pages mockup of the original COM3420 project:
<https://github.com/CitharaYote/uni-com3420-project>

The source project is the "WMG Calculator Project" created by Team 24 for the Department of Music at the University of Sheffield. It is a Ruby on Rails application backed by PostgreSQL and styled with Tailwind CSS. The original system includes student, course, and programme management, CSV import, search/filtering, and student detail views.

## What this mockup shows

- A login-gated dashboard for the WMG Calculator Prototype
- A University of Sheffield-branded header and navigation
- A student marks table with search and module selection
- A module list sidebar with selectable modules
- Student detail modal behaviour for drilling into a row

The mockup is built as a static front-end representation of the original project. Some behaviours from the Rails app are represented visually rather than being fully data-driven.

## Built with

- React
- Create React App
- Tailwind CSS
- Framer Motion

## Running locally

The app lives in the `web/` directory.

```bash
cd web
npm install
npm start
```

## Build

```bash
cd web
npm run build
```

## Deployment

This repository is configured to deploy to GitHub Pages at:

`/com3420-mockup/`

The deployment workflow is stored in [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml).

## Original project

The source repository contains the Rails implementation and project setup notes, including:

- Ruby 3.1.2
- Rails 7.0.4.2
- PostgreSQL 14
- Tailwind CSS 3.3.1
- CSV import for student data
- Student search, edit, and delete flows
- Notifications for stale student records
