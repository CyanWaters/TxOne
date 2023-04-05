import React, { useState } from "react"
import styled from "styled-components"

import Content from "./Components/Content"
import Tabs from "./Components/Tabs"
import { TITLE } from "./constants"
import Context from "./context"

const Container = styled.div`
  display: flex;
  & div.menu-list {
    width: 20vw;
    margin: 20px 0 0 20px;
  }
  & div.menu-content {
    flex-grow: 1;
  }
`

const App = () => {
  const [activeTab, setActiveTab] = useState<TITLE>()

  return (
    <Context.Provider
      value={{ activeTab, setActiveTab: (value: TITLE) => setActiveTab(value) }}
    >
      <Container>
        <div className="menu-list">
          <Tabs />
        </div>
        <div className="menu-content">
          <Content />
        </div>
      </Container>
    </Context.Provider>
  )
}

export default App
