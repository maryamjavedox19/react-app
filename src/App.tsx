// ----------------list group-------------------

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

// -----------Alert---------------------------
// import Alert from "./Components/Alert";

// function App() {
//     return (
//         <div>
//             <Alert>
//                 Hello
//                 <span>World</span>
//                 {/* this is complex structure thats why we using reactnode in app for this */} </Alert>
//         </div>
//     );
// }


// BUTTON - ALERTING
import {useState} from "react";
import Button from "./Components/Button";
import Alert from "./Components/Alert";

interface Props {
    children: string
}

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div> {
            alertVisible && <Alert onClose={
                () => setAlertVisibility(false)
            }>My alert</Alert>
        }
            {/*<Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button>*/}
            <Button color="primary"
                onClick={
                    () => setAlertVisibility(true)
            }>My Button</Button>
        </div>
    )
}


export default App;
