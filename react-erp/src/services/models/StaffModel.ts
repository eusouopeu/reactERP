export interface StaffModelHeader {
  id: keyof FilteredStaffModel
  numeric: boolean
  disablePadding: boolean
  label: string
}

export interface FilteredStaffModel {
  id: number;
  nome: string;
  unidade: string;
  cargo: string;
  admissao: string | number;
  salario: number;
}

export interface RawStaffModel {
  id: number;
  nome: string;
  cpfDescaracterizado: string;
  matriculaDescaracterizada?: string;
  jornadaTrabalho: string;
  uorgLotacao: string;
  dataIngressoCargo: string | undefined;
  uorgExercicio: string;
  cargo: string;
  regimeJuridico?: string | undefined;
  cargo2?: string | undefined;
  jornadaTrabalho2?: string | undefined;
  dataIngressoCargo2?: string | undefined;
  classeCargo: string;
  padraoCargo: string;
  nivelCargo: string;
  remuneracaoBasicaBruta: string;
}