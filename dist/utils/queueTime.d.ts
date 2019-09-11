import { Observable } from 'rxjs';
export declare const queueTime: (timeWindow: number) => <T>(source$: Observable<T>) => Observable<T>;
