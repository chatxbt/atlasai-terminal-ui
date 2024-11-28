import axios from "./config";

export const createRag = async (payload: NewRagSchema) =>
  axios.post("/rag/create", payload);

export const addDataSource = async (appId: string, payload: DataSource) =>
  axios.post(`/rag/add_source?appId=${appId}`, payload);

export const getDataSources = async (appId: string) =>
  axios.get(`/rag/${appId}/get_sources`);

export const deleteDataSource = async (appId: string, source_id: string) =>
  axios.get(`/rag/${appId}/delete_source/${source_id}`);

export const queryRag = async (appId: string, payload: RagQuery) =>
  axios.post(`/rag/${appId}/query`, payload);

export const chatRag = async (appId: string, payload: RagQuery) =>
  axios.post(`/rag/${appId}/chat`, payload);

export const searchRag = async (appId: string, payload: SearchRag) =>
  axios.post(`/rag/${appId}/search`, payload);
