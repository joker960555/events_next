export const stringCapitalizeHelper = (string: string): string => {
	let arrFromString: string[] = [];
	let divider: ' ' | '-';
	if (string.indexOf('-') > 0) {
		arrFromString = string.split('-');
		divider = '-';
	} else {
		arrFromString = string.split(' ');
		divider = ' ';
	}
	return arrFromString
		.map((w) => w[0].toUpperCase() + w.slice(1, w.length))
		.join(divider);
};
