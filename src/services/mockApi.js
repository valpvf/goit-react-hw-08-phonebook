import axios from 'axios';

axios.defaults.baseURL = 'https://6466a9152ea3cae8dc1c0dce.mockapi.io/contacts';

export const addContactApi = async contact => {
  return await axios.post('contacts', contact).then(res => {
    const { data } = res;
    return data;
  });
};

export const getContactApi = async () => {
  return await axios.get('contacts').then(res => {
    const { data } = res;
    return data;
  });
};

export const removeContactApi = async id => {
  return await axios.delete(`contacts/${id}`).then(res => res.data);
};
