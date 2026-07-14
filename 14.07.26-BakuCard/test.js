import {
    cleanTrips,
    totalRevenue,
    uniquePassengers,
    isBlocked,
    revenueByStation,
    createDeviceCache,
    createProcessedRegistry,
    decodeCounter,
    packCounter
} from "./pipeline.js";

import { trips, blacklist } from "./data.js";


// TASK 1
console.log("Clean trips:");
console.log(cleanTrips(trips));


// TASK 2
console.log("Total revenue:");
console.log(totalRevenue(cleanTrips(trips)));


// TASK 3
console.log("Unique passengers:");
console.log(uniquePassengers(cleanTrips(trips)));

console.log("Is blocked:");
console.log(isBlocked("AZ-1003", blacklist));


// TASK 4
console.log("Revenue by station:");
console.log(revenueByStation(cleanTrips(trips)));


// TASK 5
console.log("WeakMap cache:");

const cache = createDeviceCache();

const device = {
    id: "VLD-01"
};

cache.remember(device, "online");

console.log(cache.recall(device)); // online
console.log(cache.knows(device));  // true

console.log(cache.knows({ id: "VLD-02" })); // false


// TASK 6
console.log("WeakSet registry:");

const registry = createProcessedRegistry();

const trip = {
    id: 1
};

console.log(registry.isProcessed(trip)); // false

registry.markProcessed(trip);

console.log(registry.isProcessed(trip)); // true


// TASK 7
console.log("Typed Array:");

const packet = new Uint8Array([10, 20, 0, 50]);

console.log(decodeCounter(packet));

console.log(packCounter([10, 20, 300]));
