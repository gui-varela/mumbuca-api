export type CustomerDTO = {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  identity: string;
  birth_date: Date;
  personal_data_id?: string;
  address_id?: string;
  updated_at?: Date;
};
