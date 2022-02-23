import Nav from "../Shared/Nav";
import { Link } from "@inertiajs/inertia-react";

const Users = ({ time }) => {
    return (
        <div>
            <Nav />
            <h1>Users</h1>
            <div style={{ marginTop: "50rem" }}>Current time: {time} </div>
            <Link href="/users" preserveScroll>
                Refresh
            </Link>
        </div>
    );
};

export default Users;
