import axios from 'axios';
import { API } from '../../config/piaApi';

const getDataSensorAll = async (page, pageNumber) => {
  try {
    const { data } = await axios.get(`${API}/sensorData`, {
      params: {
        page,
        pageNumber
      }
    });
    return data.sensorData;

  } catch (error) {
    return error.message;
  }
};

export default getDataSensorAll;
