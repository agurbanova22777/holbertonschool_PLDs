//task 1
export function cleanTrips(trips) {
    // 7 of the 10 trips should survive
    return trips.filter(trip => trip.valid === true && trip.fare > 0);
  }

//task2
export function totalRevenue(trips) {
    // => 3.2
    return trips.reduce((sum, trip) => sum + trip.fare, 0);
  }

//task3
export function uniquePassengers(trips) {
    // => Set(4) { "AZ-1001", "AZ-1002", "AZ-1004", "AZ-1005" }
    return new Set(trips.map(trip => trip.cardId));
  }
   
  export function isBlocked(cardId, blacklist) {
    // isBlocked("AZ-1003", blacklist) => true
    const blacklistSet = new Set(blacklist);
    return blacklistSet.has(cardId);
  }  

//task4
export function revenueByStation(trips) {
    // => Map(3) {
    //      "Icherisheher" => 0.8,
    //      "Sahil"        => 1.2,
    //      "Nizami"       => 1.2
    //    }
    return trips.reduce((map, trip) => {
        if (map.has(trip.station)) {
            map.set(
                trip.station,
                map.get(trip.station) + trip.fare
            );
        } else {
            map.set(trip.station, trip.fare);
        }

        return map;
    }, new Map());
  }

//task5
export function createDeviceCache() {
    // return: { remember(device, status), recall(device), knows(device) }
    const cache = new WeakMap();

    return {
        remember(device, status) {
            cache.set(device, status);
        },

        recall(device) {
            return cache.get(device);
        },

        knows(device) {
            return cache.has(device);
        }
    };
  }

//task6
export function createProcessedRegistry() {
    // return: { markProcessed(trip), isProcessed(trip) }
    const processed = new WeakSet();

    return {
        markProcessed(trip) {
            processed.add(trip);
        },

        isProcessed(trip) {
            processed.has(trip)
        }
    };
  }

//task7
export function decodeCounter(packet) {
    // => { total: 146, busiestMinute: 9, activeMinutes: 8 }
    const total = packet.reduce((sum, passengers) => sum + passengers, 0);

    const activeMinutes = packet.filter(passengers => passengers > 0).length;

    const busiestMinute = packet.reduce(
        (maxIndex, passengers, index, array) => {
            return passengers > array[maxIndex] ? index : maxIndex;
        },
        0
    );

    return {
        total,
        busiestMinute,
        activeMinutes
    };
}


export function packCounter(numbers) {
    // plain array -> Uint8Array
    return new Uint8Array(numbers);
}
