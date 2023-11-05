import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("content") myModal: any;
  private observable: Observable<any>
  private subscription: Subscription | null = null


  constructor(private modalService: NgbModal, private router: Router) {
    this.observable = new Observable<any>((observer) => {
      const modalTimeOut = setTimeout(() => {
        observer.next(this.myModal)
      }, 2000)
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
    this.modalService.dismissAll()
    this.subscription?.unsubscribe()
  }

  close() {
    this.modalService.dismissAll()
  }

  goToCatalog() {
    this.router.navigate(['/catalog'])
  }

}
