import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleXmark,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons"

export enum MessageType {
  Warning = "warning",
  Error = "error",
  Success = "success",
}

const Container = styled.div`
  padding: 5px;
  font-size: 12px;
  font-family: Arial;
  margin-bottom: 5px;
  & :first-child {
    margin-right: 5px;style
  }
`

interface IMessageProps {
  type: MessageType
  description?: string
}

const Message: React.FC<IMessageProps> = ({ type, description = "" }) => {
  const [style, setStyle] = useState<any>({
    border: "1px solid",
  })

  useEffect(() => {
    switch (type) {
      case MessageType.Success:
        setStyle({ border: "1px solid green", backgroundColor: "lightgreen" })
        break
      case MessageType.Error:
        setStyle({ border: "1px solid red", backgroundColor: "lightpink" })
        break
      case MessageType.Warning:
        setStyle({ border: "1px solid yellow", backgroundColor: "lightyellow" })
        break
      default:
        setStyle({ border: "1px solid" })
        break
    }
  }, [type])

  const Icon = useMemo(() => {
    switch (type) {
      case MessageType.Success:
        return (
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
        )
      case MessageType.Error:
        return <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} />
      case MessageType.Warning:
        return (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "yellow" }}
          />
        )
      default:
        return
    }
  }, [type])

  return (
    <Container style={style}>
      {Icon}
      {description}
    </Container>
  )
}

export default Message
