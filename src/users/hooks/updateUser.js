import axios from 'axios';
import { API } from '../../config/dummyapi';

const updateUser = async (user) => {
  console.log(user, 'payload')
    try{
      const { data } = await axios.put(`${API}/users/${user.id}` , user);
      return data.data;
    }catch(error){
      return error.message;
    }

  };

  export default updateUser;