import Nav from "../Shared/Nav";

const Home = ({ name }) => {
    return (
        <div>
            <Nav />
            <h1> Wellcome, {name} </h1>
        </div>
    );
};

export default Home;
