import { Link } from "react-router";

function DetailComponent({ set }) {
    return (
        <article className="bg-yellow-100 shadow-md rounded-lg p-6 border border-yellow-300">
            <p className="text-sm font-medium text-gray-700">
                ID: <span className="text-red-600 font-bold">{set.id}</span>
            </p>
            <p className="text-lg font-extrabold text-blue-800 mt-2">{set.name}</p>
            <p className="text-sm font-medium text-gray-700 mt-1">
                Brand: <span className="text-red-600">{set.brand}</span>
            </p>
            <Link
                to={`/set/${set.id}`}
                className="block mt-4 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-200"
            >
                Details
            </Link>
        </article>
    );
}

export default DetailComponent;