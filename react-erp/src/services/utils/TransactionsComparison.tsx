/* eslint-disable @typescript-eslint/no-explicit-any */
// Importando os dados da equipe
import { transactionsData } from '../../data/transactionsData';

// Função para calcular o total gasto
const calculateTotalGasto = (transactionsData: Array<{ valorNotaFiscal: string }>): number => {
  return transactionsData.reduce((total, item) => {
    const valor = parseFloat(item.valorNotaFiscal.replace('.', '').replace(',', '.'));
    return total + valor;
  }, 0);
};

export const totalGastos = calculateTotalGasto(transactionsData);

// Função para calcular a média de gastos
const calculateMediaGastos = (transactionsData: Array<{ valorNotaFiscal: string }>): number => {
  const total = calculateTotalGasto(transactionsData);
  return transactionsData.length > 0 ? total / transactionsData.length : 0;
};

export const mediaGastos = calculateMediaGastos(transactionsData);

// Função para encontrar o fornecedor com o maior gasto
const fornecedorMaiorGasto = (transactionsData: Array<{ nomeFornecedor: string; valorNotaFiscal: string }>): { nomeFornecedor: string; valor: number } | null => {
  const fornecedor = transactionsData.reduce((max, item) => {
    const valor = parseFloat(item.valorNotaFiscal.replace('.', '').replace(',', '.'));
    if (valor > (max.valor || 0)) {
      return { nomeFornecedor: item.nomeFornecedor, valor };
    }
    return max;
  }, { nomeFornecedor: '', valor: 0 });

  return fornecedor.valor > 0 ? fornecedor : null;
};

export const maiorGasto = fornecedorMaiorGasto(transactionsData);

// Função para encontrar o município com mais transações
const municipioComMaisTransacoes = (transactionsData: Array<{ municipioFornecedor: string }>): { municipio: string; quantidade: number } | null => {
  const transacoesPorMunicipio = transactionsData.reduce((acc, item) => {
    acc[item.municipioFornecedor] = (acc[item.municipioFornecedor] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const municipioMaisTransacoes = Object.entries(transacoesPorMunicipio).reduce((max, [municipio, quantidade]) => {
    if (quantidade > max.quantidade) {
      return { municipio, quantidade };
    }
    return max;
  }, { municipio: '', quantidade: 0 });

  return municipioMaisTransacoes.quantidade > 0 ? municipioMaisTransacoes : null;
};

export const municipioModa = municipioComMaisTransacoes(transactionsData);

