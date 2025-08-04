import ReactDom from "react-dom"
function Modal() {
    return ReactDom.createPortal(
        <div className="absolute inset-0 bg-gray-300 opacity-80">
      <div className="absolute inset-40 bg-white flex items-center justify-center rounded">
        <p>its a modal</p>
      </div>
    </div>,
    document.querySelector(".modal-container")
    );

}
export default Modal;
