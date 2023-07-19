import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LoginModal.module.scss";
import { LoginForm } from "../LoginFrom/LoginForm";

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  className,
  isOpen,
  onClose,
}: ILoginModalProps) => (
  <Modal
    className={classNames(styles.LoginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
