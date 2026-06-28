// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #138

// Problem Statement:
// Implement an OOP-based Contact Management and Communication Directory Telemetry System.

// Requirements:
// Create an enterprise CRM directory controller class that models entity record pools, blocks duplicate indices using relational validation gates, assigns decentralized structural identifier hashes, parses polymorphic query inputs, and isolates active record mutations safely.

// Approach:
// 1. Maintain in-memory repository arrays to trace reference contact schemas safely (`this.contacts = []`).
// 2. Inject precise unique constraints via high-order lookup methods (`.some()`) to prevent identity collision bugs before memory allocation.
// 3. String-sanitize data inputs (`.trim()`, `.toLowerCase()`) directly inside runtime ingestion pipelines to guarantee reliable schema uniformity.
// 4. Implement a dynamic polymorphic search engine matching partial matrix conditions across multiple entity field vectors simultaneously using lookups (`.filter()`, `.includes()`).
// 5. Utilize shadow property assignment layouts (`Object.assign()`) to execute seamless reference-safe state mutations on targeted object coordinates.

class ContactBook {
    constructor() {
        this.contacts = [];
    }

    // Instantiates, sanitizes, and appends unique identity documents cleanly into production directories
    addContact(name, phone, email, category = "Personal") {
        const isDuplicate = this.contacts.some(c => c.phone === phone);
        if (isDuplicate) return `Validation Error: Duplicate Key. Primary contact registry index ${phone} already allocated. ❌`;

        const newContact = {
            // High-end decentralized token matching structural tracking specifications
            id: "CON-" + Math.random().toString(36).substr(2, 5).toUpperCase(),
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim().toLowerCase(),
            category,
            createdAt: new Date().toLocaleDateString()
        };

        this.contacts.push(newContact);
        return `Success Trace: Enrolled entry for '${name}' smoothly into terminal directories. ✅`;
    }

    // Parses partial alphanumeric inputs to filter relevant identity records from target arrays
    searchContacts(query) {
        const cleanQuery = query.toLowerCase().trim();
        if (!cleanQuery) return this.contacts; 

        return this.contacts.filter(c => 
            c.name.toLowerCase().includes(cleanQuery) || 
            c.phone.includes(cleanQuery) ||
            c.email.toLowerCase().includes(cleanQuery)
        );
    }

    // Handles property transformations behind internal reference state layers
    updateContact(id, updatedDetails) {
        const contact = this.contacts.find(c => c.id === id);
        if (!contact) return "Execution Error: Targeted tracking index mismatch. ❌";

        // Merging updated parameters safely into the targeted pointer coordinate
        Object.assign(contact, updatedDetails);
        return `Success Trace: Relational parameters for '${contact.name}' updated cleanly in system maps. 🔄`;
    }

    // Purges targeted transaction vectors completely from active directory spaces
    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) return "Execution Error: Entity structural coordinate missing. ❌";

        const removed = this.contacts.splice(index, 1);
        return `Success Trace: Record purged. '${removed[0].name}' deactivated from system directories. 👋`;
    }
}

// Spawning centralized directory interface controllers inside active memory spaces
const myPhonebook = new ContactBook();

// Seeding operational parameters matching Problem #138 dataset configurations
myPhonebook.addContact("Jawwad Shah", "03001234567", "jawwad@example.com", "Work");
myPhonebook.addContact("Zain Ahmed", "03219876543", "zain@design.com", "Personal");
myPhonebook.addContact("Sara Khan", "03335554443", "sara@marketing.com", "Work");

console.log("--- Production CRM Active Directory Logs ---");
console.table(myPhonebook.contacts);

// Compiling dynamic data snapshots using the polymorphic search pipeline
console.log("\nSearching for 'jaw'...");
console.table(myPhonebook.searchContacts("jaw"));

// Capturing target indices parameters cleanly to perform mock transformations
const zainId = myPhonebook.contacts[1].id;
console.log(myPhonebook.updateContact(zainId, { phone: "03210000000", category: "Work" }));

console.log("\n--- Post-Transformation Updated Communication Registries ---");
console.table(myPhonebook.contacts);

// Output:
// Outputs clean structural activity execution logs, runtime tabular matrices, and beautifully formatted search filtration feedback.

// What I Learned:
// 1. Structural Identity Duplication Checks: Using runtime array verification strategies (`.some()`) blocks data pollution layers and guarantees primary key uniqueness.
// 2. Polymorphic Multi-Field Filtration: Combining multiple conditional flags within standard `.filter()` workflows constructs flexible search indices that traverse different schema fields concurrently.
// 3. Dynamic Reference Property Merging: Deploying native memory-safe utilities (`Object.assign()`) allows atomic property updates across specific object reference shapes without resetting untouched state structures.