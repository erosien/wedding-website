import Button from './Button'
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseArtist } from '../redux/slices/SongSlice'

interface SongFormProps {
    id?: string[]
}

const SongForm = (props:SongFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.title } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseArtist(data.artist));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 10000);
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <Input {...register('title')} name='title' placeholder="Title"/>
          </div>
          <div>
            <label htmlFor="artist">Artist</label>
            <Input {...register('artist')} name='artist' placeholder="Artist"/>
          </div>
          <div className="flex p-1">
            <Button
              className="flex justify-start m-3 bg-stone-400 p-2 rounded hover:bg-stone-500 text-white"
              >
                Submit
            </Button>
          </div>
        </form>
      </div>
    )
}
  
export default SongForm
  