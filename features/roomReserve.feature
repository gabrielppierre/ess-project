feature: reserva e manutenção de salas (reservar, atualizar e cancelar)

Cenário 1: Reserva bem sucedida

GIVEN que estou na página "reserva de salas"
AND vejo que a sala "D002" está disponível para reserva no horário "13h-15h" na data "16/05/24"
WHEN eu escolho "Reservar sala" para a sala "D002" no horário "13h-15h" na data "16/05/24"
AND eu preencho “Breno Miranda” em professor associado, “Aula extra de ESS” em atividade
THEN eu ainda estou na página "reserva de salas"
AND eu posso ver que a sala "D002" está reservada para o horário "13h-15h" na data "16/05/24" com “Aula extra de ESS” como atividade

Cenário 2: Reserva com dados incompletos

GIVEN que estou na página "reserva de salas"
AND vejo que a sala "D002" está disponível para reserva no horário "13h-15h" na data "16/05/24"
WHEN eu escolho "Reservar sala" para a sala "D002" no horário "13h-15h" na data "16/05/24"
AND eu preencho apenas “Aula extra de ESS” em atividade
THEN eu ainda estou na página "reserva de salas"
AND eu vejo uma mensagem de "erro" relacionada a "reserva incompleta"
AND eu posso ver que a sala "D002" não está reservada para o horário "13h-15h" na data "16/05/24"

Cenário 3: Atualização de reserva bem sucedida

GIVEN  que estou na página “reserva de salas”
AND estou logado como usuário “Gabriel Vasconcelos”
AND vejo que a sala “D002” está reservada para o horário "13h-15h" na data "16/05/24" com “Aula extra de ESS” como atividade, reservada por “Gabriel Vasconcelos”
WHEN eu escolho “Atualizar reserva” para a sala "D002" no horário "13h-15h" na data "16/05/24"
AND seleciono “Cancelar Reserva”
THEN eu volto para a página “reserva de salas”
AND posso ver que a sala “D002” está disponível para o horário "13h-15h" na data "16/05/24" 
