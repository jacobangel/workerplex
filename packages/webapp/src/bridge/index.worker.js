import { createStore } from 'redux';
import reducers from './reducers';
import { fetchGallery } from './actions';


let store = createStore(reducers);

// onmessage = function(e) {
// 	console.log('[bottom]', e);
// }
// window.onmessage = function(e) {
//   var port = e.ports[0];

//   port.onmessage = function(e) {
//     var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//     port.postMessage(workerResult);
//   }
// }

store.subscribe((e) => {
	console.log('[bottom] store change', e);
	postMessage({
		type: 'STATE_UPDATE',
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