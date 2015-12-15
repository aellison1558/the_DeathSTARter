var React = require('react'),
    ProjectStore = require('../../stores/ProjectStore'),
    ApiUtil = require('../../util/ApiUtil'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function(){
    var project = this.props.project;
    return(
      <li>
        <h3><Link to={'/'}>{project.title}</Link></h3>
        <div>{project.summary}</div>
      </li>
    );
  }
});