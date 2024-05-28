Scenario: Visualização do Histórico de Reservas.
GIVEN o usuário "lipe" está na página inicial
AND "lipe" já realizou uma ou mais reserva
WHEN o usuário acessa a página de histórico de reservas
THEN o sistema exibe uma lista das reservas anteriores de "lipe"
AND cada reserva na lista contém as informações data, hora, sala reservada e status da reserva.

Scenario: Visualização do Histórico de Reservas sem reservas.
GIVEN o usuário "lipe" está na página inicial
AND "lipe" não realizou nenhuma reserva
WHEN o usuário acessa a página de histórico de reservas
THEN o sistema exibe uma mensagem informando que "lipe" não possui reservas anteriores.

Scenario: Visualização do Histórico de Reservas com erro.
GIVEN o usuário "lipe" está na página inicial
AND "lipe" já realizou uma ou mais reserva
WHEN o usuário acessa a página de histórico de reservas
AND o sistema não consegue recuperar as reservas de "lipe"
THEN o sistema exibe uma mensagem de erro informando que não foi possível recuperar as reservas anteriores de "lipe".