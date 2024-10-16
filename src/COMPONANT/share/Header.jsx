const Header = () => {
  return (
    <div>
      <div className="flex justify-center py-2 pt-5">
        <img
          src="https://i.ibb.co/pRF10Rj/asikbhai-removebg-preview.png"
          alt="Your Logo"
          className="w-32 rounded-full border-white border-2"
        />
      </div>
      <div className="w-2/3 relative mx-auto mt-2">
        <div className="absolute right-0 bottom-2 flex gap-3 text-white">
          <a
            href="https://www.facebook.com/saidurrahmanasik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/saidur-rahman-asik-aa2417218/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 font-serif"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.behance.net/saidurrahmanasik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 border-2 rounded"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9.24h-5.74V7.21H22V4.4h-8.18v15.2H22v-2.81h-5.74v-2.03H22v-3.52zm-10.43 3.67c0-1.88-1.24-2.56-2.62-2.56H5.63v5.09h3.29c1.49 0 2.65-.88 2.65-2.53zm0-4.57c0-1.44-.98-2.24-2.5-2.24H5.63v4.37h3.26c1.5 0 2.68-.72 2.68-2.13zM24 0H0v24h24V0z"
                fill="none"
              />
              <path d="M9.15 10.34H5.63V8.22h3.02c1.52 0 2.5.81 2.5 2.24 0 1.41-1.18 2.13-2.68 2.13zm-.23 5.43H5.63v-2.56h2.95c1.38 0 2.62.68 2.62 2.56 0 1.65-1.16 2.53-2.65 2.53zM16.26 12.9v2.03H22v2.81h-8.18V4.4H22v2.81h-5.74v2.03H22v3.52z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/saidurrahmanasik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <hr className="w-full border-t-2 border-gray-300" />
      </div>

<nav className="flex justify-center items-center gap-4 py-2">
  <a
    href="/"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    Home
  </a>
  <a
    href="/work/fonts"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    My Works
  </a>
  <a
    href="services"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    Services
  </a>
  <a
    href="products"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    Products
  </a>
  <a
    href="contact"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    Contact
  </a>
  <a
    href="faq"
    className="text-white font-bold rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
  >
    FAQ
  </a>
</nav>


    </div>
  );
};

export default Header;
