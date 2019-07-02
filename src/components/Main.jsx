import React, { Component } from 'react';
import ReactStars from 'react-stars'
import Comments from './Comments'
import Rooms from './Rooms'
import building1 from '../img/building1.jpg';
import room1 from '../img/room1.jpg';
import room2 from '../img/room2.jpg';
import room3 from '../img/room3.jpg';
import room4 from '../img/room4.jpg';

class Main extends Component {
  constructor (props){
    super(props)
    this.state = {
      building : {
        img : building1,
        name : "早稲田ハイツ",
        ad : "東京都新宿区西早稲田１丁目６−１",
        access : [
          "東西線早稲田駅から徒歩3分",
          "東京さくらトラム（都電 荒川線） 早稲田駅から徒歩5分"
        ],
        other : `築10年
        10階建`,
        rate : 4.5,
        rooms : [
          {
            img : room1,
            info : "5階",
            cost : "4万円",
            rate : 4.5
          },
          {
            img : room2,
            info : "6階",
            cost : "6万円",
            rate : 3.5
          },
          {
            img : room3,
            info : "1階",
            cost : "4万円",
            rate : 3.0
          },
          {
            img : room4,
            info : "10階",
            cost : "10万円",
            rate : 1
          }
        ],
        comments : [
          {
            id: 1,
            name : "居住者",
            rate : 5,
            content : ""
          },
          {
            id: 2,
            name : "元居住者",
            rate : 4,
            content : ""
          },
          {
            id: 3,
            name : "元居住者",
            rate : 3.5,
            content : ""
          }
        ]
      }
    }
  }

  addComment = (rate,content,id) => {
    this.setState({
      comments : this.state.building.comments.push({
        id : id,
        name : "元居住者",
        rate : rate,
        content : content
      })
    })
  }

  render() {
    const build = this.state.building;
    const {rooms,comments} = build;
    return (
      <div className="main" >
        <header>
          <div className="wr">
            <img
              src={build.img}
              alt={build.name}
            />
          </div>
          <div className="header-main">
            <div className="top">
              <div className="title">
                <h3><b>{build.name}</b></h3>
              </div>
              <ReactStars
                className="rate"
                value={build.rate}
                size={20}
                edit={false}
                />
            </div>
            <div className="info" >
              <div className="ad"><h6>住所</h6>{build.ad}</div>
              <div className="access"><h6>アクセス</h6>{build.access.map(ac => <p key={ac}>{ac}</p>)}</div>
              <div className="other"><h6>詳細</h6>{build.other}</div>
            </div>
          </div>
        </header>
        <div className="contain">
          <Comments comments={comments} nId={comments.length} member={this.props.member} addComment={(rate,content,id)=> this.addComment(rate,content,id)}/>
          <Rooms rooms={rooms} />
        </div>
      </div>
    )
  }
}

export default Main
