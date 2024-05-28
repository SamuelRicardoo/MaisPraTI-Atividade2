let hoteis = [];
let reservas = [];
let proximoIdReserva = 1;

function adicionarHotel(id, nome, cidade, quartosTotais) {
  const hotel = { id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais, ocupacao: 0, avaliacoes: [] };
  hoteis.push(hotel);
}

function buscarHoteisPorCidade(cidade) {
  return hoteis.filter(hotel => hotel.cidade === cidade);
}

function fazerReserva(idHotel, nomeCliente) {
  const hotel = hoteis.find(h => h.id === idHotel);
  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }
  
  if (hotel.quartosDisponiveis === 0) {
    console.log("Não há quartos disponíveis neste hotel.");
    return;
  }

  const reserva = { idReserva: proximoIdReserva++, idHotel, nomeCliente, checkIn: false };
  reservas.push(reserva);
  hotel.quartosDisponiveis--;
  hotel.ocupacao++;
}

function fazerCheckIn(idReserva) {
  const reserva = reservas.find(r => r.idReserva === idReserva);
  if (!reserva) {
    console.log("Reserva não encontrada.");
    return;
  }

  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  if (hotel.quartosDisponiveis === 0) {
    console.log("Não há quartos disponíveis para check-in.");
    return;
  }

  reserva.checkIn = true;
}

function fazerCheckOut(idReserva) {
  const reserva = reservas.find(r => r.idReserva === idReserva);
  if (!reserva) {
    console.log("Reserva não encontrada.");
    return;
  }

  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  reserva.checkIn = false;
  hotel.quartosDisponiveis++;
  hotel.ocupacao--;
}

function listarReservas() {
  console.log("Reservas:");
  reservas.forEach(reserva => {
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    console.log(`- Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}, Check-in: ${reserva.checkIn ? 'Sim' : 'Não'}`);
  });
}

function gerarRelatorioOcupacao(idHotel) {
  const hotel = hoteis.find(h => h.id === idHotel);
  const ocupacao = (hotel.ocupacao / hotel.quartosTotais) * 100;
  console.log(`Ocupação do hotel ${hotel.nome} em ${hotel.cidade}: ${ocupacao.toFixed(2)}%`);
}

function avaliarHotel(idHotel, avaliacao) {
  const hotel = hoteis.find(h => h.id === idHotel);
  hotel.avaliacoes.push(avaliacao);
}

function todaAvaliacao(){
 console.log("Avaliações de todos os hotéis:");
 hoteis.forEach(hotel => {
    console.log(`Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
    console.log("Avaliações:");
    hotel.avaliacoes.forEach(avaliacao => {
        console.log(`- ${avaliacao}`);
    });
  console.log("-------------------------");
    });
}



// Hotel
adicionarHotel(1, "Hotel A", "São Paulo", 10);
adicionarHotel(2, "Hotel B", "Rio de Janeiro", 5);

//Reserva
fazerReserva(1, "José");
fazerReserva(1, "Maria");
fazerReserva(2, "João");
fazerReserva(1, "Ana");
fazerReserva(1, "Pedro");
fazerReserva(2, "Mariana");

fazerCheckIn(1);
fazerCheckOut(2)
fazerCheckIn(4); 
fazerCheckIn(5); 

gerarRelatorioOcupacao(1);

avaliarHotel(1, "Ótimo atendimento!");
avaliarHotel(2, "Ótimo atendimento!");

avaliarHotel(1, "Adorei!");
avaliarHotel(2, "Amei o atendimento!");

listarReservas();
todaAvaliacao();