// Coesão de comunicação
// Todas as operações de um módulo operam no mesmo conjunto de dados e/ou
// produzem o mesmo tipo de dado de saída
// Cura: isole cada elemento num módulo separado
// "Não deveria" ocorrer em sistemas OO usando polimorfismo (classes diferentes para
// fazer tratamentos diferentes nos dados) 

class MensagemService {
    enviarMensagem(usuario: string, mensagem: string) {
      // Lógica para enviar a mensagem
      console.log(`${usuario} enviou uma mensagem: ${mensagem}`);
    }
  }
  
  class UsuarioService {
    registrarUsuario(nome: string) {
      // Lógica para registrar um novo usuário
      console.log(`Usuário registrado: ${nome}`);
    }
  
    conectarUsuario(usuario: string) {
      // Lógica para conectar um usuário
      console.log(`Usuário conectado: ${usuario}`);
    }
  }
  
  class NotificacaoService {
    enviarNotificacao(destinatario: string, mensagem: string) {
      // Lógica para enviar uma notificação
      console.log(`Notificação para ${destinatario}: ${mensagem}`);
    }
  }
  
  const mensagemService = new MensagemService();
  const usuarioService = new UsuarioService();
  const notificacaoService = new NotificacaoService();
  
  const usuario = 'Alice';
  const mensagem = 'Olá, mundo!';
  
  usuarioService.registrarUsuario(usuario);
  usuarioService.conectarUsuario(usuario);
  mensagemService.enviarMensagem(usuario, mensagem);
  notificacaoService.enviarNotificacao(usuario, 'Você tem uma nova mensagem.');
  