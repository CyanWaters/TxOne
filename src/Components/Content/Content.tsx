import React, { useContext } from "react"
import styled from "styled-components"
import { TITLE } from "../../constants"

import Context from "../../context"
import { FAKE_DATA, TITLE_MAPPING_TABLE } from "./constants"
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
      {TITLE_MAPPING_TABLE[activeTab as TITLE] && (
        <div className="title">{TITLE_MAPPING_TABLE[activeTab as TITLE]}</div>
      )}
      <div className="content">
        {activeTab === TITLE.dataAnalysis && <DataAnalysis data={FAKE_DATA} />}
        {activeTab === TITLE.todaysWeather && <Weather />}
      </div>
    </Container>
  )
}

export default Content
