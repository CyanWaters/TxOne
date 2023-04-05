import React, { useState } from "react"
import styled from "styled-components"

import Content from "./Components/Content"
import Tabs from "./Components/Tabs"
import { TAB_LIST } from "./constants"
import Context from "./context"
import { TabList } from "./interface"

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
  const [activeTab, setActiveTab] = useState<TabList>()

  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab: (value: TabList) => setActiveTab(value),
      }}
    >
      <Container>
        <div className="menu-list">
          <Tabs tabs={TAB_LIST} />
        </div>
        <div className="menu-content">
          <Content />
        </div>
      </Container>
    </Context.Provider>
  )
}

export default App
