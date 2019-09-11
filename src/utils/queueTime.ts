import { Subject, Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { delayEx } from './delayEx';

export const queueTime = (timeWindow: number) => <T>(source$: Observable<T>) => {
  const subject = new Subject<T>();
  const queue = delayEx((fn: () => void) => fn(), timeWindow);
  source$.pipe(
    delay(0),
    finalize(() => queue(() => subject.complete()))
  ).subscribe(item => queue(() => subject.next(item)));
  return subject.asObservable();
};
