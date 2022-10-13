import axios from 'axios';
import useSWR, { mutate } from 'swr';

export const useEstate = () => useSWR(path);
export const createEstate = async (data) => {
  mutate(path, [...data], false);
  await axios(path, {
    method: 'POST',
    body: data,
  });
  mutate(path);
};

export const updateEstate = async (data) => {
  mutate(path, [...data], false);
  await axios(path, {
    method: 'PUT',
    body: data,
  });
  mutate(path);
};

export const deleteEstate = async (id) => {
  mutate(path, (estates) => estates.filter((e) => e.id !== id), false);
  await axios(path, {
    method: 'DELETE',
    body: { id: id },
  });
  mutate(path);
};
