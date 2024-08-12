/* eslint-disable @typescript-eslint/no-explicit-any */
// Importando os dados da equipe
import { staffData } from '../data/staffData';

// Função para converter a string de remuneração para número, considerando possíveis formatos
function parseRemuneracao(remuneracaoStr: string): number {
  return parseFloat(remuneracaoStr.replace(/\./g, '').replace(/,/g, '.'));
}

// Função para calcular as somas das remunerações
function somaSalarios(staffData: Array<{ [key: string]: any }>): {
  totalSum: number;
  professorSum: number;
  nonProfessorSum: number;
} {
  let totalSum = 0.0;
  let professorSum = 0.0;
  let nonProfessorSum = 0.0;

  staffData.forEach(item => {
    if (item['remuneracaoBasicaBruta'] != null) {
      const remuneration = parseRemuneracao(item['remuneracaoBasicaBruta'].toString());

      totalSum += remuneration;

      if (
        item['cargo'] != null &&
        item['cargo'].toString().toUpperCase().includes('PROFESSOR')
      ) {
        professorSum += remuneration;
      } else {
        nonProfessorSum += remuneration;
      }
    }
  });

  return {
    totalSum,
    professorSum,
    nonProfessorSum,
  };
}

// Calculando as somas
export const sumsIncome = somaSalarios(staffData);

// Função para calcular a porcentagem de renda dos professores e não-professores
function percentualSalarios(sums: {
  totalSum: number;
  professorSum: number;
  nonProfessorSum: number;
}): {
  professorPercentage: number;
  nonProfessorPercentage: number;
  totalPercentage: number;
} {
  const totalSum = sums.totalSum;

  if (totalSum === 0.0) {
    // Evita divisão por zero
    return {
      professorPercentage: 0.0,
      nonProfessorPercentage: 0.0,
      totalPercentage: 0.0,
    };
  }

  return {
    professorPercentage: (sums.professorSum / totalSum) * 100,
    nonProfessorPercentage: (sums.nonProfessorSum / totalSum) * 100,
    totalPercentage: 100.0, // O total sempre representa 100%
  };
}

// Calculando as porcentagens de renda
export const percentageIncome = percentualSalarios(sumsIncome);



// Função para calcular a média de remuneração total
const mediaSalariosTotal = (staffData: Array<{ remuneracaoBasicaBruta: string }>): number => {
  if (staffData.length === 0) return 0.0;

  const somaRemuneracao = staffData.reduce((sum, item) => {
    const remuneracao = parseRemuneracao(item.remuneracaoBasicaBruta);
    return sum + remuneracao;
  }, 0);

  return somaRemuneracao / staffData.length;
};

export const mediaSalTotal = mediaSalariosTotal(staffData);

// Função para calcular a média de remuneração de professores
const mediaSalariosProfs = (staffData: Array<{ cargo: string; remuneracaoBasicaBruta: string }>): number => {
  const workers = staffData.filter(item =>
    item.cargo.toUpperCase().includes('PROFESSOR')
  );

  if (workers.length === 0) return 0.0;

  const somaRemuneracao = workers.reduce((sum, item) => {
    const remuneracao = parseRemuneracao(item.remuneracaoBasicaBruta);
    return sum + remuneracao;
  }, 0);

  return somaRemuneracao / workers.length;
};

export const mediaSalProfs = mediaSalariosProfs(staffData);

// Função para calcular a média de remuneração de não professores
export const mediaSalariosTAs = (staffData: Array<{ cargo: string; remuneracaoBasicaBruta: string }>): number => {
  const workers = staffData.filter(item =>
    item.cargo.toUpperCase().includes('ASSISTENTE')
  );

  if (workers.length === 0) return 0.0;

  const somaRemuneracao = workers.reduce((sum, item) => {
    const remuneracao = parseRemuneracao(item.remuneracaoBasicaBruta);
    return sum + remuneracao;
  }, 0);

  return somaRemuneracao / workers.length;
};

export const mediaSalTAs = mediaSalariosTAs(staffData);
