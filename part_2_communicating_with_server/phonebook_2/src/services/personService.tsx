import axios from "axios";
import { IPerson } from "../styles";

const baseUrl = 'http://localhost:3001/persons'

const personService = {
  create: async (newPerson: IPerson) => {
    try {
      const response = await axios.post(baseUrl, newPerson);
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  },

  getAll: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }
}

export default personService