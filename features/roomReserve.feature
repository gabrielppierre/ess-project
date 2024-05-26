feature: reserva e manutenção de salas (reservar, atualizar e cancelar)
modificação para teste


Cenário 1: Reserva bem sucedida

    given que estou na página "reserva de salas"
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

Cenário 3: Cancelamento de reserva bem sucedida

    GIVEN  que estou na página “reserva de salas”
    AND estou logado como usuário “Gabriel Vasconcelos”
    AND vejo que a sala “D002” está reservada para o horário "13h-15h" na data "16/05/24" com “Aula extra de ESS” como atividade, reservada por “Gabriel Vasconcelos”
    WHEN eu escolho “Atualizar reserva” para a sala "D002" no horário "13h-15h" na data "16/05/24"
    AND seleciono “Cancelar Reserva”
    THEN eu volto para a página “reserva de salas”
    AND posso ver que a sala “D002” está disponível para o horário "13h-15h" na data "16/05/24" 

Cenário 4: Atualização de reserva bem sucedida

    GIVEN  que estou na página “reserva de salas”
    AND estou logado como usuário “Gabriel Vasconcelos”
    AND vejo que a sala “D002” está reservada para o horário "13h-15h" na data "16/05/24" com “Aula extra de ESS” como atividade, reservada por “Gabriel Vasconcelos”
    WHEN eu escolho “Atualizar reserva” para a sala "D002" no horário "13h-15h" na data "16/05/24"
    AND preencho “Aula de zumba” como atividade
    THEN eu volto para a página “reserva de salas”
    AND eu posso ver que a sala "D002" está reservada para o horário "13h-15h" na data "16/05/24" com a atividade “Aula de zumba”

Cenário 5: Atualização de reserva dados incompletos

    GIVEN  que estou na página “reserva de salas”
    AND estou logado como usuário “Gabriel Vasconcelos”
    AND vejo que a sala “D002” está reservada para o horário "13h-15h" na data "16/05/24" com “Aula extra de ESS” como atividade, reservada por “Gabriel Vasconcelos”
    WHEN eu escolho “Atualizar reserva” para a sala "D002" no horário "13h-15h" na data "16/05/24"
    AND eu deixo em branco a atividade a preencher
    THEN eu vejo uma mensagem de erro sobre a atividade estar inalterada 
    AND eu volto para a página “reserva de salas”
    AND eu posso ver que a sala "D002" continua reservada para o horário "13h-15h" na data "16/05/24" com a atividade “Aula extra de ESS”