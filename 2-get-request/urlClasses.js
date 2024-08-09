import { URL } from "url";

// Example URL
const myURL = new URL("https://example.com:8000/pathname?name=JohnDoe#hash");

// Access different parts of the URL
console.log(myURL.href); // Full URL: 'https://example.com:8000/pathname?name=JohnDoe#hash'
console.log(myURL.origin); // Origin: 'https://example.com:8000'
console.log(myURL.protocol); // Protocol: 'https:'
console.log(myURL.host); // Host: 'example.com:8000'
console.log(myURL.hostname); // Hostname: 'example.com'
console.log(myURL.port); // Port: '8000'
console.log(myURL.pathname); // Pathname: '/pathname'
console.log(myURL.search); // Query string: '?name=JohnDoe'
console.log(myURL.hash); // Fragment (hash): '#hash'

// modifying URL
myURL.pathname = "/newpath";
myURL.search = "?newname=JaneDoe";

console.log(myURL.href); // 'https://example.com:8000/newpath?newname=JaneDoe#hash'

// Query Parameters
// Add query parameters
myURL.searchParams.append("age", "30");

// Get a query parameter
console.log(myURL.searchParams.get("name")); // 'JohnDoe'

// Check if a parameter exists
console.log(myURL.searchParams.has("name")); // true

// Delete a query parameter
myURL.searchParams.delete("name");

console.log(myURL.href); // 'https://example.com:8000/newpath?newname=JaneDoe&age=30#hash'

// Creating New URL
const newURL = new URL("/anotherpath", "https://example.com");

console.log(newURL.href); // 'https://example.com/anotherpath'
