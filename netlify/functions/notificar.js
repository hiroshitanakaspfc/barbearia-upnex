exports.handler = async (event) => {
  try {
    const d = JSON.parse(event.body || "{}");
    const chats = JSON.parse(process.env.TELEGRAM_CHATS || "{}");
    const chat = chats[d.barbeiro];
    const token = process.env.TELEGRAM_TOKEN;
    if (!token || !chat) return { statusCode: 200, body: "desligado" };
    const texto = `💈 Novo agendamento!\nCliente: ${String(d.cliente).slice(0, 80)} (${String(d.telefone).slice(0, 20)})\nServiço: ${String(d.servico).slice(0, 40)}\nDia: ${String(d.dia).split("-").reverse().join("/")} às ${String(d.hora).slice(0, 5)}`;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text: texto }),
    });
    return { statusCode: 200, body: "ok" };
  } catch (e) {
    return { statusCode: 200, body: "erro" };
  }
};
