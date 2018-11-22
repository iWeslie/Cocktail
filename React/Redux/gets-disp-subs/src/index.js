import React from 'react';
import ReactDOM from 'react-dom';


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        // notify every changed listener by calling it
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        // keep track of all the changed listeners
        listeners.push(listener)
        //  unsubscribe a listener
        return () => {
            listeners = listeners.filter(l => l !== listener)
        };
    }

    return { getState, dispatch, subscribe };
}

const store = createStore(counter)
//
const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
            onIncrement={() =>
                store.dispatch({ type: 'INCREMENT' })
            }
            onDecrement={() =>
                store.dispatch({ type: 'DECREMENT' })
            }
        />,
        document.getElementById('root')
    )
}

// console.log(document.body.innerText);
store.subscribe(render)
render()
