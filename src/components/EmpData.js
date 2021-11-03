import React from 'react'
import './EmpData.css'

import {
  generateDiceBearAvataaars
} from "./random.js";

function EmpData(props) {


    return (
        <div>

        { <img className="avatar-pos"
            src={generateDiceBearAvataaars(props.data.name)}
            
            alt="avataaars_avatar"
          />
        }

        <div className="main-div">
          <h2 className="display-3"><b>{props.data.name}</b></h2> <br/>
          <h3><b> E-mail:</b> {props.data.email} </h3><br/>
          <h3><b> Phone:</b> {props.data.phone}</h3> <br/>
          <h3><b> Company:</b> {props.data.company.name}</h3> <br/>
          <h3><b> Website:</b> {props.data.website} </h3><br/>
          <h3><b> Address:</b> {props.data.address.street}, {props.data.address.suite}, {props.data.address.city}, {props.data.address.zipcode}</h3>
        </div>
        </div>
    )
}

export default EmpData
