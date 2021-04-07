import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit, OnDestroy{

  @Output() onTyping = new EventEmitter<string>()
  @Input() value: string = ''
  debounce: Subject<string> = new Subject<string>()
  
  ngOnInit(): void {
      this.debounce
          .pipe(debounceTime(300))
          .subscribe(filter => {
            console.log(filter)
            this.onTyping.emit(filter)
          })
  }

  ngOnDestroy(): void {
      this.debounce.unsubscribe()
  }

}
