import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErrorStatusEnum} from '@enums/error-status.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private msg: NzMessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
          switch (error.status) {
            case ErrorStatusEnum.BadRequest:
              Object.keys(error.error).forEach(key => {
                if (typeof error.error[key] !== 'string') {
                  Object.values(error.error[key]).forEach(err => {
                    this.msg.error(`${key[0].toUpperCase()}${key.substr(1)}: ${err}`);
                  });
                } else {
                  this.msg.error(`${key[0].toUpperCase()}${key.substr(1)}: ${error.error[key]}`);
                }
              });
              break;
            case ErrorStatusEnum.Unauthorized:
              localStorage.clear();
              this.router.navigate(['auth', 'login']);
              break;
            case ErrorStatusEnum.Forbidden:
              this.router.navigate(['result', 'permission-denied']);
              break;
            case ErrorStatusEnum.NotFound:
              this.router.navigate(['result', 'not-found']);
              break;
            case ErrorStatusEnum.InternalServerError:
              this.router.navigate(['result', 'server-error']);
              break;
            default:
              this.router.navigate(['result', 'faild-submission']);
          }

          return throwError(error);
        })
      );
  }
}
