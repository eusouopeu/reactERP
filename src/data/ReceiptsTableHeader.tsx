// import { TableColumnsType } from "antd";
// import { ReceiptModel } from "../services/models/ReceiptsModel";


// export const receiptsTableHeader: TableColumnsType<ReceiptModel> = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     key: 'id',
//     showSorterTooltip: {
//       target: 'full-header'
//     },
//     sortDirections: ['ascend', 'descend', 'ascend'],
//     defaultSortOrder: 'ascend',
//     sorter: {
//       compare: (a: ReceiptModel, b: ReceiptModel) => a.id - b.id,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'Fornecedor',
//     dataIndex: 'fornecedor',
//     key: 'fornecedor',
//     showSorterTooltip: {
//       target: 'full-header',
//     },
//     ...getColumnSearchProps('fornecedor'),
//   },
//   {
//     title: 'CNPJ',
//     dataIndex: 'cnpj',
//     key: 'cnpj',
//     sorter: (a: NotaFiscal, b: NotaFiscal) => a.cnpjFornecedor - b.cnpjFornecedor,
//   },
//   {
//     title: 'Data',
//     dataIndex: 'data',
//     key: 'data',
//     defaultSortOrder: 'descend',
//     sorter: (a: NotaFiscal, b: NotaFiscal) => a.dataEmissao - b.dataEmissao,
//   },
//   {
//     title: 'Valor',
//     dataIndex: 'valor',
//     key: 'valor',
//     defaultSortOrder: 'descend',
//     sorter: {
//       compare: (a: NotaFiscal, b: NotaFiscal) => a.valor - b.valor,
//       multiple: 2,
//     },
//   },
// ];