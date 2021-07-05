function Item() {
    return <li>Je suis un item</li>
}

function App() {
    return (
        <ul className="food">
            <Item/>
            <Item/>
            <Item/>
        </ul>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));