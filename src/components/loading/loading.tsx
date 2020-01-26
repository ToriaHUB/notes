import React from "react"
import { Spinner } from "./spinner"
import styled from "styled-components"
import { useSelector } from "react-redux"

export const Loading = () => {
  const isLoading = useSelector((store: { isLoading: boolean }) => store.isLoading)

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  }
  return null
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
