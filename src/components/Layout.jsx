import { Link } from "react-router";
import { Outlet } from "react-router";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-yellow-50">
            <header className="bg-blue-700 text-white py-4">
                <nav className="container mx-auto flex justify-between items-center px-4">
                    <Link
                        to={`/`}
                        className="text-lg font-bold hover:text-yellow-300 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to={`/set/create`}
                        className="text-lg font-bold hover:text-yellow-300 transition duration-200"
                    >
                        Create New LEGO Set
                    </Link>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-6">
                <Outlet />
            </main>
            <footer className="bg-blue-700 text-white text-center py-4 mt-8">
                <p className="text-sm">
                    LEGO® is a trademark of the LEGO Group of companies, which does not
                    sponsor, authorize, or endorse this application.
                </p>
            </footer>
        </div>
    );
}
export default Layout;