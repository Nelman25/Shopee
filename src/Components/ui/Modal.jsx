import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const Modal = ({ children, open, className = "", onClose }) => {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		if (open) {
			modal.showModal();
		}

		return () => modal.close();
	}, [open]);

	return createPortal(
		<dialog ref={dialog} className={` ${className}`} onClose={onClose} >
			{children}
		</dialog>,
		document.getElementById("modal")
	);
};

export default Modal;
