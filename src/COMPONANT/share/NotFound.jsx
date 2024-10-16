
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13616.jpg?w=740&t=st=1729102508~exp=1729103108~hmac=bdaae777f1fea826031da1b14358213b03c83eb8e7013077a50a96bf6e197a07"
        alt="404 Not Found"
        className="w-3/4 md:w-1/2 lg:w-1/3"
      />
      <h1 className="mt-8 text-4xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-400 rounded-md hover:bg-red-500 hover:font-semibold transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
