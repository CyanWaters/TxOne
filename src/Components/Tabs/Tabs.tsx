import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../../context"
import { TITLE_LIST } from "./constants"

const Container = styled.div<{ active: boolean }>`
  border: 1px solid ${({ active }) => (active ? "#2a9fcd" : "#c0c0c0")};
  padding: 5px 5px 5px 20px;
  background-color: ${({ active }) => (active ? "#E7EBFF" : undefined)};
  font-size: 12px;
  font-family: Arial;
  font-weight: ${({ active }) => (active ? "bold" : undefined)};
  cursor: pointer;
`

const Tabs = () => {
  const { activeTab, setActiveTab } = useContext(Context)

  return (
    <>
      {TITLE_LIST.map(({ title, value }, index) => {
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
