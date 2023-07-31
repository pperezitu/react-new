import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormCustomHooks } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <FormCustomHooks></FormCustomHooks>
    <MultipleCustomHooks></MultipleCustomHooks>
  // </React.StrictMode>
)
