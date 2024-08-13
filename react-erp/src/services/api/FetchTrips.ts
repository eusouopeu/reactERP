import axios, { AxiosResponse } from 'axios';
import { TripModel } from '../models/TripsModel';

export const fetchTrips = (): Promise<TripModel[]> => {
  const url = 'https://api.portaldatransparencia.gov.br/api-de-dados/viagens';
  const params = {
    dataIdaDe: '01/05/2024',
    dataIdaAte: '01/06/2024',
    dataRetornoDe: '01/06/2024',
    dataRetornoAte: '01/07/2024',
    codigoOrgao: '26232',
    pagina: '1'
  };

  return axios.get<TripModel[]>(url, {
    params,
    headers: {
      'Accept': '*/*',
      'chave-api-dados': '707532d2cd4eef27fdd5160dcef56995',
    },
  })
    .then((response: AxiosResponse<TripModel[]>) => response.data)
    .catch((error) => {
      console.error('Erro ao buscar dados das viagens:', error);
      throw error;
    });
};
