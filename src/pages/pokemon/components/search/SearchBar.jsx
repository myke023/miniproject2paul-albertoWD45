const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
   <div className="mx-auto mb-3 m-md-0 d-flex align-items-center">
      <div className="input-group">
         <input 
            type="text"
            className="form-control"
            placeholder="Search pokemon.."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
         />
      </div>
   </div>
  )
}

export default SearchBar