import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left w-full">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-blue-100"
            >
                Downloads
            </button>
            {isOpen && (
                <div className="absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <a
                            href="/sobre"
                            className="block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100" 
                        >
                            Documentação <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/sobre"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            Canvas <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/equipe"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            MockUp <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <a
                            href="/contato"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            Pitch <Icon icon="line-md:download-loop" color="black" width="24" height="24" />
                        </a>
                        <br />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;