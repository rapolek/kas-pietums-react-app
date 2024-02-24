interface Props {
}

export const SearchBar: React.FC<Props> = (props) => {
    return (
        <div>
            <input type="search"></input>
            <button>Search</button>
        </div>
    )
}