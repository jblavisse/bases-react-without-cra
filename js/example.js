// const {best} = props;

function Navbar({best}) {
    return(
        <nav>
            <a href={best}>Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">{best}</a>
        </nav>
    )
}

function App() {
    return (
        <section id="services" className="section">
            <Navbar best="Service qui tue" />
            <Navbar best="Service de oufguedin" />
            <Navbar best="Service de BG" />
            <Navbar best="Service qui roxe sa maman" />

            <h1 className="is-primary">Bienvenue sur mon app React.Js</h1>
        </section>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));