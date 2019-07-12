export interface utilisateur {
  email: string;
  prenom: string;
  nom: string;
  bank: string;
  password: string;
  num: number;
  tel: number;
}
export interface addresse {
  pays: string;
  ville: string;
  codepostale: number;
  add: string;
}
export interface DepEtRevs {
  date: Date;
  categorie: string;
  description: String;
  type: string;
  montant: number;
}
