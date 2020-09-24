import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

//create a counter button
function Counter ({ count, onClick }) {
    return ( 
        <button type="button" onClick={onClick}>
            Click me!
            (
            { count }
            )
        </button>
    )
}

//create Buttons
function Button(props) {
    const { children } = props
    return (
        <button type="button">
           {children}
        </button>  
);
}

function Buttons() {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((i) => (
                <Button key={i}>
                    {i}
                </Button>
            ))}
        </p>
    );
}

//Drawing UI
function Page ({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Counter 
                count={count}
                onClick={onClick}
            />
            <Buttons count={count}
                onClick={onClick}/>
        </div>
        );
}                                                                                                                                                                                                                                                                 

//Operate counting & return Page
function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick() {
        setState({
            count: count + 1,
 });
    }

    return (
        <Page
        count={count}
        onClick={handleClick} nhb
        />
    );

}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);

