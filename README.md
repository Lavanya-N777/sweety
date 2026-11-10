# Sweety – Blood Glucose Tracker

A small full-stack tracker for recording up to four blood-glucose readings a day and reviewing daily and monthly summaries.

## Features

- User sign up and login with password hashing using bcrypt.
- Secure JWT-based user sessions.
- A single user can add, view, edit and delete their own readings.
- Four daily slots: Morning (fasting), After breakfast, After lunch, After dinner.
- Validation checks for required value, range 40–600, slot/date rules, and duplicate slot/day combinations.
- Daily, month-to-date and previous-month reports, including the list of readings for the daily view.
- Demo seed script for a sample account.

## Tech stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Auth: JWT + bcrypt
- Testing: Node Test Runner + Supertest + pg-mem

## Requirements

- Node.js 18+
- npm
- PostgreSQL 14+

## Install

From the project root:

```bash
npm install
cp .env.example .env
```

Update `.env` with your own PostgreSQL connection and a random JWT secret:

```env
PORT=4000
DATABASE_URL=postgres://postgres:postgres@localhost:5432/sweety
JWT_SECRET=replace-this-with-a-long-random-secret-at-least-32-characters
CLIENT_ORIGIN=http://localhost:5173
VITE_API_URL=http://localhost:4000/api
```

Create the PostgreSQL database if needed:

```bash
createdb sweety
```

## Run the database migration

```bash
npm run db:migrate
```

## Run the app

```bash
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:4000

## Demo user

```bash
npm run seed
```

Login with:

- Email: demo@sweety.local
- Password: SweetyDemo123!

## Tests

```bash
npm test
```

## Build

```bash
npm run build
```

## API endpoints

All API routes are under `/api`.

- `POST /api/auth/register`: create a new account
- `POST /api/auth/login`: log in and receive a JWT
- `GET /api/readings`: list readings for the logged-in user
- `POST /api/readings`: create a reading
- `PUT /api/readings/:id`: update a reading
- `DELETE /api/readings/:id`: delete a reading
- `GET /api/reports?date=YYYY-MM-DD&type=daily|mtd|monthly`: summary reports

## Notes / assumptions

- This version is designed around a single patient account with readings scoped to the logged-in user.
- The app treats the selected date as a calendar date in UTC for consistency across time zones.
- Reports use the previous full calendar month for the monthly period and the month-to-date range up to the selected date.
- The app does not include doctor roles or multi-patient support; those would be the next product improvements.
- If a user is near the daily maximum, the API blocks a fifth reading and shows a clear validation message.
