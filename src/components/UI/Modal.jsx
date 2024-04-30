import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, classname, onClose}) {
    const dialogRef = useRef();

    useEffect(()=>{
        const modal = dialogRef.current;
        if(open){
            modal.showModal();
        }

        return () =>  modal.close();
    },[open]);
  return createPortal(
    <dialog ref={dialogRef} className={`modal ${classname ?? ''}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
