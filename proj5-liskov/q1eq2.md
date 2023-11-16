# Por que o uso do nome próprio Liskov?

Esse princípio foi escrito por Barbara Liskov em 1988. Ela dá uma definição do princípio em uma palestra em que descreve as condições que devem ser atendidas para que um subtitpo possa substituir seu tipo.

# Qual a principal imagem relacionada ao princípio e qual a explicação sobre ela?

O Princípio de Substituição de Liskov, representado de maneira visual pelas bonecas russas, fundamenta a ideia de que uma subclasse deve ser substituída por sua classe base sem causar impactos no funcionamento do programa. Essa metáfora visual fornece uma explicação intuitiva para esse princípio, onde a boneca base representa o tipo genérico e as bonecas subsequentes, as classes derivadas.

Ao aplicar esse princípio, a primeira condição essencial é que uma subclasse possa ser substituída por sua classe base, mantendo-se as expectativas originais do programa. Nesse contexto, as bonecas filhas têm a liberdade de incorporar mais detalhes ou comportamentos específicos, mas não devem violar as expectativas determinadas pela classe base.

No que diz respeito às pré-condições, representadas pela forma específica da boneca, isso significa que, ao substituir uma instância da classe base por uma subclasse, a condição inicial (pré-condição) relacionada à forma específica deve ser preservada ou, no mínimo , não será mais restritivo. Em outras palavras, uma subclasse não pode importar pré-condições mais rigorosas do que uma classe base.

Quanto às pós-condições, simbolizadas pelo ato de abrir uma boneca e encontrar uma única boneca menor, a aplicação do Princípio de Liskov implica que, ao substituir a instância da classe base por uma subclasse, a condição final (pós-condição) deve ser mantida ou fortalecida. Ou seja, as subclasses não podem enfraquecer as garantias condicionais pela classe base.

Portanto, ao aderir ao Princípio de Substituição de Liskov com as bonecas russas, garantimos que a classificação de classes seja coesa, consistente e que as substituições de objetos mais específicos por objetos mais genéricos não causem surpresas indesejadas, mantendo a integridade do pré e pós- condições.