/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

export interface NotaFiscal {
  id: number;
  nomeFornecedor: string;
  cnpjFornecedor: string;
  municipioFornecedor: string;
  dataEmissao: string;
  valor: string;
}

export const fetchNotasFiscais = async (): Promise<NotaFiscal[]> => {
  const url = 'https://api.portaldatransparencia.gov.br/api-de-dados/notas-fiscais';
  const headers = {
    'Accept': '*/*',
    'chave-api-dados': '707532d2cd4eef27fdd5160dcef56995',
  };

  let allNotasFiscais: NotaFiscal[] = [];

  for (let pagina = 1; pagina <= 3; pagina++) {
    try {
      const params = {
        codigoOrgao: '26232',
        pagina: String(pagina),
      };

      const response: AxiosResponse<any[]> = await axios.get(url, {
        params,
        headers,
      });

      // Filtra os dados para retornar apenas os campos desejados
      const notasFiscais = response.data.map((nota: any) => ({
        id: nota.id,
        nomeFornecedor: nota.nomeFornecedor,
        cnpjFornecedor: nota.cnpjFornecedor,
        municipioFornecedor: nota.municipioFornecedor,
        dataEmissao: nota.dataEmissao,
        valor: nota.valorNotaFiscal,
      }));

      allNotasFiscais = [...allNotasFiscais, ...notasFiscais];
    } catch (error) {
      console.error(`Erro ao buscar notas fiscais na página ${pagina}:`, error);
      throw error;
    }
  }

  return allNotasFiscais;
};

