import { Component, OnInit } from '@angular/core';
import { UserResponse } from '@app/shared/models/user.interface';
import { AuthService } from '@auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private destroy$ = new Subject<any>();
  private nombreUser: string;

  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        this.nombreUser = user?.username;
      });
  }
}
