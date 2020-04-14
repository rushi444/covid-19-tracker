export interface DetailValue {
  detail: string
  value: number
}

export interface IVirusData {
  confirmed: DetailValue
  recovered: DetailValue
  deaths: DetailValue
  lastUpdate: string
}

interface ICountryDetails {
  confirmed: number
  deaths: number
  date: string
}

export interface IDailyData {
  [index: number]: ICountryDetails
  length: number
}

export type IFetchedCountries = string[]

export interface CountryType {
  name: string
  iso2: string
  iso3: string
}