import React from "react";

type IconButtonProps = {
    name: string; 
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconButton: React.FC<IconButtonProps> = ({
    name,
    text,
    onClick,
}) => {
    return (
        <button>
            type="button"
            <span class="material-symbols-outlined">
                {name} {text}
            </span>
            onClick={onClick}
        </button>
    );
};

export default IconButton;