import {useState} from "react";
function ListGroup() {
    let items = [
        "New York",
        "sans francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    // our component have state that will change over time
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // -1 beacuse array index starts from 0
    // arg: variable we want to change, function where we change it


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
                    <li className={
                            selectedIndex === index ? "list-group-item active" : "list-group-item"
                        }
                        key={item}
                        onClick={
                            () => {
                                setSelectedIndex(index)
                            }
                    }>
                        {item} </li>
                ))
            }
                {" "} </ul>
        </>
    );
}
export default ListGroup;
