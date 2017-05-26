import axios from 'axios';
import endpoints from './endpoints';
const usersEndpoint = endpoints.typicode + '/users';

const UsersApi = {
  getAllUsers: axios.get(usersEndpoint).then(res => {
      //console.log(res);
      return res.data;
    }).catch(err => {
      //console.log(err);
      throw(err);
    })
};

export default UsersApi;
