let { instrutores, identificadorInstrutor } = require('../dados/bancodedados')

const listarInstrutores = (req, res) => {
    return res.json(instrutores)
}

const obterInstrutor = (req, res) => {
    let { id } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    })

    if (!instrutor) {
        return res.status(404).json({ propriedade: "instrutor não encontrado" });
    } else {
        return res.json(instrutor)
    }

}

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório para essa solicitação' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o email é obrigatório para essa solicitação' })
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor)
    return res.status(201).json(instrutor)

}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório para essa solicitação' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o email é obrigatório para essa solicitação' })
    }

    if (!status) {
        return res.status(400).json({ mensagem: 'o status é obrigatório para essa solicitação' })
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    })

    if (!instrutor) {
        return res.status(404).json({ propriedade: "instrutor não encontrado" });
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send("instrutor atualizado");
}

const atualizarStatusInstrutor = (req, res) => {
    let { id } = req.params;
    const { status } = req.body

    if (status === "") {
        return res.status(400).json({ mensagem: 'o status é obrigatório para essa solicitação' })
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    })

    if (!instrutor) {
        return res.status(404).json({ propriedade: "instrutor não encontrado" });
    }

    instrutor.status = status;

    return res.status(204).send("instrutor atualizado");

}

const excluirInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não foi encontrado" })
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    })

    return res.status(204).send();
}

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
}