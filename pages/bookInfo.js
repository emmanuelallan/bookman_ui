import Image from 'next/image';

export default function BookInfo({data, error}) {
  return (

      <>
        {error && (
            <p style={{ textAlign: 'center' }}>Error Loading Books</p>
        )}

        {
          data && (
                <div className="row">
                  <div className="col_8">
                    <div className="row">
                      <div className="col_12 mb_4">
                        <div className="card">
                          <div className="card_header">
                            <div className="d_between">
                              <h4 className="mb_0 capitalize">
                                <b>{data.title}</b> {data.subTitle}
                              </h4>
                            </div>
                          </div>
                          <div className="card_body">
                            <div className="d_between">
                              <div>
                                <Image
                                    src={`/img/${data.imgUrl}`}
                                    alt="Grit"
                                    width={64}
                                    height={100}
                                />
                              </div>
                              <div className="text_left m_left">
                                <p>
                                  <strong>Description</strong>
                                </p>
                                <p>
                                    {data.description}
                                </p>
                              </div>
                            </div>

                            <div className="d_between">
                              <div className="table_responsive">
                                <table className="table table_bordered text_nowrap border_primary mb_0">
                                  <thead>
                                  <tr>
                                    <th>Price</th>
                                    <th>Author</th>
                                    <th>Quantity</th>
                                    <th>Pub Date</th>
                                    <th>Pages</th>
                                    <th>Language</th>
                                    <th>ISBN</th>
                                    <th>Pdf</th>
                                    <th>Ratings</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td className="align_middle">{data.price}</td>
                                    <td className="align_middle">{data.author}</td>
                                    <td className="align_middle">{data.quantity}</td>
                                    <td className="align_middle">{data.pubDate}</td>
                                    <td className="align_middle">{data.pages}</td>
                                    <td className="align_middle">{data.language}</td>
                                    <td className="align_middle">{data.ISBN}</td>
                                    {/*<td className="align_middle">{data.pdf['fileSize']}</td>*/}
                                    {/*<td className="align_middle">{data.rating.average} of {data.rating.global}</td>*/}
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col_12 mb_4">
                        <div className="card">
                          <div className="card_header">
                            <h4 className="mb_0">Budget </h4>
                          </div>

                          <div className="row">
                            <div className="col_4">
                              <div className="d_between p_4">
                                <div>
                                  <h2 className="h1 fw_bold mb_0 text_left">KES. 52,000</h2>
                                  <p className="mb_0 text_left">Total Sales</p>
                                </div>
                                <div className="ms_3">
                                  <div className="icon_shape text_primary bg_light_primary rounded_corner icon_lg">
                                    <i className="ri-exchange-dollar-line fs_3" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col_4 border_start">
                              <div className="d_between p_4">
                                <div>
                                  <h2 className="h1 fw_bold mb_0 text_left">1,254</h2>
                                  <p className="mb_0 text_left">Books Sold</p>
                                </div>
                                <div className="ms_3">
                                  <div className="icon_shape text_danger bg_light_danger rounded_corner icon_lg">
                                    <i className="ri-exchange-dollar-line fs_3" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col_4 border_start">
                              <div className="d_between p_4">
                                <div>
                                  <h2 className="h1 fw_bold mb_0 text_left">210</h2>
                                  <p className="mb_0 text_left">Books Remaining</p>
                                </div>
                                <div className="ms_3">
                                  <div className="icon_shape text_success bg_light_success rounded_corner icon_lg">
                                    <i className="ri-exchange-dollar-line fs_3" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col_4">

                  </div>
                </div>
            )
        }
      </>

  );
}
