interface ConfirmDialogButton {
  label: string;
  action?(data?: {[key: string]: any}): any;
}

export interface ConfirmDialogData {
  title?: string;
  description?: string;
  confirmButton?: ConfirmDialogButton | undefined;
  dismissButton?: ConfirmDialogButton | undefined;
}
