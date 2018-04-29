import * as Toastr from 'toastr';

export class NotificationService {
  constructor() {
    Toastr.options.closeButton = true;
    Toastr.options.closeDuration = 1000;
  }

  success(msg) {
    Toastr.success(msg);
  }

  info(msg) {
    Toastr.info(msg);
  }

  warning(err) {
    Toastr.warning(err.reason ? err.reason : 'Unknown error');
  }

  error(err) {
    Toastr.error(err.reason ? err.reason : 'Unknown error');
  }
}
