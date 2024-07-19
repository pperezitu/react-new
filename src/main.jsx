import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormCustomHooks } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {FocusScreen} from "./04-useRef/FocusScreen";
import {Layout} from "./05-uselayout/Layout";
import {Memorize} from "./06-memos/Memorize";
import {MemoHook} from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	// <FormCustomHooks />
	//    <MultipleCustomHooks />
	//  <Layout />
	// <Memorize/>
	<MemoHook/>
	// </React.StrictMode>
)
