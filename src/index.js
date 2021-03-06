import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
<div className="App">
    <h1>Hello Parcel x React</h1>
</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}