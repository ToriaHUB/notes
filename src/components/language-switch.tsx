import React from "react"
import styled from "styled-components"
import { theme } from "../styles"
import { useDispatch, useSelector } from "react-redux"
import { ReduxState } from "../redux"

type Props = { children?: never }

export const LanguageSwitch: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const activeLang = useSelector((store: ReduxState) => store.activeLang)
  return (
    <ButtonsWrapper>
      <LanguageButton isActive={activeLang === "ua"} onClick={() => dispatch({ type: "SET_LANGUAGE", data: "ua" })}>
        UA
      </LanguageButton>
      <LanguageButton isActive={activeLang === "en"} onClick={() => dispatch({ type: "SET_LANGUAGE", data: "en" })}>
        EN
      </LanguageButton>
      <LanguageButton isActive={activeLang === "ru"} onClick={() => dispatch({ type: "SET_LANGUAGE", data: "ru" })}>
        RU
      </LanguageButton>
    </ButtonsWrapper>
  )
}

const LanguageButton = styled.div<{ isActive: boolean }>`
  width: min-content;
  height: min-content;
  padding: 6px 12px;
  border: 1px solid ${theme.color.white};
  border-radius: 5px;
  background-color: ${props => (props.isActive ? theme.color.green : theme.color.blue)};
  &:hover {
    cursor: pointer;
  }
`
const ButtonsWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`
