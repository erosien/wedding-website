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
    // {
    //     field: "action",
    //     headerName: "Play Song",
    //     sortable: false,
    //     renderCell: ({ row }: Partial<GridRowParams>) =>
    //       <Button onClick={() => yourActionFunction(row)}>
    //         Action
    //       </Button>,
    //   },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { songData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 10000)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div style={{ backgroundImage: `url(${ Background })`}}
            className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-serif'> 
                <div className="bg-stone-200 container m-5 place-items-center p-5 w-100 border-double border-4 border-stone-300 rounded-lg">
                    <h1 className="p-8 justify-center text-6xl text-center font-bold">Song Requests</h1>
                <div className="flex flex-row">
                    <div>
                    <button 
                        className="p-3 bg-stone-400 m-3 rounded text-stone-100 hover:bg-stone-500 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Add New Song
                    </button>
                <Button onClick={handleOpen} className="p-3 bg-stone-400 m-3 rounded text-stone-100 hover:bg-stone-500 hover:text-white" >Update</Button>
                <Button onClick={deleteData} className="p-3 bg-stone-400 m-3 rounded text-stone-100 hover:bg-stone-500 hover:text-white" >Delete</Button>
                </div>
            </div>
            <div className={ open ? "hidden" : "container mx-auto my-5 flex flex-col" }
                style={{ height: 800, width: '100%' }}
                >
                    <h2 className='p-3 bg-stone-400 text-stone-100 my-2 rounded'>What Our Guests Want to Boogie To</h2>
                    <DataGrid rows={songData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true} 
                    onSelectionModelChange={ (item:any) => {
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
