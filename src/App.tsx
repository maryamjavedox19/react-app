// list group

// import ListGroup from "./Components/ListGroup";

// function App() {
//     let items = [
//         "New York",
//         "sans francisco",
//         "Tokyo",
//         "London",
//         "Paris"
//     ];

//     const handleSelectedItem = (item : string) => {
//         console.log(item);
//     }

//     return (
//         <div>
//             <ListGroup items={items}
//                 heading="Cities"
//                 onSelectedItem={handleSelectedItem}/>
//         </div>
//     );
// }

import Alert from "./Components/alert";

function App() {
    return (
        <div>
            <Alert/>
        </div>
    );
}
export default App;
