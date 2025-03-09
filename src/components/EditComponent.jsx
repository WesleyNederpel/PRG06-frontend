import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

function EditComponent() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [set, setSet] = useState({
        name: "",
        brand: "",
        setNumber: "",
        releaseYear: "",
    });

    useEffect(() => {
        async function fetchSet() {
            try {
                const response = await fetch("http://localhost:8100/sets/" + id, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });
                const data = await response.json();
                setSet(data);
            } catch (error) {
                console.error("Er is een fout opgetreden:", error);
            }
        }

        fetchSet();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSet({
            ...set,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveLegoSet();
        navigate("/");
    };

    const saveLegoSet = async () => {
        try {
            const response = await fetch("http://localhost:8100/sets/" + id, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(set),
            });
            const data = await response.json();
            setSet(data);
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-yellow-100 p-6 rounded-lg shadow-md border border-yellow-300 my-8">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                Update Your LEGO Set
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-800 mb-1"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={set.name}
                        onChange={handleInputChange}
                        className="p-2 border bg-yellow-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="brand"
                        className="text-sm font-medium text-gray-800 mb-1"
                    >
                        Brand:
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={set.brand}
                        onChange={handleInputChange}
                        className="p-2 border bg-yellow-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="setNumber"
                        className="text-sm font-medium text-gray-800 mb-1"
                    >
                        Set Number:
                    </label>
                    <input
                        type="text"
                        id="setNumber"
                        name="setNumber"
                        value={set.setNumber}
                        onChange={handleInputChange}
                        className="p-2 border bg-yellow-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="releaseYear"
                        className="text-sm font-medium text-gray-800 mb-1"
                    >
                        Release Year:
                    </label>
                    <input
                        type="text"
                        id="releaseYear"
                        name="releaseYear"
                        value={set.releaseYear}
                        onChange={handleInputChange}
                        className="p-2 border bg-yellow-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200"
                >
                    Update LEGO Set
                </button>
            </form>
        </div>
    );
}

export default EditComponent;