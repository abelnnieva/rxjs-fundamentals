import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { pauseButton, setCount, startButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');

let interval$ = interval(1000);
let subscription;

start$.subscribe(() => {
  subscription = interval$.subscribe(setCount);
});

pause$.subscribe(() => {
  subscription.unsubscribe();
});
