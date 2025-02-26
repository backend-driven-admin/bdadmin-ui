import React from 'react';
import {cn} from "../lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<Props> = ({ ...props }) => {
    return (
        <input className={cn("bg-white border border-black/10 rounded-lg px-4 py-2 duration-300 enabled:hover:border-black/20 focus-visible:text-red-500 focus:outline focus:outline-amber-500")} {...props} />
    );
};

export default Input;