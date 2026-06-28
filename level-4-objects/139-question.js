// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #139

// Problem Statement:
// Implement an OOP-based User Authentication Framework and Active Session Telemetry System.

// Requirements:
// Create an enterprise AuthSystem controller class that models secure credential storage, manages stateful session pointers, enforces string-transformation cryptographic sanitization layers, blocks duplicate credentials via security guard gates, and isolates runtime session states safely.

// Approach:
// 1. Maintain in-memory identity repositories alongside dedicated stateful pointer anchors to trace registered nodes and operational runtimes (`this.users`, `this.currentSession`).
// 2. Encapsulate access token hashing algorithms behind abstract utility methods (`_hashPassword`) to simulate isolated server-side cryptography.
// 3. Deploy explicit lookup operations (`.some()`) as foundational structural boundaries against duplicate identity enrollment early in the data lifecycle.
// 4. Implement credential verification routines paired with uniform error-masking feedback thresholds to preserve secure authentication profiles without revealing internal vector faults.
// 5. Manage user state modifications across volatile session blocks by binding or discarding metadata object profiles dynamically during login and logout execution.

class AuthSystem {
    constructor() {
        this.users = [];       
        this.currentSession = null; 
    }

    // Encapsulates a pseudo-cryptographic parsing utility to isolate plaintext strings from system data stores
    _hashPassword(password) {
        return "hashed_" + password.split('').reverse().join('') + "_secret";
    }

    // Instantiates, filters, and records authenticated credentials cleanly into baseline databases
    signup(username, email, password) {
        const cleanEmail = email.toLowerCase().trim();

        // Guard Clause: Evaluates potential identity overlapping against active system keys
        const emailExists = this.users.some(u => u.email === cleanEmail);
        if (emailExists) return "Security Guard: Duplicate Key. Targeted email register index already allocated. ❌";

        const newUser = {
            id: "USR-" + Date.now().toString().slice(-4),
            username: username.trim(),
            email: cleanEmail,
            password: this._hashPassword(password)
        };

        this.users.push(newUser);
        return `Success Trace: Identity profile created successfully for '${username}'. 🎉`;
    }

    // Authenticates runtime parameters against system registries to launch safe session blocks
    login(email, password) {
        const cleanEmail = email.toLowerCase().trim();

        // 1. Targeted lookup evaluation across core user arrays
        const user = this.users.find(u => u.email === cleanEmail);
        if (!user) {
            return "Authentication Error: Credential mismatch or validation failure. ❌"; 
        }

        // 2. Cross-verifying dynamic token hashes against recorded schema records
        const inputPasswordHash = this._hashPassword(password);
        if (user.password !== inputPasswordHash) {
            return "Authentication Error: Credential mismatch or validation failure. ❌";
        }

        // Mapping system parameters cleanly into volatile memory session spaces
        this.currentSession = {
            id: user.id,
            username: user.username,
            email: user.email,
            loggedInAt: new Date().toLocaleTimeString()
        };

        return `Success Trace: Welcome back, ${user.username}! Active state session telemetry launched. 🟢`;
    }

    // Purges session configurations to safely release active runtime reference tokens
    logout() {
        if (!this.currentSession) return "Validation Error: System idle. Active state session reference missing. 🤔";
        
        const name = this.currentSession.username;
        this.currentSession = null; 
        return `Success Trace: Session terminated. '${name}' disconnected from runtime environment maps. 🔴`;
    }

    // Evaluates the status of the current environment session state layer
    isLoggedIn() {
        return this.currentSession !== null;
    }
}

// Spawning human access management infrastructure interfaces inside active memory spaces
const myAppAuth = new AuthSystem();

// Seeding operational user matrices matching Problem #139 dataset configurations
console.log(myAppAuth.signup("Jawwad Shah", "jawwad@dev.com", "superAdmin123"));
console.log(myAppAuth.signup("Zain Ahmed", "zain@design.com", "helloDesign"));

console.log("\n--- Production User Database (Encrypted Passwords) ---");
console.table(myAppAuth.users);

// Capturing security parameters cleanly to perform mock access transformations
console.log("\n--- Login Attempts ---");
console.log(myAppAuth.login("jawwad@dev.com", "wrongPassword")); 
console.log(myAppAuth.login("jawwad@dev.com", "superAdmin123")); 

console.log("\nIs User Logged In?", myAppAuth.isLoggedIn());
console.log("Current Active Session:", myAppAuth.currentSession);

console.log("\n" + myAppAuth.logout());
console.log("Is User Logged In now?", myAppAuth.isLoggedIn());

// Output:
// Outputs clean structural execution feedback messages, full schema tabular grids, and beautifully structured active session parameters.

// What I Learned:
// 1. Abstract Security Utilities: Masking core internal processes (like custom hashing) inside private-scoped methods (`_hashPassword`) mimics basic defense-in-depth principles.
// 2. Uniform Error-Masking Protocols: Throwing matching error feedback maps for separate validation breaches blocks malicious user enumeration across production directory pools.
// 3. Volatile Session Telemetry: Managing volatile user session lifecycles using dynamic objects (`currentSession`) provides clean state tracking mechanics without constantly calling heavy datastore matrices.