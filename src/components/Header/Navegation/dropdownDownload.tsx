import React, { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from '@iconify/react';

const DropdownMenu: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="w-full">
            <button
                onClick={openModal}
                className="px-4 py-2 w-full text-left text-md font-semibold text-gray-700 hover:bg-gray-400 hover:text-white"
            >
                Downloads
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Downloads Modal"
                overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
                className="modal-content w-full max-w-md mx-auto bg-white rounded-lg shadow-lg"
            >
                <div className=" py-4 px-6">
                    <button
                        onClick={closeModal}
                        className="top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        <Icon icon="akar-icons:close" width="24" height="24" />
                    </button>
                    <h2 className="text-2xl font-semibold mb-4">Downloads</h2>
                    <div className="py-2">
                        <a
                            href="/sobre"
                            className="flex justify-between rounded-md px-3 py-4 text-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-white"
                        >
                            Documentação <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/sobre"
                            className="flex justify-between rounded-md px-3 py-4 text-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-white"
                        >
                            Canvas <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/equipe"
                            className="flex justify-between rounded-md px-3 py-4 text-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-white"
                        >
                            MockUp <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/contato"
                            className="flex justify-between rounded-md px-3 py-4 text-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-white"
                        >
                            Pitch <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DropdownMenu;