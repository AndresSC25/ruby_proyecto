import ReactOnRails from 'react-on-rails';
import PostsContainer from '../components/PostsContainer';
// Asegúrate de remover o comentar el registro de PostList si ya no lo usas directamente.
// import PostList from '../components/PostList';

ReactOnRails.register({
  PostsContainer,
  // PostList,
});
