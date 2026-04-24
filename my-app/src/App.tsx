import './App.css'
import { useState } from 'react';
import { TextInput } from './components/TestInput/Textinput';

function App() {
return (
    <div className="App">
        <h1>Welcome to the Text Analyzer App!</h1>
        <p>Type some text in the input box below to see character and word counts.</p>
    </div>
)
}
export default App