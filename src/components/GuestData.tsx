import { useState } from 'react'
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useGetData } from '../config/FetchData'
import Background from '../assets/images/1.jpg'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'title', headerName: 'Title', flex: 1},
    { field: 'artist', headerName: 'Artist', flex: 1},
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const [ err, setError ] = useState(null);
    const { songData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = async () => {
        try {
            const deleteResponse = await server_calls.delete(selectionModel[0]);
            if (deleteResponse.songID) {
                await getData();
            }
        } catch (err: any) {
            setError(err);
        }
        console.log(`Selection model: ${selectionModel}`);
    };

    const getNewData = async () => {
        try {
            console.log("Are we getting here");
            await getData();
            return;
        } catch (error) {
            setError(err);
        }
    };
    console.log(songData);

    return (
        <>
            <div>{err}</div>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
                hasNewData={ (hasData: boolean) => (hasData ? getNewData() : null)}
            />
            <div style={{ backgroundImage: `url(${ Background })`}}
            className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-sans'> 
                <div className="bg-stone-200 mt-5 mb-5 container m-5 place-items-center p-5 w-2/3 border-double border-4 border-stone-300 rounded-lg">
                    <h1 className="p-3 justify-center text-4xl text-center font-bold">Song Requests</h1>
                <div className="flex flex-col lg:flex-row">
                    <button 
                        className="p-3 bg-stone-400 rounded text-sm m-3 text-stone-100 hover:bg-stone-500 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Add New Song
                    </button>
                    <Button onClick={handleOpen} className="p-3 bg-stone-400 text-sm m-3 rounded text-stone-100 hover:bg-stone-500 hover:text-white" >Update</Button>
                    <Button onClick={deleteData} className="p-3 bg-stone-400 text-sm m-3 rounded text-stone-100 hover:bg-stone-500 hover:text-white" >Delete</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-auto my-5 flex flex-col" }
                style={{ height: 500, width: '100%' }}
                >
                    <h2 className='p-3 bg-stone-400 text-stone-100 my-2 rounded'>What Our Guests Want to Boogie To</h2>
                    <DataGrid rows={songData} columns={columns} 
                        initialState={{columns: {
                            columnVisibilityModel: {id: false}
                        }}} 
                        checkboxSelection={true} 
                        onRowSelectionModelChange={ (item:any) => {
                            setSelectionModel(item)
                         }}
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default DataTable
