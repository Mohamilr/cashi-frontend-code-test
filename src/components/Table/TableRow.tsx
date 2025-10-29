import type { ReactNode } from 'react'

type TableRowProps = {
  children: ReactNode
  className?: String
  onClick?: () => void
}

const TableRow = ({ children, className, onClick }: TableRowProps) => {
  return (
    <tr
      onClick={onClick}
      className={`border-b border-gray-200 text-sm ${className}`}
    >
      {children}
    </tr>
  )
}

export default TableRow
