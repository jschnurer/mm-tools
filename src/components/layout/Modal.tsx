import classList from "helpers/styleHelpers";
import React from "react";
import FlowLayout from "./FlowLayout";
import styles from "./Modal.module.scss";

interface IModalProps {
  header: string,
  footer?: JSX.Element,
  onClose(): void,
  children: React.ReactNode,
}

const Modal: React.FC<IModalProps> = ({ header, children, footer, onClose }) => {
  return (
    <>
      <div className={classList(styles.fade)}></div>
      <div className={classList(styles.modal)}>
        <FlowLayout
          header={
            <div className={classList(styles.header)}>
              <span>
                {header}
              </span>
              <span
                className={classList(styles["close-button"])}
                onClick={() => onClose()}
              >
                X
              </span>
            </div>
          }
          footer={(
            <div className={classList(styles.footer)}>
              {footer}
            </div>
          )}
        >
          <div className={classList(styles.body)}>
            {children}
          </div>
        </FlowLayout>
      </div>
    </>
  )
}

export default Modal;