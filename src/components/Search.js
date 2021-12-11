const Search = ({ setSearch }) => {

    const inputSearch = e => {
        setSearch(e.target.value);
    }

    return ( 
        <form>
            <input 
                type="text" 
                placeholder='Search...'
                onChange={inputSearch}
            />
        </form>
     );
}
 
export default Search;