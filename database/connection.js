const mongoose = require('mongoose');
module.exports = async () => {
    try {
        const dbUrl = process.env.DB_URL;
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`DB ${dbUrl} connected successfully`)
    } catch (error) {
        console.error(error);
        throw error;
    }
};
