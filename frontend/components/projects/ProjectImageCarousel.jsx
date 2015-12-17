var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ProjectStore = require('../../stores/ProjectStore'),
    Link = require('react-router').Link,
    BackingsForm = require('../BackingsForm'),
    SessionStore = require('../../stores/SessionStore'),
    CommentsIndex = require('../comments/CommentsIndex'),
    CommentForm = require('../comments/CommentForm')
    Carousel = require('react-bootstrap').Carousel,
    CarouselItem = require('react-bootstrap').CarouselItem;

module.exports = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render() {
    var images = this.props.images.map(function(image) {
      var url = "http://res.cloudinary.com/dhcnfmydo/image/upload/w_300,h_400/" + image.image_public_id
      return (
        <CarouselItem key={image.id}>
          <img width={300} height={400} alt="Project image" src={url}/>

        </CarouselItem>
      )
    })
    return (
      <div className='carousel'>
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
          {images}
        </Carousel>
      </div>
    );
  }
});