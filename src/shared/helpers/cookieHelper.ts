export class CookieHelper {
  Set(name: string, value: string, exDays: number) {
    const d = new Date();
    const expires: string = "expores=" + d.toUTCString();

    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  Get(name: string) {
    const cName = name + "=";
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cName) === 0) {
        return c.substring(cName.length, c.length);
      }
    }
    return "";
  }

  Remove(name: string) {
    document.cookie = name + "=; max-age=0;";
  }
}
