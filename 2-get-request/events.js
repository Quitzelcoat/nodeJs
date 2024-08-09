// To Create events

import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();
/*

eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");
*/

// Example 2

eventEmitter.on("start", (number) => {
  console.log(`started ${number}`);
});
eventEmitter.emit("start", 23);

// Multiple arguments
eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit("start", 1, 100);
