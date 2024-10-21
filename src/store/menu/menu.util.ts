export class MenuUtil {
  static parseByCategorySection(data: any[]) {
    return data.reduce((acc, cur) => {
      const { expand, ...menuItem } = cur;
      const key = expand.category_id.name || expand.category_id[0].name;
      return {
        ...acc,
        [key]: [...(acc[key] || []), menuItem],
      };
    }, {});
  }
}
