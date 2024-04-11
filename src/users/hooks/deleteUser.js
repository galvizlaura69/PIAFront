import axios from 'axios';
import { API } from '../../config/piaApi';


  const deleteUser = async (id) => {
    try{
      const { data } = await axios.delete(`${API}/users/${id}`);
      const users = data.data;
      return users;
    }catch(error){
      return error.message;
    }

  };

  export default deleteUser;