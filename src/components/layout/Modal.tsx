import React from "react";
import FlowLayout from "./FlowLayout";
import "./Modal.scoped.scss";

interface IModalProps {
  header: string,
  footer?: JSX.Element,
  onClose(): void,
}

const Modal: React.FC<IModalProps> = ({ header, children, footer, onClose }) => {
  return (
    <>
      <div className="fade"></div>
      <div className="modal">
        <FlowLayout
          header={
            <div className="header">
              <span>
                {header}
              </span>
              <span
                className="close-button"
                onClick={() => onClose()}
              >
                X
              </span>
            </div>
          }
          footer={(
            <div className="footer">
              {footer}
            </div>
          )}
        >
          <div className="body">
            {children}
          </div>
        </FlowLayout>
      </div>
    </>
  )
}

export default Modal;