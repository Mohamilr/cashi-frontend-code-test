import { FC, ReactElement, FormEvent } from "react"

type InputProps = {
    type?: "text" | "email" | "password" | "number" | string
    label?: string
    name: string
    value?: string | number
    defaultValue?: string | number
    placeholder?: string
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    error?: string
    onChange?: (e: FormEvent<HTMLInputElement>) => void
    disabled?: boolean
}

const Input: FC<InputProps> = ({
    type = "text",
    label,
    name,
    placeholder,
    value,
    defaultValue,
    leftIcon,
    rightIcon,
    error,
    onChange,
    disabled,
}) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className={`font-medium ${error ? "text-red-500" : ""}`}>
                    {label}
                </label>
            )}
            <div className={`flex items-center gap-2 border p-4 rounded-md ${error ? "border-red-500" : "border-gray-200"}`}>
                {leftIcon && leftIcon}
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className={`w-full border-none outline-none ${error ? "" : ""}`}
                    disabled={disabled}
                />
                {rightIcon && rightIcon}
            </div>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}

export default Input
