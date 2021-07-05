function App() {
    /*
    const title = React.createElement("h1",{className: "is-primary"}, "Bienvenue sur mon app React.JS");
    const section = React.createElement("section",{id:"services", className:"section"}, title);
    */

    return (
        <section id="services" className="section">
            <h1 className="is-primary">Bienvenue sur mon app React.Js</h1>
        </section>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));