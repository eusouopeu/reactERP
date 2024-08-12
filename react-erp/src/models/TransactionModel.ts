export interface TransactionModelHeader {
  id: keyof FilteredTransactionModel
  numeric: boolean
  disablePadding: boolean
  label: string
}

export interface FilteredTransactionModel {
  id: number;
  fornecedor: string;
  cnpj: string;
  municipio: string;
  valor: number;
  data: string;
}

export interface RawTransactionModel {
  id: number,
  nomeFornecedor: string,
  cnpjFornecedor: string,
  municipioFornecedor: string,
  chaveNotaFiscal: string,
  valorNotaFiscal: string,
  dataEmissao: string,
}