import { Moment } from "moment";

interface Courier {
  id: number;
  phone: string;
  email: string;
  name: string;
  towns: string;
  zones: string;
  rate: number;
  birthDate: Moment;
  photo: File | undefined;
  paymentMethodToken: string;
  passwordHash?: string;
  registrationDate: Moment;
  lastAuthDate?: Moment;
}

const equals = (courier1: Courier, courier2: Courier) =>
  courier1.id === courier2.id &&
  courier1.phone === courier2.phone &&
  courier1.email === courier2.email &&
  courier1.name === courier2.name &&
  courier1.towns === courier2.towns &&
  courier1.zones === courier2.zones &&
  courier1.rate === courier2.rate &&
  courier1.birthDate.toString() === courier2.birthDate.toString() &&
  courier1.registrationDate.toString() ===
    courier2.registrationDate.toString() &&
  courier1.photo === courier2.photo &&
  courier1.paymentMethodToken === courier2.paymentMethodToken &&
  courier1.passwordHash === courier2.passwordHash;

export { equals };
export type { Courier };
