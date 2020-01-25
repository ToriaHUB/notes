import React from "react"
import { theme } from "../styles"

type Props = {
  children?: never
}

export const AddIcon: React.FC<Props> = () => {
  return (
    <svg
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ width: "20px", height: "20px", fill: theme.color.white }}
    >
      <g>
        <path
          d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
  v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
        />
      </g>
    </svg>
  )
}
