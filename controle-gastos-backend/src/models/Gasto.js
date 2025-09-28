const mongoose = require("mongoose");

const GastoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    tipo: { type: String, enum: ["receita", "despesa"], required: true },
    data: { type: String, required: true }
}, { timestamps: true });

modole.exports = mongoose.model("Gasto, GastoSchema");