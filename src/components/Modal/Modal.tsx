interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    className?: string;
    [key: string]: unknown; // Para permitir props adicionales
  }
  
  export function Modal({
    children,
    isOpen = true,
    onClose,
    className = "",
    ...props
  }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 bg-modal-overlay opacity-50"
          onClick={onClose}
        ></div>
        <div className="bg-modal-background rounded-lg shadow-lg z-10 p-6 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;
  