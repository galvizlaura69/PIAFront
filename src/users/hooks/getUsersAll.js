import axios from 'axios';
import { API } from '../../config/piaApi';

const getUsersAll = async () => {
  try {
    const { data } = await axios.get(`${API}/users`);
    return  data.users;

  } catch (error) {
    return error.message;
  }
};

export default getUsersAll;