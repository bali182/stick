import { FC, PropsWithChildren } from 'react'
import { css } from '@emotion/css'
import { IconType } from 'react-icons'
import { isNil } from '../../../../model/isNil'

const headerStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

const contentStyle = css`
  position: relative;
  top: -6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2px;
`

const footerStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
`

const iconStyle = css`
  cursor: pointer;
  color: #ffffffbb;
  &:hover {
    color: #ffffff;
  }
`

const spacerStyle = css`
  height: 36px;
  width: 1px;
`

export const ChordBlockHeader: FC<PropsWithChildren> = ({ children }) => {
  return <div className={headerStyle}>{children}</div>
}

export const ChordBlockFooter: FC<PropsWithChildren> = ({ children }) => {
  return <div className={footerStyle}>{children}</div>
}

export const ChordBlockContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className={contentStyle}> {children}</div>
}

export const Spacer: FC = () => <div className={spacerStyle} />

export type ChordBlockIconProps = {
  icon: IconType
  onClick?: () => void
  visible?: boolean
}

export const ChordBlockIcon: FC<ChordBlockIconProps> = ({
  icon: Icon,
  visible,
  onClick,
}) => {
  return (
    <Icon
      className={iconStyle}
      onClick={onClick}
      style={{ visibility: isNil(visible) || visible ? 'visible' : 'hidden' }}
    />
  )
}
