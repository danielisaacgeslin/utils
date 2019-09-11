export const delayEx = (fn, delayTime: number): (...args: any[]) => void => {
  let lastRun: number = new Date(0).getTime();
  return (...args) => {
    const nextRun = delayTime > Date.now() - lastRun ? Math.max(Date.now(), lastRun) + delayTime : Date.now();
    const nextRunDelay = nextRun - Date.now();
    lastRun = nextRun;
    setTimeout(() => fn(...args), Math.max(nextRunDelay, 0));
  };
 };
