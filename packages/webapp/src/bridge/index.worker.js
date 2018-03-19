import { createStore } from 'redux';
import reducers from './reducers';
import { fetchGallery, BRIDGE_STATE_UPDATE } from './actions';

let store = createStore(reducers);

store.subscribe((e) => {
	postMessage({
		type: BRIDGE_STATE_UPDATE,
		data: store.getState()
	});
})

export function dispatch(...args) {
	return store.dispatch.apply(store, args);
}

export function getState() {
	return store.getState();
}

export function fetchState() {
	return fetch('/gallery/all')
		.then(res => res.json())
		.then(images => {
			store.dispatch(fetchGallery(images));
			return images;
		});
}