# 3. Aplique o princípio LSP à implementação abaixo de forma que persistência seja um atributo da segunda classe. Crie um exemplo real com o resultado da refatoração.

```java
import java.io.*;
public class Persistencia {
    public void salvar(String dados, String arquivo) throws IOException {
    try (FileWriter writer = new FileWriter(arquivo)) {
        writer.write(dados);
    }
}
}

public class PersistenciaJSON extends Persistencia {
    @Override
    public void salvar(String dados, String arquivo) throws IOException {
    if (!dados.startsWith("{")) {
        throw new
            IllegalArgumentException("Dados não estão em formato JSON.");
    }
    super.salvar(dados, arquivo);
}
}
```

# solução

```java
import java.io.*;

public class Persistencia {
    public void salvar(String dados, String arquivo) throws IOException {
        try (FileWriter writer = new FileWriter(arquivo)) {
            writer.write(dados);
        }
    }
}

public class PersistenciaJSON {
    public Persistencia persistencia;

    public PersistenciaJSON() {
        this.persistencia = new Persistencia();
    }

    public void salvar(String dados, String arquivo) throws IOException {
        if (!dados.startsWith("{")) {
            throw new IllegalArgumentException("Dados não estão em formato JSON.");
        }
        persistencia.salvar(dados, arquivo);
    }
}

```