
export class FilterValueConverter {
  toView(array, filter) {
    return array.filter(item => {
      for (let attribute in item) {
        if (item[attribute].toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      }
    });
  }
}
