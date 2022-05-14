import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import Label from '../components/form/label';
import Input from '../components/form/input';

const Setting = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full">
            <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
              <h1 className="text-lg font-semibold text-heading">Settings</h1>
            </div>
            <form>
              <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
                <div className="w-full px-0 pb-5 sm:pe-4 md:pe-5 sm:w-4/12 md:w-1/3 sm:py-8">
                  <h4 className="text-base font-semibold text-body-dark mb-2">
                    Information
                  </h4>
                  <p className="text-sm text-body">
                    Change your store information from here
                  </p>
                </div>
                <div className="p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                  <div className="mb-5">
                    <Label name="site_title" title="Store Name" />
                    <Input type="text" name="site_title" />
                  </div>
                  <div className="mb-5">
                    <Label name="paypal" title="Paypal email" />
                    <Input type="email" name="paypal" />
                  </div>
                  <div className="mb-5">
                    <Label name="mpesa" title="Mpesa phone" />
                    <Input type="tel" name="mpesa" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Setting;
