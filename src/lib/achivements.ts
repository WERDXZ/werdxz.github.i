import { achivementStore } from "@/lib/achivementStore";
export const achivements = [
	["You Find My Name", "You literally find my real name"],
	["Something", "It was just a test"]
];

export function init() {
	if (window) {
		window.localStorage.setItem("achivements", "0000000000000000");
	}
}

export function parseAchivements(): string[] | null {
	if (window) {
		let achivements = window.localStorage.getItem("achivements");
		if (achivements == null) {
			init();
			achivements = "0000000000000000";
		}
		//split by 4 digits and convert to binary
		let achivementsArray = achivements
			.split("")
			.map((x) => parseInt(x, 16).toString(2).padStart(4, "0"));

		return achivementsArray;
	}
	return null;
}

export function setAchivements(achivements: string[]) {
	if (window) {
		//convert to hex
		let achivementsString = achivements
			.map((x) => parseInt(x, 2).toString(16))
			.join("");
		window.localStorage.setItem("achivements", achivementsString);
		return;
	}
}

export function register(n: number) {
	if (window) {
		/* if not exist */

		let achivements = parseAchivements();
		if (achivements == null) return;
		let current = achivements[n / 4];
		let newAchivements = current.split("");
		if (newAchivements[n % 4] == "1") return;
		newAchivements[n % 4] = "1";
		achivements[n / 4] = newAchivements.join("");
		achivementStore.addAchivement(n);
		setAchivements(achivements);
		return;
	}
}


