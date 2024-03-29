import GuestForm from "./GuestForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
    hasNewData: (hasData: boolean) => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className="w-full h-full flex mx-auto overflow-auto z-1 
            justify-center align-middle bg-opacity-70"
        >
            <div
                className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-stone-400 p-2 rounded hover:bg-stone-500 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <GuestForm 
                            id={ props.id }
                            hasNewData={ (hasData: boolean) => props.hasNewData(hasData)}
                            onClose={props.onClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal