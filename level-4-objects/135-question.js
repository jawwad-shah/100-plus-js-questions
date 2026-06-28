// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #135

// Problem Statement:
// Implement an OOP-based FinTech Transaction Ledger and Expense Tracking Controller.

// Requirements:
// Create an advanced financial tracking class that captures multi-type transactions, isolates corrupted payload values using standard absolute normalizers, assigns decentralized unique id hashes, and processes compound cashflow aggregates safely.

// Approach:
// 1. Maintain in-memory repository arrays to trace transaction snapshots safely (`this.transactions = []`).
// 2. Inject type validation constraints (`type !== 'income' && type !== 'expense'`) to reject conflicting data entry pipelines early.
// 3. Leverage dynamic string transformations combining timestamps and base-36 conversions to output alphanumeric primary identity indices.
// 4. Implement a highly optimized single-pass pipeline `.reduce()` structure that handles conditional evaluations directly to preserve engine performance cycles over high volumes of data blocks.

class ExpenseTracker {
    constructor() {
        this.transactions = [];
    }

    // Creates, normalizes, and chains ledger entries securely
    addTransaction(description, amount, type) {
        if (type !== 'income' && type !== 'expense') {
            return "Validation Error: System classification token must explicitly match 'income' or 'expense'. ❌";
        }

        const transaction = {
            // Generates a robust pseudo-unique alphanumeric transaction string tag
            id: Date.now() + Math.random().toString(36).substring(2, 7),
            description,
            amount: Math.abs(amount), // Mathematical defensive sanitization layer against double-negatives bugs
            type,
            date: new Date().toLocaleDateString()
        };

        this.transactions.push(transaction);
        return `Success Trace: Enrolled entry for '${description}' smoothly into financial tables. ✅`;
    }

    // Purges targeted transaction vectors from central registries
    deleteTransaction(id) {
        const index = this.transactions.findIndex(t => t.id === id);
        if (index === -1) return "Execution Error: Transaction reference index missing.";

        const [removed] = this.transactions.splice(index, 1);
        return `Success Trace: Purged transaction "${removed.description}" safely from active pools.`;
    }

    // Optimized Single-Pass Evaluation: Calculates cumulative financial flows in a single loop
    getLedgerSummary() {
        return this.transactions.reduce((summary, t) => {
            if (t.type === 'income') summary.income += t.amount;
            if (t.type === 'expense') summary.expense += t.amount;
            return summary;
        }, { income: 0, expense: 0 });
    }

    // Explicit calculation helper layers mapped straight from core parameters 
    getTotalIncome() {
        return this.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
    }

    getTotalExpense() {
        return this.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
    }

    getNetBalance() {
        const summary = this.getLedgerSummary();
        return summary.income - summary.expense;
    }
}

// Spawning centralized platform wallet instances into current memory scopes
const myWallet = new ExpenseTracker();

// Enrolling dataset parameters matching Problem #136 specs
myWallet.addTransaction("Freelance Project Payment", 45000, "income");
myWallet.addTransaction("Internship Stipend", 15000, "income");
myWallet.addTransaction("Internet Bill", 3500, "expense");
myWallet.addTransaction("SaaS Server Hosting", 4200, "expense");
myWallet.addTransaction("Biryani Party with Friends", 2500, "expense");

console.log("--- Production Financial Registry Logs Matrix ---");
console.table(myWallet.transactions);

// Compiling dynamic data snapshots using the advanced optimized engine pipeline
const summaryReport = myWallet.getLedgerSummary();
const currentBalance = myWallet.getNetBalance();

console.log(`Total System Income : Rs. ${summaryReport.income.toLocaleString()}/-`);
console.log(`Total System Expense: Rs. ${summaryReport.expense.toLocaleString()}/-`);
console.log(`Net Liquid Balance  : Rs. ${currentBalance.toLocaleString()}/- ${currentBalance >= 0 ? '🟢 (In Profit)' : '🔴 (In Loss)'}`);

// Output:
// Outputs clean structural activity execution logs, runtime tabular matrices, and beautifully formatted currency balance metrics.

// What I Learned:
// 1. Single-Pass Performance Optimization: Consolidating separate filtering and reduction operations into a single loop via `.reduce()` optimizes computational cycles and cuts algorithmic complexity.
// 2. Early Gate Failures: Enforcing rigorous explicit conditional checks directly at runtime mutation points blocks garbage or malformed data frames from entering central production registries.
// 3. Composite Key Spawning: Blending system epoch microsecond indicators with randomized numeric base-36 conversions outputs lightweight, unique alphanumeric tokens without relying on external packages.