import { Button } from "@chakra-ui/react"

function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }
  
  function Pagination({ pageSize, currentPage, handlePageChange }) {
    let pages = createArrayOfSize(pageSize).map((a, i) => (
      <Button
        disabled={currentPage === i + 1}
        onClick={() => handlePageChange(i + 1)}
        data-testid="page-btn"
      >
        {i + 1}
      </Button>
    ));
    return <div>{pages}</div>;
  }
  
  export default Pagination;