import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'https://json-server-reduxcurd.herokuapp.com/'
});

export default clienteAxios