// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #134

// Problem Statement:
// Implement an OOP-based Client E-Commerce Shopping Cart State System.

// Requirements:
// Create an advanced shopping cart controller capable of dynamically tracking items session pools, incrementing duplicate item scales, handling defensive negative bounds via structural short-circuits, and running multi-scalar single-pass bill aggregation.

// Approach:
// 1. Instatiate isolated session arrays inside memory scopes (`this.items = []`).
// 2. Pair `.find()` constraints with custom quantity addition rules to handle multi-pass duplicate entries without generating corrupt data nodes.
// 3. Inject boundary safeguards inside `updateQuantity` that hand over execution flow directly to `removeItem()` if quantity bounds drop to zero or lower.
// 4. Deploy highly optimized computational single-pass pipeline `.reduce()` loops to sum total transactional aggregates in linear $O(N)$ execution speed.

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Evaluates item registry states and pushes or merges elements cleanly
    addItem(product, quantity = 1) {
        if (!product || !product.id) return "Validation Error: Invalid product payload structure.";
        
        const existingItem = this.items.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
            return `Session Track: Increased ${product.name} overall quantity to ${existingItem.quantity}.`;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
            });
            return `Session Track: ${product.name} successfully added to cart. ✅`;
        }
    }

    // Purges targeted item blocks from active state tables
    removeItem(id) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return "Execution Error: Item missing from session profile.";

        const [removedItem] = this.items.splice(index, 1);
        return `Success Trace: '${removedItem.name}' removed from your active cart.`;
    }

    // Dispatches adaptive modifications while managing defensive fallbacks
    updateQuantity(id, newQty) {
        if (newQty <= 0) return this.removeItem(id);

        const item = this.items.find((item) => item.id === id);
        if (!item) return "Execution Error: Target coordinate not matching.";

        item.quantity = newQty;
        return `Success Trace: ${item.name} quantity successfully updated to: ${item.quantity}`;
    }

    // Processes math valuations scalar vectors in single-pass performance runtime
    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // flushes the system buffer clean
    clearCart() {
        this.items = [];
        return "Session Reset: Shopping cart references wiped completely.";
    }
}

// Initializing central testing suite references matching target specifications
const myCart = new ShoppingCart();

const productsDB = {
    mouse: { id: "p1", name: "Gaming Mouse", price: 1200 },
    ssd: { id: "p2", name: "Samsung SSD", price: 8500 },
};

// Executing active validation streams matching problem dataset specifications
console.log(myCart.addItem(productsDB.mouse, 1));
console.log(myCart.addItem(productsDB.ssd, 1));
console.log(myCart.addItem(productsDB.mouse, 2)); // Dynamic stacking increment operation check

console.log("\n--- Active Live Shopping Cart Grid Layout ---");
console.table(myCart.items);

// Validating safe mathematical summary accumulation outputs
const totalInvoicedBill = myCart.calculateTotal();
console.log(`Checkout Invoice Summary Total: Rs. ${totalInvoicedBill.toLocaleString()}/-`);

// Output:
// Outputs structural operation strings, live dataset tables, and proper numerical balance logs.

// What I Learned:
// 1. Structural State Aggregations: Combining filtering parameters with target reduction methods (`.filter().reduce()`) allows complex financial checkout operations to compute safely in optimal computational cycles.
// 2. Reference Memory Management: Manipulating multi-tiered structural arrays via targeted index matching rules (`.find()`, `.findIndex()`) allows runtime mutation routines to scale without corrupting historical dataset arrays.
// 3. Mathematical Defensive Normalization: Enforcing deterministic parameter mutations (`Math.max()`, `Math.abs()`) blocks corrupted tracking data payloads or negative quantity values from fracturing central ledger layers.