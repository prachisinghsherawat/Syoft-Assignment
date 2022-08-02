const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Prachi:prachi_123@cluster0.o9cs6.mongodb.net/students?retryWrites=true&w=majority"
    )
}

module.exports = connect;