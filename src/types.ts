export type TransactionType = 'expense' | 'income' | 'transfer';
export type PaymentMethod = 'cash' | 'card' | 'bank' | 'digital' | 'other';
export type WalletType = 'cash' | 'bank' | 'card' | 'digital' | 'savings' | 'credit' | 'other';

export interface Profile { id: string; currency: string; theme: 'light' | 'dark'; setup_completed: boolean; monthly_budget: number; }
export interface Wallet { id: string; name: string; type: WalletType; currency: string; color: string; icon: string; balance?: number; }
export interface Category { id: string; name: string; type: 'expense' | 'income'; color: string; icon: string; is_default: boolean; }
export interface Transaction { id: string; wallet_id: string | null; category_id: string | null; type: TransactionType; amount: number; original_amount: number | null; original_currency: string | null; description: string | null; payment_method: PaymentMethod; transaction_date: string; category?: Category | null; wallet?: Wallet | null; }
export interface Budget { id: string; category_id: string; amount: number; period: 'monthly' | 'weekly' | 'yearly'; category?: Category | null; }
export interface SavingsGoal { id: string; name: string; target_amount: number; current_amount: number; deadline: string | null; }
export interface RecurringExpense { id: string; wallet_id: string | null; category_id: string | null; name: string; amount: number; frequency: 'daily' | 'weekly' | 'monthly' | 'yearly'; next_date: string; active: boolean; category?: Category | null; wallet?: Wallet | null; }
