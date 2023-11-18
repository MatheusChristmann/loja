import { db } from "../db.js";

export const getClientes = (_, res) => {
    const query = "SELECT * FROM cliente";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addCliente = (req, res) => {
    const q ="INSERT INTO cliente('nome', 'data_nascimento', 'telefone', 'email') VALUES(?)";

    const values = [
        req.body.nome,
        req.body.data_nascimento,
        req.body.telefone,
        req.body.email,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Cliente inserido com sucesso!");
    });
};

export const updateCliente = (req, res) => {
    const q = "UPDATE cliente SET 'nome' = ?, 'data_nascimento' = ?, 'telefone' = ?, 'email' = ? WHERE 'id' = ?";

    const values = [
        req.body.nome,
        req.body.data_nascimento,
        req.body.telefone,
        req.body.email,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Cliente atualizado com sucesso!");
    });
};

export const deleteCliente = (req, res) => {
    const q = "DELETE FROM cliente WHERE 'id' = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Cliente deletado com sucesso!");
    });
};