import React, { Component } from 'react';
import ReactStars from 'react-stars'

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "コメント",
      rate: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.rateChange = this.rateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addComment = (rate,content) =>{
    return this.props.addComment(rate,content)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  rateChange(rate) {
    this.setState({rate});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.rate,this.state.value,this.props.nId+1)
  }

  render(){
    const lists = this.props.comments.map((comment)=>(
      <div key={comment.id} className="comment">
        <ReactStars
          className="rate"
          value={comment.rate}
          size={20}
          edit={false}
          />
        <p className="name">{comment.name}</p>
        <p>{comment.content}</p>
      </div>
    ))
    return (
      <div className="comments" >
        <h4>コメント</h4>
        {lists}
        {this.props.member ?
          (<form onSubmit={this.handleSubmit}>
            <ReactStars
              className="rate"
              value={this.state.rate}
              size={20}
              onChange={(rate)=>this.rateChange(rate)}
              />
            <textarea name='コメント' value={this.state.value} onChange={this.handleChange}></textarea>
            <input className='submit' type="submit" value='Send'/>
          </form>) :
          null
        }
      </div>
    )
  }
}

export default Comments
