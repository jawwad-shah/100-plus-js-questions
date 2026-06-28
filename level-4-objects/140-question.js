// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #140

// Problem Statement:
// Implement an OOP-based Content Management System (CMS) Hub and Engagement Telemetry Engine.

// Requirements:
// Create an enterprise CMS publication controller class that models rich textual content schemas, computes search-engine-optimized relational slugs via string mutation utilities, filters layout distributions by lifecycle flags, tracks multi-vector user engagement metrics, and links dynamic nested comment arrays securely.

// Approach:
// 1. Maintain memory data collections to manage article blueprints, operational state attributes, and sub-document lists (`this.posts = []`).
// 2. Build abstract data transformation engines (`_generateSlug`) using regular expression pipelines to string-sanitize title strings into clean, safe URL-addressable tokens.
// 3. Inject uniform lifecycle property markers (`status: "Draft" | "Published"`) as functional gateways to isolate internal editorial states from client-facing application views.
// 4. Implement scalar tracking operators (`post.views++`, `post.likes++`) straight against targeted object pointer memory addresses to compile telemetry metrics on demand.
// 5. Build multi-tiered nested data distributions by pushing independently structured sub-schemas into individual asset coordinate trees (`post.comments.push()`).

class BlogCMS {
    constructor() {
        this.posts = [];
    }

    // Runs pipeline normalization sequences using regex to strip illegal characters and bind hyphen anchors
    _generateSlug(title) {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9 ]/g, '') 
            .replace(/\s+/g, '-');      
    }

    // Instantiates, structures, and registers content schemas cleanly inside primary database layers
    createPost(title, content, author, tags = [], status = "Draft") {
        const post = {
            // Decentralized alphanumeric primary key matching custom corporate specifications
            id: "POST-" + Math.random().toString(36).substr(2, 5).toUpperCase(),
            title: title.trim(),
            slug: this._generateSlug(title),
            content,
            author,
            tags,
            status, 
            views: 0,
            likes: 0,
            comments: [], 
            publishedAt: new Date().toLocaleDateString()
        };

        this.posts.push(post);
        return `Success Trace: Document '${title}' compiled cleanly under lifestyle state classification '${status}'. ✍️`;
    }

    // Collects public-facing system snapshots by filtering asset markers in linear time
    getPublishedPosts() {
        return this.posts.filter(p => p.status === "Published");
    }

    // Increments computational tracking vectors upon successful record lookup resolution
    viewPost(slug) {
        const post = this.posts.find(p => p.slug === slug);
        if (!post) return "Execution Error: Targeted slug index mismatch. ❌";

        post.views++; 
        return post;
    }

    // Registers user feedback transformations across target object tracking properties
    likePost(slug) {
        const post = this.posts.find(p => p.slug === slug);
        if (!post) return "Execution Error: Targeted slug index mismatch. ❌";

        post.likes++;
        return `Success Trace: Engagement updated. '${post.title}' accumulated 1 validation metric. Aggregate Total: ${post.likes} ❤️`;
    }

    // Enrolls structured transactional comments as multi-tiered nested layers into target posts
    addComment(slug, user, commentText) {
        const post = this.posts.find(p => p.slug === slug);
        if (!post) return "Execution Error: Targeted slug index mismatch. ❌";

        const newComment = {
            commentId: "COM-" + Math.random().toString(36).substr(2, 3).toUpperCase(),
            user,
            text: commentText.trim(),
            timestamp: new Date().toLocaleTimeString()
        };

        post.comments.push(newComment);
        return "Success Trace: Nested metadata sub-schema injected cleanly into target terminal log. 💬";
    }
}

// Spawning public content management system interfaces inside active memory spaces
const myBlog = new BlogCMS();

// Seeding operational publication rows matching Problem #140 dataset configurations
myBlog.createPost("Mastering Tailwind CSS", "Content about modern utility classes...", "Jawwad Shah", ["CSS", "Frontend"], "Published");
myBlog.createPost("My 10 Year Goals as an Engineer", "Building, scaling and luxury cars...", "Jawwad Shah", ["Lifestyle", "Career"], "Draft");
myBlog.createPost("JavaScript Objects Explained", "Deep dive into object-oriented JS...", "Jawwad Shah", ["JavaScript", "Logic"], "Published");

console.log("--- Production CMS Active Public Directory Layout ---");
console.table(myBlog.getPublishedPosts());

const targetedSlug = "mastering-tailwind-css";

// Simulating live telemetry tracking cycles against targeted inventory nodes
myBlog.viewPost(targetedSlug); 
myBlog.viewPost(targetedSlug); 
console.log(myBlog.likePost(targetedSlug)); 

// Pushing user feedback matrices into nested relational sub-document stores
myBlog.addComment(targetedSlug, "ZainDev", "Brother, glassmorphic card design syntax was elite! Thanks.");

console.log("\n--- Post-Transformation Comprehensive Data Object Tree Schema ---");
console.log(JSON.stringify(myBlog.posts.find(p => p.slug === targetedSlug), null, 2));

// Output:
// Outputs clean structural activity execution logs, filtered tabular layout matrices, and beautifully formatted nested JSON data configurations.

// What I Learned:
// Dynamic Routing Slugs: Designing automated parsing routines via regular expressions transforms unstructured string payloads into clean, semantic, human-readable primary URL indices.
// Operational Lifecycle Gates: Partitioning core datastore sets through strict string property filtering logic state boundaries ensures drafts remain safely decoupled from public application layers.
// Nested Sub-Document Management: Embedding dynamic array shapes inside root parent components provides an intuitive architecture for scaling complex relational features, like comment layers, without scattering records across distinct global arrays.