import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/users">Users</Link>
            </li>
        </ul>
    );
};

export default Nav;
