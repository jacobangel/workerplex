import { createStore } from 'redux';
import reducers from './reducers';

export function fetchState() {
	return fetch('/gallery/all')
		.then(res => res.json())
}
let store = createStore(reducers);

export function getState() {

	return store.getState();
}
