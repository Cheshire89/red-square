export class Util {
  static formatPhoneNumber(phoneNumberString: string): string | null {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}`;
    }
    return null;
  }

  static sortBy(collection: any[], key: string) {
    return collection.reduce(
      (acc: any, cur: any) => ({
        ...acc,
        [cur[key]]: [...(acc[cur[key]] || []), cur],
      }),
      {}
    );
  }
}
