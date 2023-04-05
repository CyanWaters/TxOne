import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../../context"
import { TabList } from "../../interface"
import { FAKE_DATA, TAB_MAPPING_TABLE } from "./constants"
import DataAnalysis from "./DataAnalysis"
import Weather from "./Weather"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px;
  & div.title {
    height: 5vh;
    border-bottom: 1px solid #000000;
    padding-bottom: 5px;
    font-size: 16px;
    font-family: Arial;
  }
  & div.content {
    flex-grow: 1;
  }
`

const Content = () => {
  const { activeTab } = useContext(Context)

  return (
    <Container>
      {TAB_MAPPING_TABLE[activeTab as TabList] && (
        <div className="title">{TAB_MAPPING_TABLE[activeTab as TabList]}</div>
      )}
      <div className="content">
        {activeTab === TabList.dataAnalysis && (
          <DataAnalysis data={FAKE_DATA} />
        )}
        {activeTab === TabList.todaysWeather && <Weather />}
      </div>
    </Container>
  )
}

export default Content
