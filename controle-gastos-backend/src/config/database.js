import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true,
            userUnifieldTopology: true,
        });
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error.message);
        process.exit(1);
    }
    
}

module.exports = connectDB;