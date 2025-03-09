import { useEffect, useState } from "react";
import DetailComponent from "./DetailComponent.jsx";

function SetsComponent() {
    const [sets, setSets] = useState([]);

    useEffect(() => {
        async function fetchSets() {
            try {
                const response = await fetch("http://localhost:8100/sets/", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });

                const data = await response.json();
                setSets(data.items); // Zorg dat je toegang hebt tot het juiste object
            } catch (error) {
                console.error("Er is een fout opgetreden:", error);
            }
        }

        fetchSets();
    }, []);

    const setsDetails = sets?.map((set) => (
        <DetailComponent key={set.id} set={set} />
    ));

    return (
        <div className="container mx-auto mt-6">
            <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">
                LEGO Sets
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {setsDetails}
            </div>
        </div>
    );
}

export default SetsComponent;