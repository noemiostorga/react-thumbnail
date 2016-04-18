
var Thumbnail = React.createClass({
	render:function(){
		return  <div className="thumbnail">
			      <img src={this.props.imageUrl} alt="..." />
			      <div className="caption">
			        <h3>Thumbnail label</h3>
			        <p>{this.props.description}</p>
			        <Badge messages={this.props.messages} number={this.props.number} />
			      </div>
			    </div>
	}
})