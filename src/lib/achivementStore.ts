import { makeAutoObservable,/*  autorun  */} from "mobx";

class AchivementStore {
	achivementsQueue: number[] = [];

	constructor() {
		makeAutoObservable(this);
		// autorun(() => {
		// console.log(this.achivementsQueue);
		// });
	}

	addAchivement(achivement: number) {
		//prevent duplicates
		if (this.achivementsQueue.includes(achivement)) return;
		this.achivementsQueue.push(achivement);
	}

	removeAchivement(achievement: number) {
		this.achivementsQueue = this.achivementsQueue.filter((x) => x != achievement);
	}
}

export const achivementStore = new AchivementStore();
