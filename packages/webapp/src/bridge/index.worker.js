
export function expensive(time) {
	let start = Date.now(),
		count = 0
	while (Date.now() - start < time) count++
	return count
}

export function fetchData() {
	return fetch('/gallery/all')
	  .then(res => res.json());
}