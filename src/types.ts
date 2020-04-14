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

export interface IDailyData {
  [index: number] : any
  length: number
}

export interface IFetchedCountries {
  data: []
}