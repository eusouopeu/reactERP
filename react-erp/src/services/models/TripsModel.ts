export interface TripModelHeader {
  id: keyof TripModel
  numeric: boolean
  disablePadding: boolean
  label: string
}

export interface TripModel {
  id: number;
  viagem: {
    motivo: string;
  }
  situacao: string;
  beneficiario: {
    nome: string;
    cpfFormatado: string;
  };
  cargo: {
    descricao: string;
  };
  unidadeGestoraResponsavel: {
    codigo: string;
    nome: string;
  };
  dataInicioAfastamento: string;
  dataFimAfastamento: string;
  valorTotalDiarias: number;
  valorTotalPassagens: number;
  valorTotalViagem: number;
}