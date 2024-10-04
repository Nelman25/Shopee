import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const Modal = ({ children, open, className = "" }) => {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		}
	}, [open]);

	return createPortal(
		<dialog ref={dialog} className={` ${className}`}>
			{children}
		</dialog>,
		document.getElementById("modal")
	);
};
  
export default Modal;
