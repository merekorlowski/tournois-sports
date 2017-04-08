
export class ServiceValidator {
	validate(element) {
		for (let attribut in element) {
			if (element[attribut] === null || element[attribut] === '' || element[attribut] === undefined) {
				return false;
			}
		}
		return true;
	}
}
