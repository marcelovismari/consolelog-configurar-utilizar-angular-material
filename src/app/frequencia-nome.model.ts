export interface FrequenciaNome {
  nome: string;
  res: Array<FrequenciaNomePeriodo>;
}

export interface FrequenciaNomePeriodo {
  periodo: string;
  frequencia: number;
}
