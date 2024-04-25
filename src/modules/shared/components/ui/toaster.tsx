import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import errer from '../../assets/icons/toast/errer.svg';
import info from '../../assets/icons/toast/info.svg';
import CheckCircle from '../../assets/icons/toast/succes.svg';
import warning from '../../assets/icons/toast/warning.svg';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {props.variant === 'success' && <img src={CheckCircle}></img>}
            {props.variant === 'warning' && <img src={warning}></img>}
            {props.variant === 'info' && <img src={info}></img>}
            {props.variant === 'error' && <img src={errer}></img>}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
