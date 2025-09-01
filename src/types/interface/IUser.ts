export interface IUsers {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  photo?: string;
  password: string;
  adresse?: string;
  telephone?: string;
  profilId: number;
  niveauId?: number;
  statutAD?: string;
  referentielId?: number;
  promotionId?: number;
}