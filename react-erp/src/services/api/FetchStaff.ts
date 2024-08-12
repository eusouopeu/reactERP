/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { ServidoresResponse } from '../models/ServidorModel';


//= FETCH SERVIDORES
export const fetchServidores = (): Promise<ServidoresResponse[]> => {
  const url = 'https://api.portaldatransparencia.gov.br/api-de-dados/servidores';
  const params = {
    orgaoServidorExercicio: '26232',
    pagina: '1'
  };

  return axios.get<ServidoresResponse[]>(url, {
    params: params,
    headers: {
      'Accept': '*/*',
      'chave-api-dados': '707532d2cd4eef27fdd5160dcef56995',
    },
  })
    .then((response: AxiosResponse<ServidoresResponse[]>) => response.data)
    .catch((error) => {
      console.error('Error fetching servidores:', error);
      throw error; // Propague o erro para que o chamador possa lidar com ele
    });
};


//= FETCH REMUNERAÇÂO
const fetchRemuneracao = (idServidorPensionista: number): Promise<string[]> => {
  const url = `https://api.portaldatransparencia.gov.br/api-de-dados/servidores/remuneracao`;
  const params = {
    id: idServidorPensionista,
    mesAno: '202403',
    pagina: '1'
  };

  return axios.get<string[]>(url, {
    params: params,
    headers: {
      'Accept': '*/*',
      'chave-api-dados': '707532d2cd4eef27fdd5160dcef56995',
    },
  })
    .then((response: AxiosResponse<any>) => response.data[0].remuneracoesDTO[0].rubricas[0].valor)
    .catch((error) => {
      console.error('Error fetching remuneracao data:', error);
      throw error;
    });
};

// Função principal para buscar e combinar dados
export const getServidoresComRemuneracao = (): Promise<any[]> => {
  return fetchServidores()
    .then((servidores: any[]) => {
      const promises = servidores.map((item: { servidor: any; }) => {
        const servidor = item.servidor;

        return fetchRemuneracao(servidor.idServidorAposentadoPensionista)
          .then((remuneracoes: string[]) => {
            if (remuneracoes.length > 0) {
              const remuneracaoBasicaBruta = remuneracoes[0];
              return {
                id: servidor.idServidorAposentadoPensionista,
                nome: servidor.pessoa.nome,
                cargo: servidor.funcao.descricaoFuncaoCargo,
                admissao: servidor.fichasCargoEfetivo?.dataIngressoOrgao || 'Não disponível',
                unidade: servidor.fichasCargoEfetivo?.uorgLotacao || 'Não disponível',
                salario: remuneracaoBasicaBruta
              };
            } else {
              return {
                idServidorPensionista: servidor.idServidorAposentadoPensionista,
                nome: servidor.pessoa.nome,
                cargo: servidor.funcao.descricaoFuncaoCargo,
                admissao: servidor.fichasCargoEfetivo?.dataIngressoOrgao || 'Não disponível',
                unidade: servidor.fichasCargoEfetivo?.uorgLotacao || 'Não disponível',
                salario: 'Não disponível'
              };
            }
          });
      });

      return Promise.all(promises);
    })
    .catch((error: any) => {
      console.error('Error combining data for all servidores:', error);
      throw error;
    });
};