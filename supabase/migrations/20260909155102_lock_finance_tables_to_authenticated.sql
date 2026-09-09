/*
# Lock finance tables to authenticated users

## Purpose
The finance tables already use owner-scoped RLS policies. This follow-up hardens the table privileges so the anonymous client role cannot even attempt to read or write private financial data.

## Security changes
- Revoke all table privileges from anon on profiles, wallets, categories, transactions, budgets, savings_goals, and recurring_expenses.
- Keep authenticated privileges so the existing auth.uid()-based policies remain the controlling boundary.

## Important notes
1. The app requires email/password sign-in before accessing these tables.
2. Existing authenticated users keep the same owner-only CRUD behavior.
*/

REVOKE ALL PRIVILEGES ON TABLE profiles, wallets, categories, transactions, budgets, savings_goals, recurring_expenses FROM anon;