// Coesão procedural
// Associa elementos de acordo com seus relacionamentos procedurais ou algorítmicos
// Um módulo procedural depende muito da aplicação sendo tratada
// • Junto com a aplicação, o módulo parece razoável
// • Sem este contexto, o módulo parece estranho e muito difícil de entender
// Não pode entender o módulo sem entender o programa e as condições que existem
// quando o módulo é chamado 

// Função para criar um novo pedido
function criarPedido(produto: string, quantidade: number) {
    // Lógica para criar o pedido e atualizar o estoque
    console.log(`Pedido criado para ${quantidade} unidades de ${produto}`);
  }
  
  function calcularTotal(precoUnitario: number, quantidade: number): number {
    return precoUnitario * quantidade;
  }
  
  function processarPagamento(total: number, metodoPagamento: string) {
    // Lógica para processar o pagamento
    console.log(`Pagamento de ${total} realizado via ${metodoPagamento}`);
  }
  
  function enviarPedido(enderecoEntrega: string) {
    // Lógica para programar a entrega
    console.log(`Pedido enviado para ${enderecoEntrega}`);
  }
  
  const produto = 'Camisa';
  const quantidade = 3;
  const precoUnitario = 20;
  
  criarPedido(produto, quantidade);
  const total = calcularTotal(precoUnitario, quantidade);
  processarPagamento(total, 'Cartão de Crédito');
  enviarPedido('123 Rua Principal');
  