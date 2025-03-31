import { Component } from "react";
class Image extends Component {
  render() {
    return (
      <>
        <div>
          <img src={this.props.src} alt={this.props.alt} className="cat" />
        </div>
      </>
    );
  }
}

export default Image;
