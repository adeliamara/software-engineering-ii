package antes;

public class usuario {
    private List<Post> posts;
    private List<Comentario> comentarios;

    public void criarPost(String conteudo) {
        Post novoPost = new Post(conteudo);
        posts.add(novoPost);
    }

    public void criarComentario(String conteudo) {
        Comentario novoComentario = new Comentario(conteudo);
        comentarios.add(novoComentario);

    }

}
