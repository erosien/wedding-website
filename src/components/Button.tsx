interface ButtonProps {
    children: React.ReactNode;
    variant?: string;
    color?: string;
    className?: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
    return (
        <button 
            type={ props.type } 
            onClick={ props.onClick } 
            className={ props.className }>
            { props.children }
        </button>
    )
}