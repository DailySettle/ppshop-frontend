import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'pps-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  showSidebar = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.pipe(
      tap(console.log)
    );
  }

}
