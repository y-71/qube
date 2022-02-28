import App from './App.svelte';
import * as qube from './qube';

const app = new App({target: document.body});
qube.pack('')

export default app;