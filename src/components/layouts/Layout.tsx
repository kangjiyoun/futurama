import React from "react"
import styled from "@emotion/styled"
import { Navigation } from "."

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>
        { children }
      </Container>
    </div>
  )
}

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
  padding: 0 3%;
  box-sizing: border-box;;
`