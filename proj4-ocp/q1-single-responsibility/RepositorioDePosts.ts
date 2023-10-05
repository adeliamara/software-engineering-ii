import fs from 'fs'
import { Post } from './Post';

class RepositorioDePosts {
  private static filePath: string = './arquivo.json';
  private static posts: Post[] = [];

  static adicionarPost(post: Post): void {
    RepositorioDePosts.carregarPosts();
    RepositorioDePosts.posts.push(post);
    RepositorioDePosts.salvarPosts();
  }

  static buscarPostPorId(id: number): Post | null {
    RepositorioDePosts.carregarPosts();
    let postEncontrado: Post | null = null;
    RepositorioDePosts.posts.forEach(post => {
      if (post.getId() === id) {
        postEncontrado = post;
      }
    });  
    return postEncontrado || null;
  }

  
  static buscarTodosPosts(): Post[] | undefined {
      RepositorioDePosts.carregarPosts();
      return this.posts;
  }

  static carregarPosts(): void {
    try {
      if (fs.existsSync(RepositorioDePosts.filePath)) {
        const data = fs.readFileSync(RepositorioDePosts.filePath, 'utf-8');
        RepositorioDePosts.posts = JSON.parse(data).map((postData: any) => {
          return new Post(
            postData.id,
            postData.texto,
            postData.autor,
            new Date(postData.data)
          );
        });
      }
    } catch (error) {
      console.error('Erro ao carregar os posts:', error);
    }
  }

  static salvarPosts(): void {
    try {
      fs.writeFileSync(RepositorioDePosts.filePath, JSON.stringify(RepositorioDePosts.posts), 'utf-8');
      console.log('Posts salvos com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar os posts:', error);
    }
  }
}

export { RepositorioDePosts };
