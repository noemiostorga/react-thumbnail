var ThumbnailList = React.createClass({
	render: function(){
		var list = this.props.thumbnailData.map(function(props){
			return <Thumbnail {...props} />
		})
		return <div> {list}</div>
	}
})