import * as fs from 'fs';

class Persistencia {
  salvar(dados: string, arquivo: string): void {
    try {
      fs.writeFileSync(arquivo, dados);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

class PersistenciaJSON extends Persistencia {
  salvar(dados: string, arquivo: string): void {
    if (!dados.startsWith("{")) {
      throw new Error("Dados não estão em formato JSON.");
    }
    super.salvar(dados, arquivo);
  }
}

const persistenciaJSON = new PersistenciaJSON();

try {
  persistenciaJSON.salvar('{"name": "John", "age": 30}', 'data.json');
  console.log('json1 save.');
  persistenciaJSON.salvar('"name": "John", "age": 30}', 'data.json');
  console.log('json2 save.');
} catch (error: any) {
  console.log('Error:', error);
}

  