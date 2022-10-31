import {Pagination, Row, Col} from "react-bootstrap"

export default function CustomPagination({ activePage, count, rowsPerPage, totalPages, setActivePage }) {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    // const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    return (
      <Row>
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <Pagination size="lg" className="">
            <Pagination.First disabled={activePage === 1} onClick={() => setActivePage(1)} className="border border-1"/>
            <Pagination.Prev disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)} className="border border-1"/>
            <Pagination.Next disabled={totalPages && (activePage === totalPages)} onClick={() => setActivePage(activePage + 1)} className="border border-1"/>
            <Pagination.Last disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)} className="border border-1"/>
          </Pagination>
        </Col>
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <p className="fs-3 fw-bold">Page {activePage} of {totalPages}</p>
          {/* <p>
              Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
          </p> */}
        </Col>
      </Row>
  )
}
//   <div className="pagination">
//     <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
//       ⏮️ First
//     </button>
//     <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
//       ⬅️ Previous
//     </button>
//     <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
//       Next ➡️
//     </button>
//     <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
//       Last ⏭️
//     </button>
//   </div>
//   <p>
//     Page {activePage} of {totalPages}
//   </p>
//   <p>
//     Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
//   </p>
// </div>

      