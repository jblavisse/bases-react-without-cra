function Navbar() {
    return(
        <nav>
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service qui tue</a>
        </nav>
    )
}

function App() {
    return (
        <section id="services" className="section">
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <Navbar/>
            <h1 className="is-primary">Bienvenue sur mon app React.Js</h1>
        </section>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));