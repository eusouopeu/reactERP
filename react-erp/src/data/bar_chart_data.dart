// import 'package:erp_edro/models/bar_chart_model.dart';
// import 'package:erp_edro/models/chart_model.dart';
// import 'package:erp_edro/data/staff_data.dart';
// import 'package:erp_edro/utils/average_income.dart';
// import 'package:flutter/material.dart';

// final avgTotal = avgIncomeTotal(staffData);
// final avgProf = avgIncome(staffData);
// final avgNotProf = avgIncomeNot(staffData);

// class AvgIncomeBarChartData {
//   final data = [
//     BarChartModel(
//         title: "Média de salários",
//         color: Colors.blue.shade900,
//         chart: [
//           ChartModel(x: 0, y: avgProf),
//           ChartModel(x: 1, y: avgNotProf),
//           ChartModel(x: 2, y: avgTotal),
//         ]),
//   ];

//   final label = ['Profs.', 'TAs', 'Total'];
// }

// class LBarChartData {
//   final data = [
//     BarChartModel(title: "Média de salários", color: Color(0xFFFEB95A), chart: [
//       ChartModel(x: 0, y: avgTotal),
//       ChartModel(x: 1, y: avgProf),
//       ChartModel(x: 2, y: avgNotProf),
//     ]),
//     const BarChartModel(title: "Nutrition", color: Color(0xFFF2C8ED), chart: [
//       ChartModel(x: 0, y: 8),
//       ChartModel(x: 1, y: 10),
//       ChartModel(x: 2, y: 9),
//       ChartModel(x: 3, y: 6),
//       ChartModel(x: 4, y: 6),
//       ChartModel(x: 5, y: 7),
//     ]),
//     const BarChartModel(
//         title: "Hydration Level",
//         color: Color(0xFF20AEF3),
//         chart: [
//           ChartModel(x: 0, y: 7),
//           ChartModel(x: 1, y: 10),
//           ChartModel(x: 2, y: 7),
//           ChartModel(x: 3, y: 4),
//           ChartModel(x: 4, y: 4),
//           ChartModel(x: 5, y: 10),
//         ]),
//   ];

//   final label = ['M', 'T', 'W', 'T', 'F', 'S'];
// }
