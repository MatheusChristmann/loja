import { db } from "../db.js";

export const getClientes = (_, res) => {
    const query = "SELECT * FROM cliente";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}