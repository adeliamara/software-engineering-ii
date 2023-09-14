
class Usuario {
    private amigos: Array<Usuario>
    
    public adicionarAmigo(amigo: Usuario): void {
        this.amigos.push(amigo);
    }

}