
export const fetchData = async () => {
  try {
    const response = await fetch('https://api.portaldatransparencia.gov.br/api-de-dados/servidores?orgaoServidorExercicio=26232&pagina=14', {
      method: 'GET', // Ou 'POST', 'PUT', etc., dependendo da sua necessidade
      headers: {
        'accept': '*/*',
        'Authorization': '707532d2cd4eef27fdd5160dcef56995', // Se precisar de autenticação
      },
    });


    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
};



