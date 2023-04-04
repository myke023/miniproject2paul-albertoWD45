import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"

const PokemonFilterDropdown = ({ allTypes, setTypeFilter }) => {
  return (
   <DropdownButton as={ButtonGroup} title="Filter By Type" id="bg-nested-dropdown">
      <Dropdown.Item onClick={() => setTypeFilter(null)} >All</Dropdown.Item>
      {allTypes.map((type) => (
      <Dropdown.Item key={type} onClick={() => setTypeFilter(type)}>
         {type}
      </Dropdown.Item>
      ))}
   </DropdownButton>
  )
}

export default PokemonFilterDropdown