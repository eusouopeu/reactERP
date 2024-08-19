// import React, { useEffect, useState } from 'react'
// import { fetchReceipts } from '../../../services/api/FetchReceipts'
// import { BarChart } from '@mui/x-charts';
// import ChartCard from '../../ChartCard';
// import { ReceiptModel } from '../../../services/models/ReceiptsModel';


// export default function CountyPieChart() {
//   const [receipts, setReceipts] = useState<ReceiptModel[]>([]);

//   useEffect(() => {
//     fetchReceipts().then((receipt) => {
//       setReceipts(receipt);
//     });
//   }, []);

// const data = receipts.map((transaction) => ({
//     x: transaction.fornecedor,
//     y: parseFloat(transaction.valor),
//   }));

//   return (
//     <ChartCard title="Valor das Notas Fiscais por Fornecedor">
//       <BarChart
//         width={600}
//         height={400}
//         series={[
//           {
//             label: 'Valor da Nota Fiscal (R$)',
//             data: data,
//           }
//         ]}
//         xAxis={[{ field: 'label', label: 'Fornecedor' }]}
//         yAxis={{ label: 'Valor da Nota Fiscal (R$)' }}
//         colors={['#36A2EB']}
//       />
//     </ChartCard>
//   );
// }