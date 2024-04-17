import { type ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'modules/shared/components/ui/dialog';
import { useModal } from './modal-provider';

interface ModalContainerPropsType {
  children: ReactNode;
  title: string;
}

function ModalContainer({ children, title }: ModalContainerPropsType) {
  const { isOpen, setClose } = useModal();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setClose();
      }}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[495px] min-w-[40rem]">
        <DialogHeader>
          <DialogTitle className="text-[16px] capitalize p-4 leading-5 font-medium text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default ModalContainer;
