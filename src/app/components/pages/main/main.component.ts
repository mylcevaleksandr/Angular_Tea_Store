import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("content") myModal: any;
  private observable: Observable<any>
  private subscription: Subscription | null = null


  constructor(private modalService: NgbModal) {
    this.observable = new Observable<any>((observer) => {
      const modalTimeOut = setTimeout(() => {
        observer.next(this.myModal)
      }, 10000)
      return {
        unsubscribe() {
          clearTimeout(modalTimeOut)
        }
      }
    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.subscription = this.observable
      .subscribe((content) => {
        this.modalService.open(content)
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  close() {
    this.modalService.dismissAll()
  }

  goToCatalog() {
  }

}
