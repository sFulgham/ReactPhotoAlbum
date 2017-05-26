import axios from 'axios';
import endpoints from './endpoints';
const albumsEndpoint = endpoints.typicode + '/albums?userId=';

const AlbumsApi = {
  getAllAlbums: function(userId){
    axios.get(albumsEndpoint + userId).then(res => {
      //console.log(res);
      return res.data;
    }).catch(err => {
      //console.log(err);
      throw(err);
    });
  }
};

export default AlbumsApi;
