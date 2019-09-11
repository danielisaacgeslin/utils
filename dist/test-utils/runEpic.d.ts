import { Observable } from 'rxjs';
export declare const runEpic: <Action>(obs$: Observable<Action>, callback: (actionList: Action[]) => void, delay?: number) => Promise<void>;
