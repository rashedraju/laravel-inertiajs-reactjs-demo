import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

const Nav = () => {
    const { component } = usePage();

    return (
        <ul>
            <li>
                <Link
                    href="/"
                    className={`text-decoration-none ${
                        component === "Home"
                            ? "text-decoration-underline text-success"
                            : ""
                    }`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/users"
                    className={`text-decoration-none ${
                        component === "Users"
                            ? "text-decoration-underline text-success"
                            : ""
                    }`}
                >
                    Users
                </Link>
            </li>

            <li>
                <Link
                    href="/logout"
                    as="button"
                    method="post"
                    className="nav-link link p-0 m-0 border-0 bg-white"
                >
                    Logout
                </Link>
            </li>
        </ul>
    );
};

export default Nav;
