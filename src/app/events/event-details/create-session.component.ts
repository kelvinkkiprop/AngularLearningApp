import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../shared";

@Component({
  selector: 'create-session',
  templateUrl: 'create-session.component.html',
  styles: [`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, ..error textarea { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color:#999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-moz-placeholder { color:#999; }
    .error :-moz-input-placeholder { color:#999; }
  `]
})

export class CreateSessionComponent implements OnInit{

  //Variables
  name: any;
  presenter: any;
  duration: any;
  level: any;
  abstract: any;
  newSessionForm: any;

  ngOnInit(): void {
    //set
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400)]) //this.restrictedWords(['foo', 'bar'])])

    //Fill
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    })

  }

  //restrictedWords
  private restrictedWords(words:any){
    return (control: FormControl): {[key:string]: any}=>{
      if(!words){
        return [null];
      }else{
        var invalidWords = words.map((w: any)=>control.value.includes(w) ? w:[null])
        .filter((w: any) => w != null)

        return control.value.includes('foo')
        ? {'restrictedWords': invalidWords.join(',')}
        : [null]
        }

      }

    // return control.value.includes('foo')
    // ? {'restrictedWords': 'foo'}
    // : null
    // }
    // if(control.value.includes('foo')){
    //   return {'restrictedWords': 'foo'}
    // }else{
    //   return {'restrictedWords': null}
    // }

  }

  //saveSession
  saveSession(formValues:any){
    console.log(formValues)
    //set
    let session: ISession ={
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    }

  }

}
