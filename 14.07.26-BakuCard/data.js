export const trips = [
    // CLEAN trips (7)
    {
        cardId: "AZ-1001",
        station: "Icherisheher",
        fare: 0.5,
        valid: true
    },
    {
        cardId: "AZ-1002",
        station: "Icherisheher",
        fare: 0.3,
        valid: true
    },
    {
        cardId: "AZ-1004",
        station: "Sahil",
        fare: 0.7,
        valid: true
    },
    {
        cardId: "AZ-1005",
        station: "Sahil",
        fare: 0.5,
        valid: true
    },
    {
        cardId: "AZ-1001",
        station: "Nizami",
        fare: 0.6,
        valid: true
    },
    {
        cardId: "AZ-1002",
        station: "Nizami",
        fare: 0.6,
        valid: true
    },
    {
        cardId: "AZ-1004",
        station: "Sahil",
        fare: 0.4,
        valid: true
    },

    // DIRTY trips (3)
    {
        cardId: "AZ-1003",
        station: "Sahil",
        fare: 0.4,
        valid: false
    },
    {
        cardId: "AZ-1006",
        station: "Nizami",
        fare: -1,
        valid: true
    },
    {
        cardId: "AZ-1007",
        station: "Icherisheher",
        fare: 0,
        valid: true
    }
];

export const blacklist = [
    "AZ-1003",
    "AZ-1006"
];
