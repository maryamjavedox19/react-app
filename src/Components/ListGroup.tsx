function ListGroup() {
    let items = [
        "New York",
        "sans francisco",
        "Tokyo",
        "London",
        "Paris"
    ];
    items = [];


    return (
        <>
            <h1>List</h1>
            {/*works as if else*/}
            {
            items.length === 0 && <p>No item found</p>
        }
            {/*if condition is true return p tag if condition is false nothing will rendered on screen*/}

            <ul className="list-group">
                {
                items.map((item) => (
                    <li key={item}>
                        {item}</li>
                ))
            }
                {" "} </ul>
        </>
    );
}
export default ListGroup;
