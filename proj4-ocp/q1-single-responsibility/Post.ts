import { Autor } from "./Autor";
import { RepositorioDePosts } from "./RepositorioDePosts";

export class Post {
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: Date;
    private quantidadeDeLikes: number;

    constructor(id: number, texto: string, autor: Autor, data: Date) {
      this.id = id;
      this.texto = texto;
      this.autor = autor;
      this.data = new Date(data.getTime());
      this.quantidadeDeLikes = 0;
    }

    public getId(): number {
      return this.id;
    }

    getTexto(): string {
      return this.texto;
    }

    getAutor(): Autor {
      return this.autor;
    }

    getData(): Date {
      return new Date(this.data.getTime());
    }

    getQuantidadeDeLikes(): number {
      return this.quantidadeDeLikes;
    }

  }