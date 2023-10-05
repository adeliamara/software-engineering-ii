import { Autor } from './Autor';
import { Post } from './Post';
import { RepositorioDePosts } from './RepositorioDePosts';

const autor = new Autor(1, 'Autor Teste', 'autor@teste.com');

const post1 = new Post(1, 'Conteúdo do primeiro post de teste.', autor, new Date());
const post2 = new Post(2, 'Conteúdo do segundo post de teste.', autor, new Date());

RepositorioDePosts.adicionarPost(post1);
RepositorioDePosts.adicionarPost(post2);
console.log(RepositorioDePosts.buscarTodosPosts())

const idParaBuscar = 1;
const postEncontrado = RepositorioDePosts.buscarPostPorId(idParaBuscar);

if (postEncontrado) {
  console.log('Post encontrado:', postEncontrado);
} else {
  console.log(`Nenhum post encontrado com o ID ${idParaBuscar}.`);
}
