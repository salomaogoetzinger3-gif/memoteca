const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      return await response.data;
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },

  async criarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      return await response.data;
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return await response.data;
    } catch {
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(
        `${URL_BASE}/pensamentos/${pensamento.id}`,
        pensamento,
      );
      return await response.data;
    } catch {
      alert(
        "Ops, algo deu errado ao editar pensamento. Tente novamente mais tarde.",
      );
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch {
      alert(
        "Ops, algo deu errado ao excluir pensamento. Tente novamente mais tarde.",
      );
      throw error;
    }
  },
};

export default api;
