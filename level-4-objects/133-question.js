// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #133

// Problem Statement:
// Create an encapsulated backend Product Inventory Management System.

// Requirements:
// Build an advanced object-oriented storage manager capable of processing entity collection pools, verifying unique primary keys, cascading in-place stock updates, implementing threshold alarm criteria, and compiling aggregate net worth streams safely.

// Approach:
// 1. Maintain isolated internal repository memory buffers using a modern class blueprint allocation model (`this.products = []`).
// 2. Build parameter collision checks via the native `.find()` iterator to instantly reject conflicting payload keys (`Same Id Already Exists`).
// 3. Deploy high-speed dynamic slice alterations (`.splice(index, 1)`) inside key mutation lanes to safely un-assign indexes.
// 4. Implement high-order pipeline functions like `.filter()` to capture elements failing metric filters (low stock threshold).
// 5. Use cumulative inline multipliers inside a single-pass `.reduce()` statement to yield total operational value in linear $O(N)$ runtime.

class InventoryManager {
    constructor() {
        this.products = [];
    }

    // Creates new entities safely while validating constraint unique fields
    addProduct(id, name, price, stock) {
        const isDuplicate = this.products.some(product => product.id === id);
        if (isDuplicate) return `Validation Error: Duplicate Identity Key [${id}] Conflict intercepted.`;

        this.products.push({ id, name, price, stock });
        return `Success Trace: Enrolled item '${name}' smoothly into inventory maps.`;
    }

    // In-place resource alteration processing block
    updateProduct(id, amount) {
        const product = this.products.find(p => p.id === id);
        if (!product) return "Processing Error: Product Node Not Found.";

        product.stock += amount;
        return `Stock Delta Sync: '${product.name}' updated totals boundary to: ${product.stock}`;
    }

    // Drops targeted node streams cleanly
    removeProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return "Processing Error: Target Coordinates Missing.";

        this.products.splice(index, 1);
        return "Transaction Status: Asset records purged successfully.";
    }

    // Filters and yields matching layout indices based on standard threshold markers
    alertLowStock(threshold = 5) {
        return this.products.filter(p => p.stock <= threshold);
    }

    // Aggregates nested pricing scalars into a clean absolute balance summary
    currentTotalValue() {
        return this.products.reduce((total, p) => total + (p.stock * p.price), 0);
    }
}

// Spawning enterprise catalog system instances into execution boundaries
const myStore = new InventoryManager();

// Running execution steps matching Problem #134 dataset specs
console.log(myStore.addProduct(23, "Mouse", 899, 8));
console.log(myStore.addProduct(232, "PC", 85000, 5));
console.log(myStore.addProduct(234, "PS5", 120000, 2)); 
console.log(myStore.addProduct(2389, "USB", 1500, 18));
console.log(myStore.addProduct(23, "SSD", 7500, 3)); // Intentionally hitting collision guard

console.log("\n--- Active Live Inventory Registry Table ---");
console.table(myStore.products);

console.log("\nTriggering Stock Patching Operations:");
console.log(myStore.updateProduct(232, 5)); // PC stock level jumps up smoothly

console.log("\n--- Microservices Telemetry Dashboard Alert Logs (Low Stock <= 5) ---");
console.table(myStore.alertLowStock(5));

// Displaying finalized metric evaluation with localized currency styling formatting
const overallWealthBalance = myStore.currentTotalValue();
console.log(`\nInventory Evaluation Balance Summary: Rs. ${overallWealthBalance.toLocaleString()}/-`);

// Output:
// Outputs structural execution strings, dynamic index logs, tables, and total valuation scores safely.

// What I Learned:
// 1. Algorithmic Asset Valuations: Implementing inline cross-multiplication parameters directly inside standard reduction pipelines (`.reduce()`) extracts holistic dataset aggregates in a single-pass linear $O(N)$ speed.
// 2. Primary Key Protection Gates: Enforcing preemptive lookups via array evaluation predicates (`.find()`) establishes a strict operational gate that blocks data pollution before record ingestion.
// 3. Conditional Metric Alarms: Utilizing programmatic array filters (`.filter()`) against localized dynamic parameter thresholds allows automated alerting engines to monitor system-wide vulnerabilities instantly.