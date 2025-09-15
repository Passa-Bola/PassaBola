
// Lista de usuários (substitui users.json)
const users = [
  { user: "alexavier", password: "ale123", name: "Ale Xavier" }
];

module.exports = async function handler(req, res) {
  try {
    // Import dinâmico do uuid
    const { v4: uuidv4 } = await import("uuid");

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido" });
    }

    const { user, password } = req.body;

    if (!user || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    const foundUser = users.find(u => u.user === user && u.password === password);

    if (!foundUser) {
      return res.status(401).json({ error: "Usuário ou senha incorretos." });
    }

    const token = uuidv4();

    return res.status(200).json({ message: "Login realizado com sucesso!", token, user: foundUser });

  } catch (err) {
    console.error("Erro na função login:", err);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};