
export class DateValueConverter {
  toView(date) {
		if (date) {
    	return date.split('T')[0];
		}
  }
}
