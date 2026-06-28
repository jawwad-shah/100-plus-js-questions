// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #137

// Problem Statement:
// Implement an OOP-based Library Management and Resource Allocation Telemetry System.

// Requirements:
// Create an enterprise LMS catalog controller class that models literary inventory pools, registers unique consumer account profiles, evaluates dynamic resource allocation flags against structural availability gates, and isolates transactional borrowing mutations safely.

// Approach:
// 1. Manage internal registries inside memory arrays to trace structural book documents and member profile shapes safely (`this.books`, `this.members`).
// 2. Inject explicit validation boundaries and condition checks to process safe transactions, blocking multiple resource allocations instantly.
// 3. Utilize inline boolean availability flags (`isAvailable`) as explicit system state indicators to gate access to transactional operations.
// 4. Implement dynamic relational mapping inside consumer profile arrays (`borrowedBooks`) to store corresponding resource identity keys.
// 5. Enforce target matrix coordinate screening via dynamic search algorithms (`.find()`, `.indexOf()`) to perform clean runtime data mutations without breaking historical node configurations.

class Library {
    constructor() {
        this.books = [];       
        this.members = [];     
    }

    // Instantiates, sanitizes, and appends reference book schemas cleanly into operational data arrays
    addBook(id, title, author) {
        const book = { id, title, author, isAvailable: true };
        this.books.push(book);
        return `Success Trace: Cataloged library asset '${title}' smoothly into inventory registry. 📖`;
    }

    // Registers a clean user entity layout matching individual tracking specifications
    registerMember(id, name) {
        const member = { id, name, borrowedBooks: [] }; 
        this.members.push(member);
        return `Success Trace: Account identity '${name}' registered cleanly in authentication logs. 🪪`;
    }

    // Handles resource allocation transactions behind state protection walls
    borrowBook(bookId, memberId) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.id === memberId);

        if (!book) return "Execution Error: Targeted resource index mismatch. ❌";
        if (!member) return "Execution Error: User identification index mismatch. ❌";
        if (!book.isAvailable) return `Validation Error: Locked Resource. Asset '${book.title}' allocation blocked. 🔒`;

        // Setting absolute state pointer configurations for active resource locks
        book.isAvailable = false; 
        member.borrowedBooks.push(bookId); 
        
        return `Success Trace: Resource allocated. Shared '${book.title}' safely with profile ${member.name}. ✅`;
    }

    // Handles collection return routines to release runtime allocation blocks on asset nodes
    returnBook(bookId, memberId) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.id === memberId);

        if (!book || !member) return "Execution Error: Structural reference nodes missing in database vectors. ❌";

        const bookIndex = member.borrowedBooks.indexOf(bookId);
        if (bookIndex === -1) return `Validation Error: Profile '${member.name}' does not possess matching asset keys. 🤔`;

        // Releasing system locks to process safe inventory de-allocation
        book.isAvailable = true; 
        member.borrowedBooks.splice(bookIndex, 1); 
        
        return `Success Trace: Contract ended. '${book.title}' returned cleanly to main terminal pools. 👍`;
    }
}

// --- Production LMS Architecture Interface Verification ---
const lahoreLibrary = new Library();

// Seeding operational parameters matching Problem #137 dataset configurations
lahoreLibrary.addBook("b1", "Eloquent JavaScript", "Marijn Haverbeke");
lahoreLibrary.addBook("b2", "You Don't Know JS", "Kyle Simpson");
lahoreLibrary.registerMember("m1", "Jawwad Shah");

console.log("--- Production LMS Active Inventory Layout ---");
console.table(lahoreLibrary.books);

// Capturing transactional states to perform mock system operations
console.log(lahoreLibrary.borrowBook("b1", "m1"));

// Verifying structural safety controls against redundant allocations
console.log(lahoreLibrary.borrowBook("b1", "m1")); 

console.log("\n--- Post-Transformation Updated Inventory Registries ---");
console.table(lahoreLibrary.books);

console.log("\n" + lahoreLibrary.returnBook("b1", "m1"));

// Output:
// Outputs clean structural verification feedback messages, full schema tabular grids, and beautifully localized transactional update logs.

// What I Learned:
// 1. Structural State Flags: Leveraging inline binary indicators (`isAvailable: boolean`) prevents transactional conflicts across nested data domains.
// 2. Relational Schema Operations: Implementing reference-based arrays (`borrowedBooks`) establishes robust, memory-safe data mappings across separate memory registries.
// 3. Defensive Array Mutation: Utilizing precise standard indices and index screening workflows (`.indexOf()` paired with `.splice()`) ensures atomic asset de-allocation without affecting structural array boundaries.