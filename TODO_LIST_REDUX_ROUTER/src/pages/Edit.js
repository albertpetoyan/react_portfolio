import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editItem } from '../store/actions/todo';
import { useParams} from 'react-router'
import { useNavigate } from 'react-router'


export default function Edit() {

  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const params = useParams()
  const navigate = useNavigate()

  let current = (list.find(item => item.id === params.id))
  const [value, setValue] = useState(current.text)

  const onChange = (e) =>{
    setValue(e.target.value)
  }
  const onSaveChange = ()=>{
    dispatch(editItem(params.id,value))
    navigate('/')
  }
  const onGoBack = () => {
    navigate('/')
  }
    return (
        <div className="modal-content">
          <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Edit</h3>
          </div>
          <div className="modal-body">
            <textarea className="input" onChange={onChange} value ={value} type="text" />
          </div>
          <div className="modal-footer">
              <button type="button" onClick={onGoBack} className="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
              <button type="button" onClick={onSaveChange} className="btn btn-primary">Save changes</button>
          </div>
        </div>
    )
}
