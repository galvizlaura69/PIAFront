import axios from 'axios';
import { API } from '../../config/dummyapi';

const getUsersAll = async () => {
  try {
    const { data } = await axios.get(`${API}/users`);
    return  data.users;

  } catch (error) {
    return error.message;
  }
};

export default getUsersAll;