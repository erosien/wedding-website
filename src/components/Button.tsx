interface ButtonProps {
    children: React.ReactNode;
    variant?: string;
    color?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
    return (
        <button onClick={ props.onClick } className={ props.className }>
            { props.children }
        </button>
    )
}