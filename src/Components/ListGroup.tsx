import {MouseEvent} from "react"; // to let it know what type of event we're using

function ListGroup() {
    let items = [
        "New York",
        "sans francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    // event handler
    const handleClick = (event : MouseEvent) => {
        console.log(event)
    }

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
                items.map((item, index) => (
                    <li className="list-group-item"
                        key={item}
                        onClick={handleClick}>
                        {item}</li>
                ))
            }
                {" "} </ul>
        </>
    );
}
export default ListGroup;
