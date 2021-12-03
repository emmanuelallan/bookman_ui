import Search from '../components/search/search';
import Table from '../components/table/table';

export default function BooksTable() {
  return (
    <div className="row">
      <div className="col_12">
        <div className="card">
          <div className="row p_4">
            <Search />
          </div>
          <div className="table_responsive">
            <Table />
          </div>

          <div className="card_footer">
            <nav ariaLabel="table navigation">
              <ul className="pagination">
                <li className="page_item">
                  <a className="page_link mx_1 rounded" href="#">
                    2
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
