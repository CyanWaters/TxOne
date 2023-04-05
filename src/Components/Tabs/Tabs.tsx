import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../../context"
import { Tab } from "../../interface"

const Container = styled.div<{ active: boolean }>`
  border: 1px solid ${({ active }) => (active ? "#2a9fcd" : "#c0c0c0")};
  padding: 5px 5px 5px 20px;
  background-color: ${({ active }) => (active ? "#E7EBFF" : undefined)};
  font-size: 12px;
  font-family: Arial;
  font-weight: ${({ active }) => (active ? "bold" : undefined)};
  cursor: pointer;
`

interface ITabsProps {
  tabs: Tab[]
}

const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
  const { activeTab, setActiveTab } = useContext(Context)

  return (
    <>
      {tabs.map(({ title, value }, index) => {
        return (
          <Container
            key={index}
            active={activeTab === value}
            onClick={() => {
              setActiveTab(value)
            }}
          >
            {title}
          </Container>
        )
      })}
    </>
  )
}

export default Tabs
