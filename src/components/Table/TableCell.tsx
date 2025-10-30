import type { ReactNode } from 'react'

type TableCellProps = {
  children: ReactNode
  className?: String
}

const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <td>
      <div className={`py-4 px-6 ${className}`}>{children}</div>
    </td>
  )
}

export default TableCell
