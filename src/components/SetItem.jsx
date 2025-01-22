import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function SetItem() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [set, setSet] = useState({});

    useEffect(() => {
        async function fetchSets() {
            try {
                const response = await fetch(`http://145.24.223.249:8100/sets/` + id, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });

                const data = await response.json();
                console.log(data);
                setSet(data);
            } catch (error) {
                console.error("Er is een fout opgetreden:", error);
            }
        }

        fetchSets();
    }, [id]);

    const deleteLegoSet = () => {
        async function deleteSet() {
            try {
                const response = await fetch(`http://145.24.223.249:8100/sets/` + id, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                    },
                });

                navigate("/");
            } catch (error) {
                console.error("Er is een fout opgetreden:", error);
            }
        }

        deleteSet();
    };

    return (
        <div className="max-w-lg mx-auto bg-yellow-100 p-6 rounded-lg shadow-md border border-yellow-300 my-8">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                LEGO Set Details
            </h1>
            <div className="space-y-4">
                <p className="text-lg font-medium text-gray-800">
                    <span className="font-bold text-red-600">Name:</span> {set.name}
                </p>
                <p className="text-lg font-medium text-gray-800">
                    <span className="font-bold text-red-600">Brand:</span> {set.brand}
                </p>
                <p className="text-lg font-medium text-gray-800">
                    <span className="font-bold text-red-600">Set Number:</span>{" "}
                    {set.setNumber}
                </p>
                <p className="text-lg font-medium text-gray-800">
                    <span className="font-bold text-red-600">Release Year:</span>{" "}
                    {set.releaseYear}
                </p>
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={deleteLegoSet}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition ease-in-out duration-200"
                >
                    Delete
                </button>
                <Link
                    to={`/set/${id}/edit`}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200"
                >
                    Update
                </Link>
            </div>
        </div>
    );
}

export default SetItem;