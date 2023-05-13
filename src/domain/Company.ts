import { Moment } from "moment";
import { Courier } from "./Courier";

interface Company {
  id: number;
  name: string;
  phone: string;
  town: string;
  address: string;
  description: string;
  email: string;
  rate?: number;
  photo?: File;
  paymentMethodToken: string;
  passwordHash?: string;
  registrationDate: Moment;
  lastAuthDate?: Moment;
  creationDate: Moment;
}

const isCompany = (user: Company | Courier): user is Company =>
  "description" in user;

const equals = (company1: Company, company2: Company) =>
  company1.id === company2.id &&
  company1.phone === company2.phone &&
  company1.email === company2.email &&
  company1.name === company2.name &&
  company1.address === company2.address &&
  company1.description === company2.description &&
  company1.rate === company2.rate &&
  company1.photo === company2.photo &&
  company1.paymentMethodToken === company2.paymentMethodToken &&
  company1.registrationDate.toString() ===
    company2.registrationDate.toString() &&
  company1.creationDate.toString() === company2.creationDate.toString() &&
  company1.passwordHash === company2.passwordHash;

export type { Company };
export { isCompany, equals };
