import type { FC, ReactElement } from 'react'
import { Icon } from '@iconify-icon/react'

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined
  text: string | ReactElement
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  isLoading?: boolean
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  disabled?: boolean
}

const ButtonVariant = {
  primary: 'border-main text-white bg-main disabled:opacity-60',
  secondary: 'border-secondary bg-secondary text-white disabled:opacity-60',
}

const Button: FC<ButtonProps> = ({
  type,
  onClick,
  text,
  variant = 'primary',
  isLoading,
  className = '',
  leftIcon,
  rightIcon,
  disabled,
}) => {
  return (
    <>
      <button
        type={type}
        className={`flex items-center outline-none justify-center gap-1 w-full py-4 rounded-md  border text-[16px] leading-[18px] font-semibold ${ButtonVariant[variant]} ${className}`}
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        {leftIcon && <>{leftIcon}</>}{' '}
        {isLoading ? (
          <Icon icon="svg-spinners:6-dots-scale" width={16} height={16} />
        ) : (
          text
        )}{' '}
        {rightIcon && <>{rightIcon}</>}
      </button>
    </>
  )
}

export default Button
