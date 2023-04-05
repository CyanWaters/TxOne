import { TabList } from "../../interface"

export const TAB_MAPPING_TABLE: Record<TabList, string> = {
  [TabList.dataAnalysis]: "Data Analysis",
  [TabList.todaysWeather]: "Today's Weather",
}

export const FAKE_DATA = {
  labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
  data: {
    Men: [110800, 107260, 100861, 93357, 90812, 83748, 81220],
    Women: [102293, 99980, 93755, 87299, 84262, 77540, 75799],
  },
}
