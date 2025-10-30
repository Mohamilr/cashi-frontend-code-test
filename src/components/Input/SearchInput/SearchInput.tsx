import type { FC } from "react"
import Input from "../Input"
import debounce from "debounce-promise"

type SearchInputProps = {
    label?: string
    placeholder?: string
    handleSearch: (search: string) => void
    value?: string
}

const SearchInput: FC<SearchInputProps> = ({
    label,
    placeholder = "Search",
    handleSearch,
    value,
}) => {
    const debouncedSearch = debounce((e) => handleSearch(e.target.value), 1000, {

    })
    return (
        <Input
            label={label}
            placeholder={placeholder}
            name="search-input"
            type="search"
            defaultValue={value}
            onChange={debouncedSearch}
        />
    )
}

export default SearchInput