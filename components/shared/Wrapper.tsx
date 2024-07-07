import { cva } from "cva"

interface WrapperProps {
  className?: string
  id?: string
  children?:React.ReactNode
}

const wrapperStyles = cva("wrapper")

export function Wrapper(props: WrapperProps) {
  const { id, className, children } = props
  
  return (
    <div id={id} className={wrapperStyles({class:className})}>
     {children}
    </div>
  )
}
