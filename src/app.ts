import { Observable, noop, observable, } from 'rxjs'
import { map, filter, shareReplay, tap } from 'rxjs/operators'
//#region Creating my own observable, 
interface Course {
    id:number;
    description:string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category:string;
    lessonsCount:number;
}

let course: Course; 

//making observables to catch some elements
let begginerCourses$:  Observable<Course[]>;
let advancedCourses$:  Observable<Course[]>; 

// to make them with a promise inside

const http$ = createHttpObservable('someUrl');

//To get an element from the response
const courses$ = http$.pipe(
    // to debug you can use tap and log each step do you want to see, or use this debug function that is declare later in this code
    debug(RxJsLoggingLevel.INFO, "Search").
    map( res =>  Object.values(res["payload"])),
    //SahreReplay share the excecution of the observable betwen multiple observers
    shareReplay()
);

this.begginerCourses$.pipe(

    filter(course  => course.category === 'BEGGINER'),
);

this.advancedCourses$.pipe(
    
    filter(course => course.category === 'ADVANCED'),
    );

http$.subscribe(
    courses => console.log(courses),
    //No Operation = noop
    noop,
    () => console.log('completed') 

);

//#endregion

//#region DEBUG

export enum RxJsLoggingLevel{
    TRACE,DEBUG,INFO,ERROR
}
let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLoggingLevel){
    rxjsLoggingLevel= level;
}

export const debug = (level: number, message: string)=> (observable: Observable<any>)=> source
.pipe(
    tap(val =>{

            if(level >= rxjsLoggingLevel ){
                console.log(message + ':',  val);
            }
    })
);


//#endregion

//#region Functions used
function createHttpObservable(url: string){

    return  Observable.create( observer =>{
  
          fetch(url)
          .then(response =>{
              //to see if the request was ok
              return response.json()
          })
          .then(body=>{
              // Save the body of the request on the observer
              observer.next(body);
              //Complete the objserver
              observer.complete();
          })
          .catch(err=>{
              //If some error occurs this will catch them and make something with the error
              observer.error(err);
              
          })
      
      });
  }

//#endregion

