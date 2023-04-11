import { Button, Container } from "react-bootstrap"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

  const handleScrollToTop = () => {
   window.scrollTo(0, 0)
  }

  return (
   <Container className="d-flex justify-content-end mt-3 mt-md-0">
      <Button disabled={currentPage === 1} onClick={() => {setCurrentPage(currentPage - 1); handleScrollToTop();}} className="pokemon-btn me-2">
         Prev
      </Button>
      <Button disabled={currentPage === totalPages} onClick={() => {setCurrentPage(currentPage + 1); handleScrollToTop();}} className="pokemon-btn">
         Next
      </Button>

   </Container>
  )
}

export default Pagination
