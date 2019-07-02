import React, { Component } from 'react';
import ReactStars from 'react-stars'

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    const lists = this.props.rooms.map((room)=>(
      <tbody key={room.info}>
        <tr className="room">
          <td className="img"><img src={room.img} alt={room.info} /></td>
          <td>{room.info}</td>
          <td><h5 style={{color:"red"}}>{room.cost}</h5></td>
          <td>
            <ReactStars
            className="rate"
            value={room.rate}
            size={20}
            edit={false}
            />
          </td>
        </tr>
      </tbody>
    ))
    return(
      <div className="rooms">
        <h4>部屋詳細</h4>
        <table　border="1" width="90%">
          <thead>
            <tr>
              <th> </th>
              <th>階</th>
              <th>賃料</th>
              <th>お得度</th>
            </tr>
          </thead>
          {lists}
        </table>
      </div>
    )
  }
}

export default Rooms
