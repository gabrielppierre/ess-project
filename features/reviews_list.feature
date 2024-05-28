Scenario: Visualização da Lista de Reviews de uma sala.
GIVEN que o usuário "lipe" está na página de visualização de salas
AND existem reviews disponíveis para a sala "E122"
WHEN o usuário acessa a página da sala "E122"
AND navega até a seção de reviews da sala
THEN o sistema exibe uma lista dos reviews disponíveis para a sala "E122"
AND cada review na lista contém nome do usuário que deixou o review, a data do review e a classificação atribuída à sala.

Scenario: Visualização da Lista de Reviews de uma sala sem reviews
GIVEN que o usuário "lipe" está na página de visualização de salas
AND não existem reviews disponíveis para a sala "E123"
WHEN o usuário acessa a página da sala "E123"
AND navega até a seção de reviews da sala
THEN o sistema exibe uma mensagem informando que não há reviews disponíveis para a sala "E123"

Scenario: Filtragem de reviews
GIVEN que o usuário "lipe" está na página da sala "E122"
AND existem reviews disponíveis para a sala "E122"
WHEN o usuário navega até a seção de reviews da sala
AND filtra os reviews por classificação "5 estrelas"
THEN o sistema exibe uma lista dos reviews disponíveis para a sala "E122" que possuem classificação "5 estrelas"

Scenario: Adição de um novo review
GIVEN que o usuário "lipe" está na página da sala "E122"
WHEN o usuário navega até a seção de reviews da sala
AND preenche o formulário de adição de review com o texto "Ótima sala!" e a classificação "5 estrelas"
AND submete o formulário
THEN o sistema exibe uma mensagem informando que o review foi adicionado com sucesso
AND o sistema exibe o review adicionado na lista de reviews da sala "E122"

Scenario: Avaliação de um Review
GIVEN que o usuário "lipe" está na seção de reviews da sala "E122"
AND existe um review de "João" com o texto "Ótima sala!" e a classificação "5 estrelas"
WHEN o usuário clica em "Útil" no review de "João"
THEN o sistema exibe uma mensagem informando que o review de "João" foi avaliado como útil
AND incrementa o contador de avaliações úteis do review de "João" em 1