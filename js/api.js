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
  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
      return await response.json();
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },
  async editarPensamento(pensamento) {
    try {
      const response = await fetch(
        `http://localhost:3000/pensamentos/${pensamento.id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(pensamento),
        },
      );
      return await response.json();
    } catch {
      alert(
        "Ops, algo deu errado ao editar pensamento. Tente novamente mais tarde.",
      );
      throw error;
    }
  },
};

export default api;
