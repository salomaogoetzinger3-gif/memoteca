const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },

  async buscarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },
};

export default api;
