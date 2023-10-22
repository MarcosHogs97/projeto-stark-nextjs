import React from "react";
import { Icon } from '@iconify/react';
import DropdownSobre from "./dropdownSobre";
import DropdownArtefatos from "./dropdownArtefatos";


function navegation() {
    return (
        <main className="flex row">
            <nav>
                <ul className="flex row items-center gap-5 p-2">
                    <Icon icon="file-icons:wolfram" color="black" width="50" height="50" />
                    <a className="px-4 py-2 text-sm rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" href="http://">Home</a>  
                    <DropdownSobre />
                    <DropdownArtefatos />                
                </ul>
            </nav>
        </main>
    )

};

export default navegation;