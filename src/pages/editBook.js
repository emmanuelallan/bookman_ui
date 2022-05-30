import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import Label from '../components/form/label';
import Input from '../components/form/input';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';

export default function EditBook() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full">
            <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
              <h1 className="text-lg font-semibold text-heading">
                Edit Book
              </h1>
            </div>
            <form>
              <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
                <div className="w-full px-0 pb-5 sm:pe-4 md:pe-5 sm:w-4/12 md:w-1/3 sm:py-8">
                  <h4 className="text-base font-semibold text-textColor-dark mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-textColor">
                    Update your book description and necessary information from
                    here
                  </p>
                </div>
                <div className="p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                  <div className="mb-5">
                    <Label name="title" title="Book Name" />
                    <Input type="text" name="title" />
                  </div>
                  <div className="mb-5">
                    <Label name="subTitle" title="Sub Title" />
                    <Input type="text" name="subTitle" />
                  </div>
                  <div className="mb-5">
                    <Label name="author" title="Author" />
                    <Input type="text" name="author" />
                  </div>
                  <div className="mb-5">
                    <Label name="category" title="Category" />
                    <select className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent">
                      <option disabled>Select Category</option>
                      <option value="fiction">Fiction</option>
                      <option value="non-fiction">Non-Fiction</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <Label name="price" title="Price" />
                    <Input type="number" name="price" />
                  </div>
                  <div className="mb-5">
                    <Label name="stock" title="Stock" />
                    <Input type="number" name="stock" />
                  </div>
                  <div className="mb-5">
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                      Book Cover
                    </label>
                    <section className="upload">
                      <div
                        role="button"
                        tabIndex="0"
                        className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"
                      >
                        <input
                          type="file"
                          autoComplete="off"
                          tabIndex="-1"
                          style={{ display: 'none' }}
                        />
                        <span className="text-fileIcon text-4xl">
                          <BsFillCloudArrowUpFill />
                        </span>
                        <p className="text-body text-sm mt-4 text-center">
                          <span className="font-semibold text-gray-500">
                            Upload a digital file from here
                          </span>
                        </p>
                      </div>
                    </section>
                  </div>
                  <div>
                    <label className="block text-textColor-dark font-semibold text-sm leading-none mb-3">
                      Status
                    </label>
                    <div className="mb-2">
                      <div className="flex items-center">
                        <input
                          name="status"
                          type="radio"
                          className="radio_radio_input"
                          value="publish"
                        />
                        <label
                          htmlFor="published"
                          className="text-textColor text-sm ml-2"
                        >
                          Published
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <input
                          name="status"
                          type="radio"
                          className="radio_radio_input"
                          value="draft"
                        />
                        <label
                          htmlFor="draft"
                          className="text-textColor text-sm ml-2"
                        >
                          Draft
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-right">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
