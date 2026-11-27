# SocioNest

**A web-first smart society management platform** for residents, workers, security personnel and society administrators.

## Current direction

SocioNest is being developed as a responsive web application instead of a Flutter mobile app. The web app will be easier to run locally and demonstrate: it will run in a browser and will not require Flutter or Android Studio.

## Repository layout

- `socionest_web/` — web application (React + Vite)
- `assets/mock_data/csv/` — relational mock datasets
- `socionest_flutter/` — earlier Flutter prototype retained for reference during migration

## Run the web app

```bash
cd socionest_web
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Roles

- **Resident:** service requests, bills and payments, announcements, facility bookings, complaints and notifications.
- **Worker:** assigned jobs, availability, service details and reviews.
- **Security:** visitor entry and logs, alerts and gate activity.
- **Admin:** residents and staff, worker verification, requests and assignments, billing, facilities, announcements and society overview.

The first milestone uses mock data only. No authentication provider, production database, payment gateway, sensor hardware or backend is required to run the initial demo. Do not represent sample records as real residents or real transactions.

## Data

The CSV files under `assets/mock_data/csv/` describe the initial relational data model, including buildings, flats, residents, staff, workers, services, verification, availability, service requests, job assignments, visitor logs, complaints, bills, payments, facility bookings, announcements, sensor devices/readings, alerts, reviews and notifications.

## Development principles

1. Keep the UI responsive for desktop, tablet and mobile browsers.
2. Keep the four roles clearly separated in navigation and dashboard content.
3. Use mock repositories first; keep data access modular so a FastAPI + PostgreSQL backend can be connected later.
4. Never hardcode secrets or use real personal information in mock data.
5. Validate forms and show clear success, empty and error states.

## Planned stack

- Frontend: React, Vite, JavaScript and CSS
- Mock data: local JavaScript data modules / CSV reference datasets
- Future backend: FastAPI
- Future database: PostgreSQL (optionally PostGIS if location-based features are added)
