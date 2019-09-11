export const memorize = <T>(fn: T, maxCacheSize: number = 500,  cacheDuration: number = 0) => {
  let cache: { [key: string]: any } = {};
  if (cacheDuration) setInterval(() => cache = {}, cacheDuration);
  return function (...args: any[]) { // tslint:disable-line
    const key: string = JSON.stringify(args);
    if (cache[key] !== (void 0)) return cache[key];
    try {
      return cache[key] = (fn as any)(...args);
    } finally {
      const keys = Object.keys(cache);
      if (keys.length > maxCacheSize) delete cache[keys[0]];
    }
  } as any;
};
