// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #63

// Problem Statement:
// Dynamic Category-Based Username Generator.

// Requirements:
// Create an advanced account setup utility that accepts a raw profile name and a market category, processes randomized probability states, and attaches matching conceptual prefixes or suffixes dynamically.

// Approach:
// 1. Maintain a clean, structured multi-nested reference object 'usernameAddons' containing custom categories mapped to target prefix and suffix configurations.
// 2. implement a guard clause inside 'usernameGenerator' to cleanly isolate empty or invalid inputs instantly.
// 3. Chain '.trim().toLowerCase().replace(/\s+/g, "")' to normalize user inputs and strip all whitespace gaps.
// 4. Retrieve targeted category nodes ('prefixArray' and 'suffixArray') based on the parameter key.
// 5. Use a 'Math.random() < 0.5' probability coin-flip setup:
//    - If true, compute a random index across the prefix array and prepend the result.
//    - If false, compute a random index across the suffix array and append the result.

// Code:
const usernameAddons = {
  prefixes: {
    professional: ["official", "real", "the", "i_am", "mr", "this_is", "actual", "authentic", "meet"],
    tech: ["code", "dev", "cyber", "pixel", "stack", "bit", "algo", "logic", "script", "cloud", "terminal", "node"],
    gaming: ["alpha", "shadow", "apex", "vortex", "neon", "ghost", "toxic", "quantum", "blaze", "zod", "cipher"],
    casual: ["just", "hello", "hey", "its_me", "simply", "vibe", "chillin", "daily", "essentially"],
    creator: ["vlog", "lens", "stream", "edit", "capture", "studio", "hype", "creative", "buzz"],
    crypto_web3: ["meta", "chain", "block", "eth", "sol", "hash", "token", "mint", "gas"],
    entrepreneur: ["ceo", "founder", "venture", "build", "launch", "scale", "asset", "alpha_group"],
  },
  suffixes: {
    professional: ["hq", "inc", "pro", "hub", "studio", "associates", "ltd", "corp", "brand", "media"],
    tech: ["_dev", "codes", "tech", "io", "sys", "web", "git", "api", "ui", "ux", "ai", "labs", "stack"],
    gaming: ["gg", "yt", "gaming", "esports", "vibe", "plays", "mod", "arcade", "zone", "clan"],
    casual: ["x", "vibe", "world", "life", "space", "box", "loop", "den", "station"],
    creator: ["tv", "media", "vlogs", "films", "content", "network", "channel", "show"],
    crypto_web3: ["dao", "nft", "crypto", "wallet", "node", "swap", "vault"],
    entrepreneur: ["co", "ventures", "equity", "capital", "holdings", "biz", "growth"],
  },
};

function usernameGenerator(username, category) {
  if (!username || !category || !usernameAddons.prefixes[category]) return "";

  const cleanUsername = username.trim().toLowerCase().replace(/\s+/g, "");

  const prefixArray = usernameAddons.prefixes[category];
  const suffixArray = usernameAddons.suffixes[category];

  // Random distribution balance
  if (Math.random() < 0.5) {
    const randomIndex = Math.floor(Math.random() * prefixArray.length);
    return `${prefixArray[randomIndex]}${cleanUsername}`;
  } else {
    const randomIndex = Math.floor(Math.random() * suffixArray.length);
    return `${cleanUsername}${suffixArray[randomIndex]}`;
  }
}

// Running generations to verify stability
console.log("Tech Variant:", usernameGenerator("Jawwad Shah", "tech")); 
console.log("Gaming Variant:", usernameGenerator("Jawwad Shah", "gaming")); 
console.log("Professional Variant:", usernameGenerator("Jawwad Shah", "professional")); 

// Output (Will vary based on randomization):
// Tech Variant: codejawwadshah OR jawwadshah_dev
// Gaming Variant: alphajawwadshah OR jawwadshahgg
// Professional Variant: officialjawwadshah OR jawwadshahhq

// What I Learned:
// - Object-Driven Architecture: Organizing lookups inside nested dictionary matrices for hyper-scalable feature development.
// - Probability Token Handling: Applying strict pseudo-random float evaluations ('Math.random()') to build organic UX distributions.
// - Complex Space Stripping: Using global continuous RegEx modifiers ('/\s+/g') to clear all types of inline whitespace arrays.