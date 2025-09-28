const Gasto = require("../models/Gasto");

async function listarGastos() {
    return await Gasto.find();
    
}

async function buscarGastoPorId(id) {
    return await Gasto.findById(id);
    
}

async function criarGasto({ descricao, valor, tipo, data }) {
    if(!descricao || !valor || !tipo || !data) {
        throw new Error("Preencha todos os campos!");
    }
const gasto = new Gasto({ descricao, valor, tipo, data });
return await gasto.save();
    
}

async function atualizarGasto(id, dados) {
    return await Gasto.findByIdAndUpdate(id, dados, { new: true });
    
}

async function deletarGasto(id) {
    return await Gasto.findByIdAndDelete(id);
    
}

async function calcularSaldo() {
    const gastos = await Gasto.find();
    const receitas = gastos.filter(g=> g.tipo ==="receita").reduce((acc,g)=> acc + g.valor, 0);
    const despesas = gastos.filter(g=> g.tipo ==='despesa').reduce((acc, g)=> acc + g.valor,0);
    return { receitas, despesas, saldo: receitas - despesas };

}

async function  filtrarPorDescricao(desc) {
    return await Gasto.find({ descricao: new RegExp(desc, "i")});
    
}

async function  filtrarPorData(data) {
    return await Gasto.find({ data });    

}

module.exports = {
    listarGastos,
    buscarGastoPorId,
    criarGasto,
    atualizarGasto,
    deletarGasto,
    calcularSaldo,
    filtrarPorDescricao,
    filtrarPorData

};