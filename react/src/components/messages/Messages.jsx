import {
  AlertIcon,
  CheckCircleIcon,
  XCircleIcon,
  InfoIcon,
} from "@primer/octicons-react";
import "../../index.css";

export const ErrMessage = ({ message }) => (
  <div className="error-message">
    <XCircleIcon className="icon-message" size={16} />
    {message}
  </div>
);

export const SuccessMessage = ({ message }) => (
  <div className="success-message">
    <CheckCircleIcon className="icon-message" size={16} />
    {message}
  </div>
);

export const WarningMessage = ({ message }) => (
  <div className="warning-message">
    <AlertIcon className="icon-message" size={16} />
    {message}
  </div>
);

export const InfoMessage = ({ message }) => (
  <div className="info-message">
    <InfoIcon className="icon-message" size={16} />
    {message}
  </div>
);

