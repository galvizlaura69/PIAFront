import axios from 'axios';
import { API, HEADERS } from '../../config/dummyapi';
const getUserId = async (id) => {


  try {
    const { data } = await axios.get(`${API}/users/${id}`, {
      headers: HEADERS,
    });
    const user = data.user;
    return user;
  } catch (error) {
    return error.message;
  }

};

export default getUserId;