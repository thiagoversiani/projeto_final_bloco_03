import axios from "axios";

const api = axios.create({
  baseURL: 'https://farmacia-ug0p.onrender.com/'
});

// Função para buscar dados (GET)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

// Função para cadastrar novos dados (POST)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// Função para atualizar dados existentes (PUT)
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

// Função para deletar dados por id (DELETE)
export const deletar = async (url: string) => {
  await api.delete(url);
};