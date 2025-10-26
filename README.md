# Personal Finance App — Candidate Take-Home

## Tech stack

- React 18+ with TypeScript
- React Router for routing
- TanStack Query for all fetching/caching
- Tailwind CSS for styling

## Brief

> Candidates are free to design the UI using Tailwind CSS — no design guidance or mockups are provided.
> Build a **4-page Personal Finance App** that integrates with a provided backend.
> The app should include:

- Login screen (with password visibility toggle)
- Dashboard (shows welcome, account balance, quick stats, **5 most recent transactions** — summary only: date, merchant, amount)
- Transactions page (shows a paginated list of transactions with the ability to filter on date and merchant)
- Transaction detail page (full transaction info)

## What to implement (high level)

- Routing with protected routes — redirect unauthenticated users to login
- Use **TanStack Query** for all requests: queries + mutations
- Dashboard fetches dashboard stats and recent transactions via provided endpoint
- Transaction detail page fetches by `id`
- Password visibility toggle on login
- Responsive design (mobile-first)
- Proper loading and error states

## API Endpoints

| Endpoint                                                        | Method   | Description                                        | Auth Required |
| --------------------------------------------------------------- | -------- | -------------------------------------------------- | ------------- |
| `/api/auth/login`                                               | **POST** | Logs user in and sets HTTP-only cookie             | No            |
| `/api/auth/me`                                                  | **GET**  | Fetches current user session                       | Yes           |
| `/api/dashboard/stats`                                          | **GET**  | Returns total income/spent and recent transactions | Yes           |
| `/api/transactions?page=1&merchant=<merchant-name>&date=<date>` | **GET**  | Returns paginated list of transactions             | Yes           |
| `/api/transactions/:id`                                         | **GET**  | Returns details for a specific transaction         | Yes           |

---

### Pre-defined User Credentials

Use the credentials below to sign in.

```json
{
  "email": "user@test.com",
  "password": "password"
}
```

### Example Transaction Object

```json
{
  "id": "ef3e724a-fab1-4c75-9063-c12e9af2b4d4",
  "date": "2025-10-20T14:32:00Z",
  "merchant": "Whole Foods Market",
  "description": "Grocery shopping",
  "amount": -87.43,
  "account": "Checking ****1234",
  "status": "completed",
  "paymentMethod": "Debit Card",
  "referenceNumber": "REF-2025-10-20-001"
}
```

## Deliverables (how to get started and what to submit)

1. Fork this repository.
2. Public GitHub repo with clear commits
3. `README.md` with:
   - Setup instructions and any environment variables
   - Commands to run the app locally
4. Short note (in README) explaining any trade-offs or unfinished items
