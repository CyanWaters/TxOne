export enum TabList {
  dataAnalysis,
  todaysWeather,
}

export interface Tab {
  title: string
  value: TabList
}
