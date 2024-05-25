const mongoose = require('mongoose');

const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
];

connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@127.0.0.1:27018');

        const state = Number(mongoose.connection.readyState);

        console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db

    } catch (error) {
        console.log(">>> Error connection DB: ", error)
    }
}

module.exports = connection;