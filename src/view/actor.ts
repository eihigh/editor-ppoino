import { v, text, willRender } from "../index";
import * as model from "../model/actor";

// アクター情報編集画面

const actorProfile = (a: model.Actor) =>
	v("div", { id: 'actor-profile' })(

	);

let count = 0;
const clickItem = (e: Event) => {
	willRender();

	e.preventDefault();
	count++;
};

const actorListItem = (a: model.Actor) =>
	v("li", { onclick: clickItem })(

	);

const actorList = () =>
	v("ul")(
		...model.actors.map(actorListItem),
	);

export const actor = {
	title: "アクター",
	view: () =>
		v("main")(
			text("hoge"),
			v("aaa")(),
		),
};