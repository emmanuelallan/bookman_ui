import Main from '../sections/main';

import Image from 'next/image';

export default function Login() {
  return (
    <Main>
      <div className="container d_flex">
        <div className="row">
          <div className="col_5">
            <div className="card">
              <div className="card_body p_6">
                <div className="mb_4">
                  <div className="mb_4">
                    <Image
                      src="/img/bookman_store_logo.svg"
                      alt="bookman logo"
                      width={200}
                      height={50}
                    />
                  </div>
                  <h1 className="mb_1 fw_bold">Sign In</h1>
                </div>

                <form>
                  <div className="mb_3">
                    <label className="form_label">Username or Email</label>
                    <input
                      type="email"
                      className="form_control"
                      name="email"
                      placeholder="Email address here"
                      required
                    />
                  </div>

                  <div>
                    <div className="d_grid">
                      <button type="submit" className="btn_submit btn_primary">
                        Publish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
