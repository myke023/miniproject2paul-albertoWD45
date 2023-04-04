import { Button, Container } from "react-bootstrap"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
   <Container className="d-flex justify-content-end mt-3 mt-md-0">
      <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="me-2">
         Prev
      </Button>
      <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
         Next
      </Button>

   </Container>
  )
}

export default Pagination