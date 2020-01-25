import React from "react"
import { Spinner } from "./spinner"
import styled from "styled-components"

export const Loading = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(220, 220, 220, 0.3);
`
