import Logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-red-500 text-white w-full">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-evenly">
          <div className="mb-6 md:mb-0 md:mt-4">
            <a href="/" className="flex items-center">
              <img src={Logo} className="h-28 w-28 me-3" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Pages
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    Disclaimer
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-5 border-white sm:mx-auto lg:my-5" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              MediSync - San Isidro
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
