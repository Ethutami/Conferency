interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    termandcondition: string | null | undefined
}

export const Modal = ({ isOpen, onClose, termandcondition }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-opacity-30 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-11/12 max-w-md">
                <h2 className="text-lg font-semibold mb-4">Term and Conditions</h2>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                    {termandcondition}
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 text-red-500 rounded hover:text-red-200"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
