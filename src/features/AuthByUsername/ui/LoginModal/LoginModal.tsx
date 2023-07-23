import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { LoginFormAsync } from "../LoginFrom/LoginForm.async";
import styles from "./LoginModal.module.scss";

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
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
