import { Modal as ModalComponent } from './Modal';
import { ModalBody as ModalBodyComponent } from './ModalBody';
import { ModalFooter as ModalFooterComponent } from './ModalFooter';
import { ModalHeader as ModalHeaderComponent } from './ModalHeader';

ModalComponent.displayName = 'Modal';
ModalHeaderComponent.displayName = 'Modal.Header';
ModalBodyComponent.displayName = 'Modal.Body';
ModalFooterComponent.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeaderComponent,
  Body: ModalBodyComponent,
  Footer: ModalFooterComponent
});
