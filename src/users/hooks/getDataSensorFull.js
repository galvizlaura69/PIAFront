import axios from 'axios';
import { API } from '../../config/piaApi';

const getDataSensorFull = async ({date}) => {
  try {
    const { data } = await axios.get(`${API}/sensorDataFull?date=${date}`);
    return data.sensorData;

  } catch (error) {
    return error.message;
  }
};

export default getDataSensorFull;
