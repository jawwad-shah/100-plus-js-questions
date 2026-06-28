// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #136

// Problem Statement:
// Implement an OOP-based Employee Management and Payroll Telemetry System.

// Requirements:
// Create an enterprise HRMS database controller class that models worker objects pools, assigns formatted unique corporate identifier codes, evaluates dynamic promotions against state gates, enforces soft-delete state patterns, and isolates active metrics summaries safely.

// Approach:
// 1. Manage internal registries inside memory arrays to trace employee document shapes safely (`this.employees = []`).
// 2. Pair unique trailing string micro-timestamps with base-36 uppercase random clips to build structured primary indexing string codes (`EMP-XXXXYYY`).
// 3. Inject strict defensive conditionals inside modification routes to verify status markers before updating values, rejecting terminated records instantly.
// 4. Utilize the state pointer filter design pattern ("Soft Delete Tracking") to preserve historic database trees without purging original records from memory arrays.
// 5. Accumulate scalar financial vectors via standard high-order functions (`.filter().reduce()`) to compute total active salary aggregates in linear O(N) speed.

class EmployeeManagement {
    constructor() {
        this.employees = [];
    }

    // Instantiates, sanitizes, and appends employee documents cleanly into active memory arrays
    addEmployee(name, role, department, salary) {
        const employee = {
            // High-end corporate token matching custom formatting specs
            id: "EMP-" + Date.now().toString().slice(-4) + Math.random().toString(36).substring(2, 5).toUpperCase(),
            name,
            role,
            department,
            salary: Math.abs(salary), // Mathematical defensive sanitization against unintended negative values
            status: "Active",
            joiningDate: new Date().toLocaleDateString()
        };

        this.employees.push(employee);
        return `Success Trace: Enrolled '${name}' smoothly into '${department}' division. ✅`;
    }

    // Handles active role/salary transformations behind state protection walls
    promoteEmployee(id, newRole, salaryIncrement) {
        const emp = this.employees.find(e => e.id === id);
        if (!emp) return "Execution Error: Employee identification index mismatch. ❌";
        if (emp.status === "Terminated") return "Validation Error: Locked Profile. Terminated personnel changes blocked. ❌";

        emp.role = newRole;
        emp.salary += Math.abs(salaryIncrement);
        return `Success Trace: Promoted ${emp.name} to '${newRole}'. Added Rs.${salaryIncrement.toLocaleString()} to baseline salary registry. 🚀`;
    }

    // Sets flag indicators to handle enterprise soft delete mutations without dropping reference data nodes
    terminateEmployee(id) {
        const emp = this.employees.find(e => e.id === id);
        if (!emp) return "Execution Error: Target coordinate not found. ❌";

        emp.status = "Terminated";
        return `Success Trace: Contract ended. '${emp.name}' deactivated in system directory maps. 👋`;
    }

    // Aggregates net monetary outflows cleanly by screening status tags in linear processing time
    calculateMonthlyPayroll() {
        return this.employees
            .filter(e => e.status === "Active")
            .reduce((total, e) => total + e.salary, 0);
    }
}

// Spawning human resource architecture interface controllers inside active memory spaces
const companyHR = new EmployeeManagement();

// Seeding operational parameters matching Problem #137 dataset configurations
companyHR.addEmployee("Jawwad Shah", "Full-Stack Developer", "Engineering", 120000);
companyHR.addEmployee("Zain Ahmed", "UI/UX Designer", "Design", 85000);
companyHR.addEmployee("Sara Khan", "Digital Marketer", "Marketing", 75000);

console.log("--- Production HR Active Directory Database Layout ---");
console.table(companyHR.employees);

// Capturing state indices parameters cleanly to perform mock transformations
const jawwadId = companyHR.employees[0].id;
console.log(companyHR.promoteEmployee(jawwadId, "Senior Software Engineer", 40000));

const zainId = companyHR.employees[1].id;
console.log(companyHR.terminateEmployee(zainId));

console.log("\n--- Post-Transformation Updated Corporate Registries ---");
console.table(companyHR.employees);

// Validating safe mathematical summary accumulation outputs with localization strings
const totalActivePayroll = companyHR.calculateMonthlyPayroll();
console.log(`Financial Inflow Ledger Update: Total Active Payroll Budget: Rs. ${totalActivePayroll.toLocaleString()}/-`);

// Output:
// Outputs clean structural verification feedback messages, full schema tabular grids, and beautifully localized currency balances logs.

// What I Learned:
// 1. Soft Delete Design Pattern: Preserving critical business records by updating status tokens (`status: "Terminated"`) prevents irreversible destructive mutations within core tracking arrays.
// 2. High-Order Aggregations: Piping clean array filtering logic into accumulator loops (`.filter().reduce()`) allows target telemetry metrics to compile safely without mutating baseline data layers.
// 3. Defensive Sanitization Methods: Enforcing strict mathematical safety bounds (`Math.abs()`) inside ingestion routes blocks malicious or unintended structural input errors before storage allocation.