import { useState, useEffect } from "react"
import axios from "axios"
import { Spinner, Row, Col, Button, Container } from "react-bootstrap"

const Items = () => {
  const baseUrl = "https://pokeapi.co/api/v2/"
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchItems(`${baseUrl}item?limit=20`)
  }, [])

  const fetchItems = async (url) => {
    const response = await axios.get(url)
    const itemsData = response.data.results
    const totalCount = response.data.count
    const totalPages = Math.ceil(totalCount / 20)

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
    fetchItems(`${baseUrl}item?limit=20&offset=${(prevPage - 1) * 20}`)
    setCurrentPage(prevPage)
    window.scrollTo(0, 0)
  }

  const handleNext = () => {
    const nextPage = currentPage + 1
    fetchItems(`${baseUrl}item?limit=20&offset=${(nextPage - 1) * 20}`)
    setCurrentPage(nextPage)
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
      ) : (
        <div className="mt-5 py-5 px-2">
          <Row>
            {items.map((item, index) => (
              <Col md={6} lg={4} xl={3} key={index} className="mb-4 py-3 border">
                <div className="text-center">
                  <img src={item.image} alt={item.name} width={45} />
                  <h5 className="mt-3 text-capitalize">{item.name}</h5>
                  <p>{item.effect}</p>
                </div>
              </Col>
            ))}
          </Row>
          {totalPages && (
            <div className="d-flex justify-content-center mt-4">
              <Button onClick={handlePrev} disabled={currentPage === 1} className="me-4">Prev</Button>
              <Button onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
            </div>
          )}
        </div>
      )}
    </Container>
  )
}

export default Items
