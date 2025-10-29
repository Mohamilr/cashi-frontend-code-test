import type { FC } from "react"
import { Icon } from "@iconify-icon/react"
import Button from "components/Button/Button"

type ErrorProps = {
    message?: string
    onRetry: () => void
}

const Error: FC<ErrorProps> = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full" onClick={onRetry}>
            <Icon icon="material-symbols:error-rounded" width={90} className="text-red-500" />
            <p className="text-red-500">{message ?? "An error occurred"}, <Button text="Kindly retry." variant="text" className="text-main w-fit! inline!" /></p>
        </div>
    )
}

export default Error
