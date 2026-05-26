import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(API_URL, config);

  return data;
};

export const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    API_URL,
    taskData,
    config
  );

  return data;
};

export const updateTask = async (
  id,
  taskData,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/${id}`,
    taskData,
    config
  );

  return data;
};

export const deleteTaskById = async (
  id,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.delete(
    `${API_URL}/${id}`,
    config
  );

  return data;
};