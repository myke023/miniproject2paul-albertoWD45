import { useState, useEffect } from "react"
import axios from "axios"
import { Spinner, Table, Button, Container } from "react-bootstrap"

const Items = () => {
  const baseUrl = "https://pokeapi.co/api/v2/"
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchItems(`${baseUrl}item?limit=18`)
  }, [])

  const fetchItems = async (url) => {
    const response = await axios.get(url)
    const itemsData = response.data.results
    const totalCount = response.data.count
    const totalPages = Math.ceil(totalCount / 18)

    const itemsList = await Promise.all(
      itemsData.map(async (item) => {
        const itemResponse = await axios.get(item.url)
        return {
          name: item.name,
          image: itemResponse.data.sprites.default,
          effect: itemResponse.data.effect_entries[0].effect,
        }
      })
    )

    setItems(itemsList)
    setTotalPages(totalPages)
    setLoading(false)
  }

  const handlePrev = () => {
    const prevPage = currentPage - 1
    fetchItems(`${baseUrl}item?limit=18&offset=${(prevPage - 1) * 18}`)
    setCurrentPage(prevPage)
    window.scrollTo(0, 0)
  }

  const handleNext = () => {
    const nextPage = currentPage + 1
    fetchItems(`${baseUrl}item?limit=18&offset=${(nextPage - 1) * 18}`)
    setCurrentPage(nextPage)
    window.scrollTo(0, 0)
  }

  return (
    <div className="pokemon-list">
      <Container>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="border" role="status"  className="text-white">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
      ) : (
        <div className="mt-5 py-5 px-2">
          {totalPages && (
            <div className="d-flex justify-content-end my-3">
              <Button onClick={handlePrev} disabled={currentPage === 1} className="me-4">Prev</Button>
              <Button onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
            </div>
          )}
          <Table responsive  bordered>
            <thead className="text-center items-bg ">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody className="items-bg">
              {items.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.image} alt={item.name} width={30} className="d-block m-auto"/></td>
                  <td className="text-capitalize text-center" >{item.name}</td>
                  <td>{item.effect}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {totalPages && (
            <div className="d-flex justify-content-between mt-1">
              <Button onClick={handlePrev} disabled={currentPage === 1} className="me-4">Prev</Button>
              <Button onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
            </div>
          )}
        </div>
      )}
    </Container>
    </div>
  )
}

export default Items
