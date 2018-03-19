# Workerplex

Some simple goals:

- demonstrate an example architecture of `Render UI` <=> `Worker State` <=> `Service Worker` <=> `Persisted Server`
- dockerize it
- learn something

## Notes

- Starting with a super simple app grabbing content from the server.
- Should put the state into a DB and demonstrate how things work.
- Workerize was intersting to setup. Replace all the async stuff with promise based wrappers that talk to a state management app.
- Demonstrate how the worker can talk to the service worker to leverage offline caching scenarios
- This is ideally very interface driven. how do we share those without coupling too much.

- Okay, starting to get my head around what exactly we're doing here. Need to further formalize the relationship between the client and bridge redux instances.

