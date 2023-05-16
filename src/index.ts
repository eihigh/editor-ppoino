import './index.css';

import { h, patch } from "superfine";
import { root } from "./view/root";

export { text } from "superfine";

// Declare types
type VNode = { tag: string };
declare function h(t: string, p: { [key: string]: any }, c: VNode[]): VNode;
declare function text(t: string): VNode; // TODO: this seems not working

// An alternative prettier-able syntax for h
export const v = (t: string, p = {}) => (...c: VNode[]) => h(t, p, c);

// Render the vdom tree efficiently
let _willRender = false;

const render = () => {
	patch(
		document.getElementById("app"),
		root(),
	);
	_willRender = false;
}

export const willRender = () => {
	if (_willRender) { return; }
	_willRender = true;
	requestAnimationFrame(render);
}

render();