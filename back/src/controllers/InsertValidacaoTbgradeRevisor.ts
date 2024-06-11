import { Request, Response } from "express";
import pool from "./db";

class InsertOrUpdateValidacao {
  async insertOrUpdateValidacao(req: Request, res: Response) {
    try {
      const { id, cidade, validacao } = req.body;

      // Verificar se os dados existem na tabela correspondente à cidade
      const queryText = `SELECT * FROM tbgrade_atuacao_${cidade.toLowerCase()} WHERE id = $1`;
      const { rows } = await pool.query(queryText, [id]);

      if (rows.length === 1) {
        // Se os dados existirem e o ID pertencer à cidade especificada, atualize a coluna validacao
        const updateText = `UPDATE tbgrade_atuacao_${cidade.toLowerCase()} SET validacao = $1 WHERE id = $2`;
        await pool.query(updateText, [validacao, id]);
        return res
          .status(200)
          .json({ message: "Validação atualizada com sucesso." });
      } else {
        return res
          .status(403)
          .json({ error: "ID não pertence à cidade especificada." });
      }
    } catch (error) {
      console.error("Erro ao inserir ou atualizar validação:", error);
      return res
        .status(500)
        .json({ error: "Erro ao inserir ou atualizar validação." });
    }
  }
}

export default InsertOrUpdateValidacao;