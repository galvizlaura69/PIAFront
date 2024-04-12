import axios from 'axios';
import { API } from '../../config/piaApi';

const getDataSensorAll = async () => {
  try {
    const { data } = await axios.get(`${API}/sensorData`);
    return  data.sensorData;

  } catch (error) {
    return error.message;
  }
};

export default getDataSensorAll;