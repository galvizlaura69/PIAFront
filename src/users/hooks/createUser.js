import axios from 'axios';
import { API, HEADERS } from '../../config/dummyapi';


  const createUser = async (payload) => {
    try{
    console.log(payload, 'payload');
    const { data } = await axios.post(`${API}/users`, payload);
    const users = data.data;
    console.log('response', data.data)
    return users;
    }catch(error){
      return error.message;
    }
  };

  export default createUser;