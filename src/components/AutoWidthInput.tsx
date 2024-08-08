import { cx, css } from '@emotion/css'
import { FC, HTMLProps, useEffect, useRef, useState } from 'react'
import { isNil } from '../model/isNil'

const divStyle = css`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  pointer-events: none !important;
  color: #fff;
  visibility: hidden !important;
`

export const AutoWidthInput: FC<HTMLProps<HTMLInputElement>> = ({
  value,
  className,
  ...rest
}) => {
  const [width, setWidth] = useState(0)
  const span = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isNil(span.current)) {
      return
    }
    const rect = span.current.getBoundingClientRect()
    setWidth(Math.ceil(rect.width) + 5)
  }, [value])

  return (
    <>
      <div className={cx(className, divStyle)} ref={span}>
        {value}
      </div>
      <input
        type="text"
        value={value}
        className={className}
        style={{ ...rest.style, width }}
        {...rest}
      />
    </>
  )
}
