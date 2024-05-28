Cadastro de usuários e manutenção de usuários


Cenário 1: Cadastro de usuários

GIVEN o usuário está na página de cadastro
WHEN ele preenche o campo "Nome" com "<nomePessoa>
AND preenche o campo "Email" com <pessoa@….>
AND preenche o campo "Senha" com <SenhaUsuário>
AND confirma a senha
AND clica no botão "Cadastrar"
THEN ele deve ver a mensagem "Cadastro realizado com sucesso"

Cenário 2: Atualizar informações

GIVEN que o usuário de email <email@...> está na tela de perfil
WHEN ele clica no campo de nome preenchido por <Nome do usuário>
AND atualiza para <nome atualizado>
AND clica no botão “atualizar informações”
THEN ele verá uma mensagem “atualizado com sucesso”

Cenário 3: Remoção de conta

Dado o usuário está logado e na página de configurações da conta
WHEN ele clica no botão "Deletar Conta"
AND confirma a deleção na janela de confirmação
THEN ele deve ver a mensagem "Conta deletada com sucesso"
AND o usuário deve ser redirecionado para a página inicial
AND os dados do usuário devem ser removidos do sistema


Cenário 1: Adicionar um novo recurso ou equipamento

GIVEN o administrador está na página de "gerenciamento de recursos"
WHEN o administrador seleciona a opção "Adicionar novo recurso"
AND o administrador preenche as informações do recurso (nome, descrição, quantidade)
AND o administrador confirma a adição
THEN o novo recurso está disponível no sistema
AND o sistema exibe uma mensagem de sucesso "Recurso adicionado com sucesso"

Cenário 2: Editar um recurso ou equipamento existente

GIVEN o administrador está na página de "gerenciamento de recursos"
AND existe um recurso chamado "<Recurso>" cadastrado no sistema
WHEN o administrador seleciona o recurso "<Recurso>" para edição
AND o administrador modifica as informações do recurso (nome, descrição, quantidade)
AND o administrador confirma as alterações
THENo recurso "<Recurso>" tem suas informações atualizadas no sistema
AND o sistema exibe uma mensagem de sucesso "Recurso atualizado com sucesso"
