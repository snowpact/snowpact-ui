import { Toast as ToastComponent } from './Toast';
import { ToastToggle as ToastToggleComponent } from './ToastToggle';

ToastComponent.displayName = 'Toast';
ToastToggleComponent.displayName = 'Toast.Toggle';

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggleComponent
});
