# SocioNest

A Flutter-based smart society management app with four roles: Resident, Worker, Security, and Admin.

## Repository layout

- `socionest_flutter/` — Flutter application
- `assets/mock_data/csv/` — relational mock datasets for the first prototype

## Run the app

1. Install Flutter (stable) and verify with `flutter doctor`.
2. Open a terminal in `socionest_flutter`.
3. Run `flutter pub get`.
4. Run `flutter run`.

The first version uses local mock data and does not require a backend. CSV files are included as a data-design/reference layer; the starter UI currently uses in-memory demo content.

## Roles

- Resident: raise service requests, view bills and announcements.
- Worker: view assigned jobs and update availability.
- Security: record visitors and review alerts.
- Admin: oversee requests, workers, payments and society activity.

## Mock data

See `../assets/mock_data/csv/` for the CSV datasets and their headers. IDs are designed to be used as foreign-key references across files.

## Next steps

1. Add CSV parsing and repository classes.
2. Connect authentication and role-based access.
3. Replace mock repositories with a backend API.
4. Add validation, tests and audit logging.
