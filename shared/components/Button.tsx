"use client"
interface ButtonProps {
    title: string;
    buttonType: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    title = "",
    buttonType = "button",
    onClick,
    className = "",
}) => {
    return (
        <button
            className={`bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-4 rounded cursor-pointer w-fit ${className}`}
            type={buttonType}
            onClick={onClick}
        >
            {title}
        </button>
    );
};
