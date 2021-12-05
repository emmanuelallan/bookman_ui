import Search from '../components/search/search';
import Table from '../components/table/table';

export default function BooksTable({ error, data }) {
  return (
    <div className="row">
      <div className="col_12">
        <div className="card">
          <div className="row p_4">
            <Search />
          </div>
          <div className="table_responsive">
            {error && (
              <p style={{ textAlign: 'center' }}>Error Loading Books</p>
            )}

            {data && <Table data={data} />}
          </div>

          {data && (
            <div className="card_footer">
              <nav aria-label="table navigation">
                <ul className="pagination">
                  <li className="page_item">
                    <a className="page_link mx_1 rounded" href="#">
                      2
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
