import axios from "axios";
import { INewPerson } from "../styles";

const baseUrl = '/api/persons'

const personService = {
  create: async (newPerson: INewPerson) => {
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
  },

  delete: async (id: number) => {
    try {
      await axios.delete(`${baseUrl}/${id}`)
    } catch (error) {
      console.log('Error: ', error);
    }
  },

  update: async (id: number, name: string, number: string) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, { name, number })
      return response.data;
    } catch (error) {
      console.log(error);

    }
  }
}

export default personService