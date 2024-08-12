import { TransactionModelHeader } from "../services/models/TransactionModel";

//= Header
export const transactionsHeader: readonly TransactionModelHeader[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'ID',
  },
  {
    id: 'data',
    numeric: true,
    disablePadding: false,
    label: 'Data',
  },
  {
    id: 'fornecedor',
    numeric: false,
    disablePadding: true,
    label: 'Fornecedor',
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: true,
    label: 'CNPJ',
  },
  {
    id: 'municipio',
    numeric: false,
    disablePadding: true,
    label: 'Município',
  },
  {
    id: 'valor',
    numeric: false,
    disablePadding: true,
    label: 'Valor',
  },
];
//= Body
export const transactionsData = [
  {
    "id": 2226,
    "nomeFornecedor": "AIR LIQUIDE BRASIL LTDA",
    "cnpjFornecedor": "00.331.788/0021-62",
    "municipioFornecedor": "SIMOES FILHO",
    "chaveNotaFiscal": "29211000331788002162552000001894211059057988",
    "valorNotaFiscal": "1.594,59",
    "dataEmissao": "29/10/2021",
  },
  {
    "id": 2233,
    "nomeFornecedor":
        "SITE MEDICA DIST. DE MAT. E MEDICAMENTOS HOSPITALAR LTDA",
    "cnpjFornecedor": "33.762.284/0001-02",
    "municipioFornecedor": "ANANINDEUA",
    "chaveNotaFiscal": "15211133762284000102550010000002751100002758",
    "valorNotaFiscal": "1.730,40",
    "dataEmissao": "10/11/2021",
  },
  {
    "id": 2293,
    "nomeFornecedor": "MEDTEST DIAG. COM. IMPOR DE MAT. MEDICOS",
    "cnpjFornecedor": "08.395.821/0001-86",
    "municipioFornecedor": "LAURO DE FREITAS",
    "chaveNotaFiscal": "29211008395821000186550010000619811155198772",
    "valorNotaFiscal": "15.440,00",
    "dataEmissao": "28/10/2021",
  },
  {
    "id": 2354,
    "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
    "cnpjFornecedor": "01.772.798/0006-67",
    "municipioFornecedor": "OSASCO",
    "chaveNotaFiscal": "35211101772798000667550010002022031017091090",
    "valorNotaFiscal": "3.200,00",
    "dataEmissao": "11/11/2021",
  },
  {
    "id": 2553,
    "nomeFornecedor": "JOHNSON JOHNSON BR ICPSLTDA",
    "cnpjFornecedor": "54.516.661/0080-05",
    "municipioFornecedor": "GUARULHOS",
    "chaveNotaFiscal": "35211154516661008005550010009822021413173362",
    "valorNotaFiscal": "9.812,88",
    "dataEmissao": "12/11/2021",
  },
  {
    "id": 3498,
    "nomeFornecedor": "BOSTON SCIENTIFIC DO BRASIL LTDA",
    "cnpjFornecedor": "01.513.946/0001-14",
    "municipioFornecedor": "SAO PAULO",
    "chaveNotaFiscal": "35211101513946000114550030024657301024569085",
    "valorNotaFiscal": "28.699,18",
    "dataEmissao": "19/11/2021",
  },
  {
    "id": 3598,
    "nomeFornecedor": "ALTAJAN COM DE PROD DE CONS EIRELLI",
    "cnpjFornecedor": "06.191.680/0001-54",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29211106191680000154550010000201771859834091",
    "valorNotaFiscal": "60,00",
    "dataEmissao": "20/11/2021",
  },
  {
    "id": 3765,
    "nomeFornecedor": "MEDICICOR COMERCIAL LTDA",
    "cnpjFornecedor": "02.068.375/0001-19",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29211102068375000119550020008313341240795530",
    "valorNotaFiscal": "3.300,00",
    "dataEmissao": "26/11/2021",
  },
  {
    "id": 3842,
    "nomeFornecedor": "ALTAJAN COM DE PROD DE CONS EIRELLI",
    "cnpjFornecedor": "06.191.680/0001-54",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29211106191680000154550010000202081797267723",
    "valorNotaFiscal": "600,00",
    "dataEmissao": "29/11/2021",
  },
  {
    "id": 3851,
    "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
    "cnpjFornecedor": "15.347.273/0001-84",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29211115347273000184550020000923021240758462",
    "valorNotaFiscal": "694,80",
    "dataEmissao": "29/11/2021",
  },
  {
    "id": 4481,
    "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
    "cnpjFornecedor": "04.086.552/0001-15",
    "municipioFornecedor": "BRASILIA",
    "chaveNotaFiscal": "53211204086552000115550010000171091540501415",
    "valorNotaFiscal": "0,40",
    "dataEmissao": "07/12/2021",
  },
  {
    "id": 4591,
    "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
    "cnpjFornecedor": "01.772.798/0006-67",
    "municipioFornecedor": "OSASCO",
    "chaveNotaFiscal": "35211201772798000667550020001157521017432650",
    "valorNotaFiscal": "2.400,00",
    "dataEmissao": "10/12/2021",
  },
  {
    "id": 4658,
    "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
    "cnpjFornecedor": "52.828.936/0001-09",
    "municipioFornecedor": "SAO JOSE DO RIO PRETO",
    "chaveNotaFiscal": "35211252828936000109550010008131331419649409",
    "valorNotaFiscal": "2.520,00",
    "dataEmissao": "13/12/2021",
  },
  {
    "id": 4857,
    "nomeFornecedor": "DEBRIN BRASIL LTDA. - ME",
    "cnpjFornecedor": "00.658.540/0001-67",
    "municipioFornecedor": "MOGI DAS CRUZES",
    "chaveNotaFiscal": "35211200658540000167550010000016411932113353",
    "valorNotaFiscal": "792,00",
    "dataEmissao": "16/12/2021",
  },
  {
    "id": 5036,
    "nomeFornecedor": "ÔNIX COMÉRCIO DE PRODUTOS ODONTOLÓGICOS EIRELI",
    "cnpjFornecedor": "09.376.051/0001-97",
    "municipioFornecedor": "RIO DE JANEIRO",
    "chaveNotaFiscal": "33211209376051000197550010000031761257360788",
    "valorNotaFiscal": "749,00",
    "dataEmissao": "22/12/2021",
  },
  {
    "id": 5105,
    
    
    "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
    "cnpjFornecedor": "01.772.798/0006-67",
    "municipioFornecedor": "OSASCO",
    "chaveNotaFiscal": "35211201772798000667550020001184511017613999",
    "valorNotaFiscal": "786,00",
    
    
    "dataEmissao": "27/12/2021",
    "numero": 118451,
    
  },
  {
    "id": 5178,
    
    
    "nomeFornecedor": "MEDICAL LIFE COMERCIO DE PRODUTOS HOSPITALARES EIRELI",
    "cnpjFornecedor": "14.361.780/0001-00",
    "municipioFornecedor": "TERESINA",
    "chaveNotaFiscal": "22211214361780000100550010000425131825715954",
    "valorNotaFiscal": "490,00",
    
    
    "dataEmissao": "30/12/2021",
    "numero": 42513,
    
  },
  {
    "id": 5211,
    
    
    "nomeFornecedor": "MEDTEST DIAG. COM. IMPOR DE MAT. MEDICOS",
    "cnpjFornecedor": "08.395.821/0001-86",
    "municipioFornecedor": "LAURO DE FREITAS",
    "chaveNotaFiscal": "29220108395821000186550010000632101316301873",
    "valorNotaFiscal": "1.752,18",
    
    
    "dataEmissao": "03/01/2022",
    "numero": 63210,
    
  },
  {
    "id": 5448,
    
    
    "nomeFornecedor": "PMH PRODUTOS MEDICOS HOSPITALARES LTDA",
    "cnpjFornecedor": "00.740.696/0001-92",
    "municipioFornecedor": "BRASILIA",
    "chaveNotaFiscal": "53220100740696000192550010003101921774368657",
    "valorNotaFiscal": "0,10",
    
    
    "dataEmissao": "13/01/2022",
    "numero": 310192,
    
  },
  {
    "id": 5728,
    
    
    "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
    "cnpjFornecedor": "01.772.798/0006-67",
    "municipioFornecedor": "OSASCO",
    "chaveNotaFiscal": "35220101772798000667550020001230361017902212",
    "valorNotaFiscal": "803,00",
    
    
    "dataEmissao": "24/01/2022",
    "numero": 123036,
    
  },
  {
    "id": 5780,
    
    
    "nomeFornecedor": "LABORATORIOS B.BRAUN S.A",
    "cnpjFornecedor": "31.673.254/0001-02",
    "municipioFornecedor": "SAO GONCALO",
    "chaveNotaFiscal": "33220131673254000102550000008912291335370029",
    "valorNotaFiscal": "100,00",
    
    
    "dataEmissao": "26/01/2022",
    "numero": 891229,
    
  },
  {
    "id": 5834,
    
    
    "nomeFornecedor": "BIOTRONIK COMERCIAL MÉDICA LTDA.",
    "cnpjFornecedor": "50.595.271/0001-05",
    "municipioFornecedor": "SÃO PAULO",
    "chaveNotaFiscal": "35220150595271000105550030010123661327819299",
    "valorNotaFiscal": "3.920,00",
    
    
    "dataEmissao": "28/01/2022",
    "numero": 1012366,
    
  },
  {
    "id": 6239,
    
    
    "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
    "cnpjFornecedor": "15.347.273/0001-84",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29220215347273000184550020000972191781005716",
    "valorNotaFiscal": "15.000,00",
    
    
    "dataEmissao": "10/02/2022",
    "numero": 97219,
    
  },
  {
    "id": 6264,
    
    
    "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
    "cnpjFornecedor": "15.347.273/0001-84",
    "municipioFornecedor": "SALVADOR",
    "chaveNotaFiscal": "29220215347273000184550020000972221492464210",
    "valorNotaFiscal": "989,00",
    
    
    "dataEmissao": "10/02/2022",
    "numero": 97222,
    
  },
  {
    "id": 6265,
    
    
    "nomeFornecedor": "PMH PRODUTOS MEDICOS HOSPITALARES LTDA",
    "cnpjFornecedor": "00.740.696/0001-92",
    "municipioFornecedor": "BRASILIA",
    "chaveNotaFiscal": "53220200740696000192550010003134811067072079",
    "valorNotaFiscal": "0,80",
    
    
    "dataEmissao": "10/02/2022",
    "numero": 313481,
    
  },
  {
    "id": 6274,
    
    
    "nomeFornecedor": "ABBOTT LABORATORIOS DO BRASIL LTDA",
    "cnpjFornecedor": "56.998.701/0032-12",
    "municipioFornecedor": "ITAPEVI",
    "chaveNotaFiscal": "35220256998701003212550010005605961021731339",
    "valorNotaFiscal": "16.402,28",
    
    
    "dataEmissao": "11/02/2022",
    "numero": 560596,
    
  },
  {
    "id": 6425,
    
    
    "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
    "cnpjFornecedor": "01.772.798/0006-67",
    "municipioFornecedor": "OSASCO",
    "chaveNotaFiscal": "35220201772798000667550020001271971018172881",
    "valorNotaFiscal": "27.232,60",
    
    
    "dataEmissao": "16/02/2022",
    "numero": 127197,
    
  },
  {
    "id": 102467,
    
    
    "nomeFornecedor": "EQUILIBRIO COMERC. DE DESC. LTDA",
    "cnpjFornecedor": "07.571.925/0001-31",
    "municipioFornecedor": "LAURO DE FREITAS",
    "chaveNotaFiscal": "29211107571925000131550010000173471000173487",
    "valorNotaFiscal": "625,80",
    
    
    "dataEmissao": "16/11/2021",
    "numero": 17347,
    
  },
  {
    "id": 102671,
    
    
    "nomeFornecedor": "GE HEALTHCARE DO BRASIL COM E SERV P/ EQUIP. MED HOSPIT LTDA",
    "cnpjFornecedor": "00.029.372/0003-02",
    "municipioFornecedor": "BARUERI",
    "chaveNotaFiscal": "35211100029372000302550010010053821100821241",
    "valorNotaFiscal": "2.360,29",
    
    
    "dataEmissao": "01/11/2021",
    "numero": 1005382,
    
  },
  {
    "id": 102979,
    
    
    "nomeFornecedor": "OMEGA PRODUTOS E SERVICOS EIRELI",
    "cnpjFornecedor": "31.354.105/0001-72",
    "municipioFornecedor": "INHUMAS",
    "chaveNotaFiscal": "52211131354105000172550010000006871199606509",
    "valorNotaFiscal": "3.060,00",
    
    
    "dataEmissao": "01/11/2021",
    "numero": 687,
    
  },
{
  "id": 104332,
  
  
  "nomeFornecedor": "THERMO FISHER S BRASIL - LOGISTICA",
  "cnpjFornecedor": "09.185.421/0001-09",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35211209185421000109550210000562651004248208",
  "valorNotaFiscal": "1.117,80",
  
  
  "dataEmissao": "02/12/2021",
  "numero": 56265,
  
  },
  {
  "id": 104713,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211201772798000667550020001149541017374286",
  "valorNotaFiscal": "5.670,20",
  
  
  "dataEmissao": "06/12/2021",
  "numero": 114954,
  
  },
  {
  "id": 104764,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211201772798000667550020001151731017388216",
  "valorNotaFiscal": "10.881,17",
  
  
  "dataEmissao": "07/12/2021",
  "numero": 115173,
  
  },
  {
  "id": 104974,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35211252828936000109550010008131681139572428",
  "valorNotaFiscal": "15.598,00",
  
  
  "dataEmissao": "13/12/2021",
  "numero": 813168,
  
  },
  {
  "id": 104975,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35211252828936000109550010008131001296848904",
  "valorNotaFiscal": "5.544,00",
  
  
  "dataEmissao": "13/12/2021",
  "numero": 813100,
  
  },
  {
  "id": 105168,
  
  
  "nomeFornecedor": "DIASSAY DIAGNOSTICOS COMERCIO DE ARTIGOS PARA LABO",
  "cnpjFornecedor": "07.619.041/0001-00",
  "municipioFornecedor": "BELO HORIZONTE",
  "chaveNotaFiscal": "31211207619041000100550010000147131999893627",
  "valorNotaFiscal": "83.712,00",
  
  
  "dataEmissao": "17/12/2021",
  "numero": 14713,
  
  },
  {
  "id": 105290,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35211252828936000109550010008139451696009760",
  "valorNotaFiscal": "800,00",
  
  
  "dataEmissao": "20/12/2021",
  "numero": 813945,
  
  },
  {
  "id": 105663,
  
  
  "nomeFornecedor": "AUTOSUTURE DO BRASIL LTDA",
  "cnpjFornecedor": "01.645.409/0003-90",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220101645409000390550020002464361017758052",
  "valorNotaFiscal": "2.034,50",
  
  
  "dataEmissao": "10/01/2022",
  "numero": 246436,
  
  },
  {
  "id": 105908,
  
  
  "nomeFornecedor": "EDITORA E GRAFICA 2020 LTDA",
  "cnpjFornecedor": "15.261.163/0001-03",
  "municipioFornecedor": "UBERLANDIA",
  "chaveNotaFiscal": "31220115261163000103550010000004641000885650",
  "valorNotaFiscal": "13.596,20",
  
  
  "dataEmissao": "19/01/2022",
  "numero": 464,
  
  },
  {
  "id": 105983,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220101772798000667550020001230281017901770",
  "valorNotaFiscal": "360,00",
  
  
  "dataEmissao": "24/01/2022",
  "numero": 123028,
  
  },
  {
  "id": 106105,
  
  
  "nomeFornecedor": "VIPMEDIC PRODUTOS MEDICO HOSPITALAR LTDA",
  "cnpjFornecedor": "07.038.163/0001-02",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220107038163000102550010001411431395200480",
  "valorNotaFiscal": "6.000,00",
  
  
  "dataEmissao": "28/01/2022",
  "numero": 141143,
  
  },
  {
  "id": 106235,
  
  
  "nomeFornecedor": "FLUKKA - FARMACIA DE MANIPULACAO LTDA",
  "cnpjFornecedor": "10.450.805/0001-90",
  "municipioFornecedor": "SAO BERNARDO DO CAMPO",
  "chaveNotaFiscal": "35220210450805000190550010000311501003115013",
  "valorNotaFiscal": "14.370,00",
  
  
  "dataEmissao": "01/02/2022",
  "numero": 31150,
  
  },
  {
  "id": 106256,
  
  
  "nomeFornecedor": "HYPER TECHNOLOGIES",
  "cnpjFornecedor": "40.689.972/0001-50",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220240689972000150550010000010861000010877",
  "valorNotaFiscal": "2.885,00",
  
  
  "dataEmissao": "02/02/2022",
  "numero": 1086,
  
  },
  {
  "id": 106419,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220201772798000667550020001259451018083127",
  "valorNotaFiscal": "60.900,00",
  
  
  "dataEmissao": "08/02/2022",
  "numero": 125945,
  
  },
  {
  "id": 106426,
  
  
  "nomeFornecedor": "FRESENIUS KABI BRASIL LTDA",
  "cnpjFornecedor": "49.324.221/0001-04",
  "municipioFornecedor": "BARUERI",
  "chaveNotaFiscal": "35220249324221000104550000016548301751657663",
  "valorNotaFiscal": "22.350,00",
  
  
  "dataEmissao": "07/02/2022",
  "numero": 1654830,
  
  },

  {
  "id": 106441,
  
  
  "nomeFornecedor": "DIASSAY DIAGNOSTICOS COMERCIO DE ARTIGOS PARA LABO",
  "cnpjFornecedor": "07.619.041/0001-00",
  "municipioFornecedor": "BELO HORIZONTE",
  "chaveNotaFiscal": "31220207619041000100550010000147201831571332",
  "valorNotaFiscal": "81.600,00",
  
  
  "dataEmissao": "09/02/2022",
  "numero": 14720,
  
  },
  {
  "id": 106543,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35220252828936000109550010008179261636856425",
  "valorNotaFiscal": "349,00",
  
  
  "dataEmissao": "11/02/2022",
  "numero": 817926,
  
  },
  {
  "id": 106675,
  
  
  "nomeFornecedor": "ABBOTT LABORATORIOS DO BRASIL LTDA",
  "cnpjFornecedor": "56.998.701/0032-12",
  "municipioFornecedor": "ITAPEVI",
  "chaveNotaFiscal": "35220256998701003212550010005609371021745446",
  "valorNotaFiscal": "1.174,67",
  
  
  "dataEmissao": "15/02/2022",
  "numero": 560937,
  
  },
  {
  "id": 106700,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220201772798000667550020001272291018174634",
  "valorNotaFiscal": "2.481,07",
  
  
  "dataEmissao": "16/02/2022",
  "numero": 127229,
  
  },
  {
  "id": 106741,
  
  
  "nomeFornecedor": "BOSTON SCIENTIFIC DO BRASIL LTDA",
  "cnpjFornecedor": "01.513.946/0001-14",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35220201513946000114550030025248851025247260",
  "valorNotaFiscal": "9.799,72",
  
  
  "dataEmissao": "16/02/2022",
  "numero": 2524885,
  
  },
  {
  "id": 202399,
  
  
  "nomeFornecedor": "GE HEALTHCARE DO BRASIL COM E SERV P/ EQUIP. MED HOSPIT LTDA",
  "cnpjFornecedor": "00.029.372/0003-02",
  "municipioFornecedor": "BARUERI",
  "chaveNotaFiscal": "35211100029372000302550010010091241100858718",
  "valorNotaFiscal": "2.730,03",
  
  
  "dataEmissao": "11/11/2021",
  "numero": 1009124,
  
  },
  {
  "id": 202542,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211004086552000115550010000162251747634420",
  "valorNotaFiscal": "7.050,00",
  
  
  "dataEmissao": "28/10/2021",
  "numero": 16225,
  
  },
  {
  "id": 202633,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211101772798000667550010002021841017090119",
  "valorNotaFiscal": "230,00",
  
  
  "dataEmissao": "11/11/2021",
  "numero": 202184,
  
  },
  {
  "id": 203475,
  
  
  "nomeFornecedor": "N T LUIZE EIRELI",
  "cnpjFornecedor": "93.577.427/0001-38",
  "municipioFornecedor": "SAO SEBASTIAO DO CAI",
  "chaveNotaFiscal": "43211193577427000138550010000191191800484357",
  "valorNotaFiscal": "158,50",
  
  
  "dataEmissao": "22/11/2021",
  "numero": 19119,
  
  },
  {
  "id": 204377,
  
  
  "nomeFornecedor": "VIPMEDIC PRODUTOS MEDICO HOSPITALAR LTDA",
  "cnpjFornecedor": "07.038.163/0001-02",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211107038163000102550010001378731413619036",
  "valorNotaFiscal": "2.000,00",
  
  
  "dataEmissao": "30/11/2021",
  "numero": 137873,
  
  },
  {
  "id": 204719,
  
  
  "nomeFornecedor": "BRAMED COMERCIO HOSPITALAR DO BRASIL LTDA",
  "cnpjFornecedor": "28.345.933/0001-30",
  "municipioFornecedor": "CARIACICA",
  "chaveNotaFiscal": "32211228345933000130550010000033041362089643",
  "valorNotaFiscal": "22.800,00",
  
  
  "dataEmissao": "13/12/2021",
  "numero": 3304,
  
  },
  {
  "id": 204823,
  
  
  "nomeFornecedor": "FRESENIUS MEDICAL CARE LTDA",
  "cnpjFornecedor": "01.440.590/0001-36",
  "municipioFornecedor": "JAGUARIUNA",
  "chaveNotaFiscal": "35211201440590000136550000016328441726716037",
  "valorNotaFiscal": "3.139,36",
  
  
  "dataEmissao": "15/12/2021",
  "numero": 1632844,
  
  },
  {
  "id": 204838,
  
  
  "nomeFornecedor": "E PIZOLATO PREPARACAO DE DOCUMENTOS E SERVICOS ESP",
  "cnpjFornecedor": "30.071.577/0001-55",
  "municipioFornecedor": "SAO CAETANO DO SUL",
  "chaveNotaFiscal": "35211230071577000155550010000113421417030280",
  "valorNotaFiscal": "3.972,88",
  
  
  "dataEmissao": "15/12/2021",
  "numero": 11342,
  
  },
  {
  "id": 204925,
  
  
  "nomeFornecedor": "FRESENIUS MEDICAL CARE LTDA",
  "cnpjFornecedor": "01.440.590/0001-36",
  "municipioFornecedor": "JAGUARIUNA",
  "chaveNotaFiscal": "35211201440590000136550000016337301477101038",
  "valorNotaFiscal": "3.139,36",
  
  
  "dataEmissao": "17/12/2021",
  "numero": 1633730,
  
  },
  {
  "id": 204981,
  
  
  "nomeFornecedor": "EDITORA CONTRACORRENTE LTDA - ME",
  "cnpjFornecedor": "22.120.667/0001-60",
  "municipioFornecedor": "AVARE",
  "chaveNotaFiscal": "35211222120667000160550010000155261000184039",
  "valorNotaFiscal": "2.785,75",
  
  
  "dataEmissao": "21/12/2021",
  "numero": 15526,
  
  },

  {
  "id": 205046,
  
  
  "nomeFornecedor": "LICEQ DO BRASIL - COMERCIO DE EQUIPAMENTOS LTDA",
  "cnpjFornecedor": "23.025.061/0001-09",
  "municipioFornecedor": "CURITIBA",
  "chaveNotaFiscal": "41211223025061000109550010000006011356575294",
  "valorNotaFiscal": "1.740,00",
  
  
  "dataEmissao": "22/12/2021",
  "numero": 601,
  
  },
  {
  "id": 205450,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220104086552000115550010000177661081011825",
  "valorNotaFiscal": "3,21",
  
  
  "dataEmissao": "11/01/2022",
  "numero": 17766,
  
  },
  {
  "id": 205453,
  
  
  "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
  "cnpjFornecedor": "15.347.273/0001-84",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220115347273000184550020000951291559083666",
  "valorNotaFiscal": "110.000,00",
  
  
  "dataEmissao": "11/01/2022",
  "numero": 95129,
  
  },
  {
  "id": 205744,
  
  
  "nomeFornecedor": "PMH PRODUTOS MEDICOS HOSPITALARES LTDA",
  "cnpjFornecedor": "00.740.696/0001-92",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220100740696000192550010003112521227233061",
  "valorNotaFiscal": "6.400,00",
  
  
  "dataEmissao": "24/01/2022",
  "numero": 311252,
  
  },
  {
  "id": 205893,
  
  
  "nomeFornecedor": "COMISSAO NACIONAL DE ENERGIA NUCLEAR - CNEN/SP",
  "cnpjFornecedor": "00.402.552/0005-50",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35220100402552000550550010006911411054713133",
  "valorNotaFiscal": "405,80",
  
  
  "dataEmissao": "28/01/2022",
  "numero": 691141,
  
  },
  {
  "id": 205907,
  
  
  "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
  "cnpjFornecedor": "15.347.273/0001-84",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220115347273000184550020000963251239205554",
  "valorNotaFiscal": "8.710,00",
  
  
  "dataEmissao": "31/01/2022",
  "numero": 96325,
  
  },
  {
  "id": 205946,
  
  
  "nomeFornecedor": "BOSTON SCIENTIFIC DO BRASIL LTDA",
  "cnpjFornecedor": "01.513.946/0001-14",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35220201513946000114550030025166491025154855",
  "valorNotaFiscal": "18.899,46",
  
  
  "dataEmissao": "02/02/2022",
  "numero": 2516649,
  
  },
  {
  "id": 206158,
  
  
  "nomeFornecedor": "DIAMED LATINO AMERICA S.A",
  "cnpjFornecedor": "71.015.853/0001-45",
  "municipioFornecedor": "LAGOA SANTA",
  "chaveNotaFiscal": "31220271015853000145550020001414861919245410",
  "valorNotaFiscal": "127,00",
  
  
  "dataEmissao": "08/02/2022",
  "numero": 141486,
  
  },
  {
  "id": 206193,
  
  
  "nomeFornecedor": "HYPER TECHNOLOGIES",
  "cnpjFornecedor": "40.689.972/0001-50",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220240689972000150550010000011661000011671",
  "valorNotaFiscal": "1.622,50",
  
  
  "dataEmissao": "07/02/2022",
  "numero": 1166,
  
  },
  {
  "id": 206222,
  
  
  "nomeFornecedor": "BRAVO CENTRO AUTOMOTIVO EIRELI",
  "cnpjFornecedor": "17.772.624/0001-20",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220217772624000120550010000022161876545674",
  "valorNotaFiscal": "220,00",
  
  
  "dataEmissao": "08/02/2022",
  "numero": 2216,
  
  },
  {
  "id": 206290,
  
  
  "nomeFornecedor": "VIPMEDIC PRODUTOS MEDICO HOSPITALAR LTDA",
  "cnpjFornecedor": "07.038.163/0001-02",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220207038163000102550010001418431141843039",
  "valorNotaFiscal": "756,00",
  
  
  "dataEmissao": "10/02/2022",
  "numero": 141843,
  
  },
  {
  "id": 206301,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220201772798000667550010002256181018121277",
  "valorNotaFiscal": "1.000,00",
  
  
  "dataEmissao": "10/02/2022",
  "numero": 225618,
  
  },
  {
  "id": 206314,
  
  
  "nomeFornecedor": "SCQ SOLUCOES LABORATORIAIS LTDA",
  "cnpjFornecedor": "71.841.456/0001-22",
  "municipioFornecedor": "SAO CARLOS",
  "chaveNotaFiscal": "35220271841456000122550010000383901944240920",
  "valorNotaFiscal": "331,60",
  
  
  "dataEmissao": "10/02/2022",
  "numero": 38390,
  
  },
  {
  "id": 206330,
  
  
  "nomeFornecedor": "LABORATORIOS B.BRAUN S.A.",
  "cnpjFornecedor": "31.673.254/0010-95",
  "municipioFornecedor": "SAO GONCALO",
  "chaveNotaFiscal": "33220231673254001095550000006448891889956511",
  "valorNotaFiscal": "35.000,00",
  
  
  "dataEmissao": "10/02/2022",
  "numero": 644889,
  
  },
  {
  "id": 206393,
  
  
  "nomeFornecedor": "VITAL MATERIAIS ESPECIAIS EIRELI",
  "cnpjFornecedor": "20.412.651/0001-04",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220220412651000104550010000221621199657308",
  "valorNotaFiscal": "5.364,00",
  
  
  "dataEmissao": "14/02/2022",
  "numero": 22162,
  
  },

  {
  "id": 206416,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220204086552000115550010000183281667344320",
  "valorNotaFiscal": "0,10",
  
  
  "dataEmissao": "14/02/2022",
  "numero": 18328,
  
  },
  {
  "id": 206448,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35220252828936000109550010008182061630350973",
  "valorNotaFiscal": "3.632,00",
  
  
  "dataEmissao": "15/02/2022",
  "numero": 818206,
  
  },
  {
  "id": 302172,
  
  
  "nomeFornecedor": "BECTON DICKINSON INDUSTRIAS CIRURGICAS LTDA.",
  "cnpjFornecedor": "21.551.379/0008-74",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211121551379000874550010006475111034582100",
  "valorNotaFiscal": "3.213,02",
  
  
  "dataEmissao": "12/11/2021",
  "numero": 647511,
  
  },
  {
  "id": 302507,
  
  
  "nomeFornecedor": "HYPER TECHNOLOGIES",
  "cnpjFornecedor": "40.689.972/0001-50",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211140689972000150550010000006791000006803",
  "valorNotaFiscal": "569,00",
  
  
  "dataEmissao": "16/11/2021",
  "numero": 679,
  
  },
  {
  "id": 302558,
  
  
  "nomeFornecedor": "CREMER S.A.",
  "cnpjFornecedor": "82.641.325/0021-61",
  "municipioFornecedor": "POUSO ALEGRE",
  "chaveNotaFiscal": "31211182641325002161550010003745911100033885",
  "valorNotaFiscal": "336,00",
  
  
  "dataEmissao": "03/11/2021",
  "numero": 374591,
  
  },
  {
  "id": 303353,
  
  
  "nomeFornecedor": "VIPMEDIC PRODUTOS MEDICO HOSPITALAR LTDA",
  "cnpjFornecedor": "07.038.163/0001-02",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211107038163000102550010001369381246488419",
  "valorNotaFiscal": "5.525,00",
  
  
  "dataEmissao": "18/11/2021",
  "numero": 136938,
  
  },
  {
  "id": 303451,
  
  
  "nomeFornecedor": "ESCRITA COMERCIO E SERVICOS LTDA",
  "cnpjFornecedor": "16.306.870/0001-23",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211116306870000123550010000744241417399108",
  "valorNotaFiscal": "5.780,00",
  
  
  "dataEmissao": "19/11/2021",
  "numero": 74424,
  
  },
  {
  "id": 303963,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211104086552000115550010000169581470688260",
  "valorNotaFiscal": "0,20",
  
  
  "dataEmissao": "29/11/2021",
  "numero": 16958,
  
  },
  {
  "id": 304443,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35211252828936000109550010008120431233994676",
  "valorNotaFiscal": "1.600,00",
  
  
  "dataEmissao": "01/12/2021",
  "numero": 812043,
  
  },
  {
  "id": 304458,
  
  
  "nomeFornecedor": "SCORPION INFORMATICA LTDA",
  "cnpjFornecedor": "04.567.265/0001-27",
  "municipioFornecedor": "CURITIBA",
  "chaveNotaFiscal": "41211204567265000127550010000095881873796334",
  "valorNotaFiscal": "544,43",
  
  
  "dataEmissao": "04/12/2021",
  "numero": 9588,
  
  },
  {
  "id": 304486,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211204086552000115550010000170491840307363",
  "valorNotaFiscal": "3.795,00",
  
  
  "dataEmissao": "06/12/2021",
  "numero": 17049,
  
  },
  {
  "id": 304543,
  
  
  "nomeFornecedor": "LABORATORIOS B.BRAUN S.A.",
  "cnpjFornecedor": "31.673.254/0010-95",
  "municipioFornecedor": "SAO GONCALO",
  "chaveNotaFiscal": "33211231673254001095550000006233081134276447",
  "valorNotaFiscal": "7.100,00",
  
  
  "dataEmissao": "07/12/2021",
  "numero": 623308,
  
  },
  {
  "id": 304895,
  
  
  "nomeFornecedor": "EMPRESA BRASIL DE COMUNICAÇÃO S.A - EBC",
  "cnpjFornecedor": "09.168.704/0001-42",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211209168704000142550010002509751072509756",
  "valorNotaFiscal": "350,06",
  
  
  "dataEmissao": "16/12/2021",
  "numero": 250975,
  
  },
  {
  "id": 304949,
  
  
  "nomeFornecedor": "MEDICICOR COMERCIAL LTDA",
  "cnpjFornecedor": "02.068.375/0001-19",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211202068375000119550020008334431279667921",
  "valorNotaFiscal": "157.520,17",
  
  
  "dataEmissao": "16/12/2021",
  "numero": 833443,
  
  },
  {
  "id": 305015,
  
  
  "nomeFornecedor": "BIOPLASMA PROD P/LAB. E CORRELATOS LTDA-EPP",
  "cnpjFornecedor": "04.086.552/0001-15",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211204086552000115550010000174201855126339",
  "valorNotaFiscal": "1.440,00",
  
  
  "dataEmissao": "20/12/2021",
  "numero": 17420,
  
  },

  {
  "id": 305171,
  
  
  "nomeFornecedor": "MEDICICOR COMERCIAL LTDA",
  "cnpjFornecedor": "02.068.375/0001-19",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211202068375000119550020008342171180180196",
  "valorNotaFiscal": "480,00",
  
  
  "dataEmissao": "23/12/2021",
  "numero": 834217,
  
  },
  {
  "id": 305521,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35220101772798000667550020001212031017765607",
  "valorNotaFiscal": "460,00",
  
  
  "dataEmissao": "10/01/2022",
  "numero": 121203,
  
  },
  {
  "id": 305746,
  
  
  "nomeFornecedor": "LABINBRAZ COMERCIAL LTDA.",
  "cnpjFornecedor": "73.008.682/0001-52",
  "municipioFornecedor": "SÃO PAULO",
  "chaveNotaFiscal": "35220173008682000152550000001810571244591362",
  "valorNotaFiscal": "1.020,00",
  
  
  "dataEmissao": "20/01/2022",
  "numero": 181057,
  
  },
  {
  "id": 305884,
  
  
  "nomeFornecedor": "MEDISIL MEDICAMENTOS LTDA",
  "cnpjFornecedor": "96.827.563/0001-27",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220196827563000127550000001127461000308793",
  "valorNotaFiscal": "40,00",
  
  
  "dataEmissao": "25/01/2022",
  "numero": 112746,
  
  },
  {
  "id": 305987,
  
  
  "nomeFornecedor": "MEDICICOR COMERCIAL LTDA",
  "cnpjFornecedor": "02.068.375/0001-19",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220102068375000119550020008377501140499141",
  "valorNotaFiscal": "3.992,00",
  
  
  "dataEmissao": "28/01/2022",
  "numero": 837750,
  
  },
  {
  "id": 306008,
  
  
  "nomeFornecedor": "MEDICICOR COMERCIAL LTDA",
  "cnpjFornecedor": "02.068.375/0001-19",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220102068375000119550020008378101478769087",
  "valorNotaFiscal": "1.523,98",
  
  
  "dataEmissao": "31/01/2022",
  "numero": 837810,
  
  },
  {
  "id": 306025,
  
  
  "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
  "cnpjFornecedor": "15.347.273/0001-84",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220115347273000184550020000963581712347161",
  "valorNotaFiscal": "11.685,00",
  
  
  "dataEmissao": "31/01/2022",
  "numero": 96358,
  
  },
  {
  "id": 306026,
  
  
  "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
  "cnpjFornecedor": "15.347.273/0001-84",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220115347273000184550020000963611974280094",
  "valorNotaFiscal": "1.250,00",
  
  
  "dataEmissao": "31/01/2022",
  "numero": 96361,
  
  },
  {
  "id": 306206,
  
  
  "nomeFornecedor": "HYPER TECHNOLOGIES",
  "cnpjFornecedor": "40.689.972/0001-50",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53220240689972000150550010000011571000011583",
  "valorNotaFiscal": "3.245,00",
  
  
  "dataEmissao": "04/02/2022",
  "numero": 1157,
  
  },
  {
  "id": 306214,
  
  
  "nomeFornecedor": "MERSE ARTIGOS PARA LABORATORIOS LTDA",
  "cnpjFornecedor": "68.877.752/0002-50",
  "municipioFornecedor": "DIAS D AVILA (BA)",
  "chaveNotaFiscal": "29220268877752000250550020000389891799448346",
  "valorNotaFiscal": "278,00",
  
  
  "dataEmissao": "07/02/2022",
  "numero": 38989,
  
  },
  {
  "id": 306266,
  
  
  "nomeFornecedor": "MEDISIL MEDICAMENTOS LTDA",
  "cnpjFornecedor": "96.827.563/0001-27",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29220296827563000127550000001133091000322357",
  "valorNotaFiscal": "22,20",
  
  
  "dataEmissao": "08/02/2022",
  "numero": 113309,
  
  },
  {
  "id": 306353,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35220252828936000109550010008179231667265320",
  "valorNotaFiscal": "4.372,30",
  
  
  "dataEmissao": "11/02/2022",
  "numero": 817923,
  
  },
  {
  "id": 402021,
  
  
  "nomeFornecedor": "WRAD COMERCIO HOSPITALAR LTDA",
  "cnpjFornecedor": "35.289.161/0001-21",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211135289161000121550010000000961119935285",
  "valorNotaFiscal": "1.285,20",
  
  
  "dataEmissao": "16/11/2021",
  "numero": 96,
  
  },
  {
  "id": 402240,
  
  
  "nomeFornecedor": "AIR LIQUIDE BRASIL LTDA",
  "cnpjFornecedor": "00.331.788/0021-62",
  "municipioFornecedor": "SIMOES FILHO",
  "chaveNotaFiscal": "29211100331788002162552000001897461733208441",
  "valorNotaFiscal": "271,53",
  
  
  "dataEmissao": "05/11/2021",
  "numero": 189746,
  
  },
  {
  "id": 402348,
  
  
  "nomeFornecedor": "QIAGEN BIOTECNOLOGIA BRASIL LTDA.",
  "cnpjFornecedor": "01.334.250/0003-92",
  "municipioFornecedor": "ITAPEVI",
  "chaveNotaFiscal": "35211101334250000392550010000946421208629187",
  "valorNotaFiscal": "3.125,40",
  
  
  "dataEmissao": "16/11/2021",
  "numero": 94642,
  
  },

  {
  "id": 402469,
  
  
  "nomeFornecedor": "CARDIOMEDH PRODUTOS MEDICOS E IMPORTACAO LTDA",
  "cnpjFornecedor": "07.666.057/0001-73",
  "municipioFornecedor": "ARACAJU",
  "chaveNotaFiscal": "28211107666057000173550010000858071477388783",
  "valorNotaFiscal": "4.334,64",
  
  
  "dataEmissao": "10/11/2021",
  "numero": 85807,
  
  },
  {
  "id": 402523,
  
  
  "nomeFornecedor": "DIVIMED COMERCIO DE PRODUTOS HOSPITALARES LTDA",
  "cnpjFornecedor": "02.421.679/0001-18",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211102421679000118550010000515861142148178",
  "valorNotaFiscal": "260,00",
  
  
  "dataEmissao": "08/11/2021",
  "numero": 51586,
  
  },
  {
  "id": 402717,
  
  
  "nomeFornecedor": "MOGAMI IMP. E EXP. LTDA",
  "cnpjFornecedor": "50.247.071/0001-61",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35211150247071000161550000003794891426086398",
  "valorNotaFiscal": "19.849,50",
  
  
  "dataEmissao": "03/11/2021",
  "numero": 379489,
  
  },
  {
  "id": 403453,
  
  
  "nomeFornecedor": "NADJA MARINA PIRES - ME",
  "cnpjFornecedor": "12.130.958/0001-86",
  "municipioFornecedor": "BRASILIA",
  "chaveNotaFiscal": "53211112130958000186550020000034351440024380",
  "valorNotaFiscal": "12.710,00",
  
  
  "dataEmissao": "19/11/2021",
  "numero": 3435,
  
  },
  {
  "id": 403479,
  
  
  "nomeFornecedor": "TADMEDICAL COMERCIO DE MATERIAL MEDICO LTDA EPP",
  "cnpjFornecedor": "15.347.273/0001-84",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211115347273000184550020000919131957794178",
  "valorNotaFiscal": "9.500,00",
  
  
  "dataEmissao": "24/11/2021",
  "numero": 91913,
  
  },
  {
  "id": 403485,
  
  
  "nomeFornecedor": "BIOTRADE PRODUTOS PARA LABORATORIOS LTDA",
  "cnpjFornecedor": "02.712.393/0001-91",
  "municipioFornecedor": "LAURO DE FREITAS",
  "chaveNotaFiscal": "29211102712393000191550550000454741281572566",
  "valorNotaFiscal": "356,40",
  
  
  "dataEmissao": "24/11/2021",
  "numero": 45474,
  
  },
  {
  "id": 403578,
  
  
  "nomeFornecedor": "RDA COMERCIO DE MATERIAIS ELETRICOS,HIDRAULICOS LTDA",
  "cnpjFornecedor": "10.949.656/0001-09",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211110949656000109550010000050151674253883",
  "valorNotaFiscal": "31.112,51",
  
  
  "dataEmissao": "22/11/2021",
  "numero": 5015,
  
  },
  {
  "id": 403815,
  
  
  "nomeFornecedor": "SIEMENS HEALTHCARE DIAGNÓSTICOS LTDA",
  "cnpjFornecedor": "01.449.930/0005-13",
  "municipioFornecedor": "JUNDIAÍ",
  "chaveNotaFiscal": "35211101449930000513550120001864301136703174",
  "valorNotaFiscal": "3.846,76",
  
  
  "dataEmissao": "30/11/2021",
  "numero": 186430,
  
  },
  {
  "id": 403991,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211201772798000667550010002075731017355281",
  "valorNotaFiscal": "25.600,00",
  
  
  "dataEmissao": "03/12/2021",
  "numero": 207573,
  
  },
  {
  "id": 404241,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211101772798000667550020001133311017254595",
  "valorNotaFiscal": "24.200,00",
  
  
  "dataEmissao": "25/11/2021",
  "numero": 113331,
  
  },
  {
  "id": 404525,
  
  
  "nomeFornecedor": "BIOVALIC COM. DE EQUIP. MEDICOS LTDA",
  "cnpjFornecedor": "08.924.875/0001-91",
  "municipioFornecedor": "SAO PAULO",
  "chaveNotaFiscal": "35211208924875000191550010000039731584718308",
  "valorNotaFiscal": "20.300,00",
  
  
  "dataEmissao": "10/12/2021",
  "numero": 3973,
  
  },
  {
  "id": 404680,
  
  
  "nomeFornecedor": "SALVADOR DISTRIBUIDORA DE MEDICAMENTOS LTDA",
  "cnpjFornecedor": "21.632.425/0001-93",
  "municipioFornecedor": "SALVADOR",
  "chaveNotaFiscal": "29211221632425000193550000000073451241585990",
  "valorNotaFiscal": "172,00",
  
  
  "dataEmissao": "15/12/2021",
  "numero": 7345,
  
  },
  {
  "id": 405082,
  
  
  "nomeFornecedor": "MEDTRONIC COMERCIAL LTDA.",
  "cnpjFornecedor": "01.772.798/0006-67",
  "municipioFornecedor": "OSASCO",
  "chaveNotaFiscal": "35211201772798000667550020001187901017632610",
  "valorNotaFiscal": "8.646,00",
  
  
  "dataEmissao": "28/12/2021",
  "numero": 118790,
  
  },
  {
  "id": 405110,
  
  
  "nomeFornecedor": "BRAILE BIOMEDICA IND. COM. REPRES. LTDA.",
  "cnpjFornecedor": "52.828.936/0001-09",
  "municipioFornecedor": "SAO JOSE DO RIO PRETO",
  "chaveNotaFiscal": "35211252828936000109550010008146551649560190",
  "valorNotaFiscal": "7.999,00",
  
  
  "dataEmissao": "30/12/2021",
  "numero": 814655,
  
  },
  {
  "id": 405162,
  
  
  "nomeFornecedor": "TOP MIX COMERCIO E SERVIÇOS LTDA",
  "cnpjFornecedor": "20.515.983/0001-06",
  "municipioFornecedor": "RIO DE JANEIRO",
  "chaveNotaFiscal": "33220120515983000106550010000004541000100005",
  "valorNotaFiscal": "10.500,00",
  
  
  "dataEmissao": "03/01/2022",
  "numero": 454,
  
  }
];
