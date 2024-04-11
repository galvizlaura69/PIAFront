import axios from 'axios';
import { API } from '../../config/piaApi';

const updateUser = async (user) => {
    try{
      const { data } = await axios.put(`${API}/users/${user.id}` , user);
      return data.data;
    }catch(error){
      return error.message;
    }

  };

  export default updateUser;