import ReactDom from "react-dom"
function Modal({onClose , children , actionBar}) {
    return ReactDom.createPortal(
        <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80">
      <div className="absolute inset-40 bg-white flex items-center justify-center rounded">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
    );

}
export default Modal;
