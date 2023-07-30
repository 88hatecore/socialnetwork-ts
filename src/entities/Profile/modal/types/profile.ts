import { Currency } from "entities/Currency/modal/types/currency";
import { Country } from "entities/Country/modal/types/country";

export interface Profile {
  first?: string;
  last?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
