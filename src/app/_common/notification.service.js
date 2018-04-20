export class NotificationService {
  constructor(Toastr) {
    this.toastrSrv = Toastr;
    Toastr.options.closeButton = true;
    Toastr.options.closeDuration = 1000;
  }

  success(msg) {
    this.toastrSrv.success(msg);
  }

  info(msg) {
    this.toastrSrv.info(msg);
  }

  warning(err) {
    this.toastrSrv.warning(err.reason ? err.reason : 'Unknown error');
  }

  error(err) {
    this.toastrSrv.error(err.reason ? err.reason : 'Unknown error');
  }
}
