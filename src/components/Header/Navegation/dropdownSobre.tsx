import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import arrowDownIcon from '@iconify-icons/mdi/arrow-down';
import arrowUpIcon from '@iconify-icons/mdi/arrow-up';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none active:bg-gray-200"
            >
                Informações{' '}
                <Icon
                    icon={isOpen ? arrowUpIcon : arrowDownIcon}
                    style={{ fontSize: '1.2em' }}
                />
            </button>
            {isOpen && (
                <div className="absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <a
                            href="/sobre"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            Sobre
                        </a>
                        <a
                            href="/equipe"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            Equipe
                        </a>
                        <a
                            href="/contato"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                            Contato
                        </a>                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
