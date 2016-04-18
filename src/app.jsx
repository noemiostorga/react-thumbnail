var options = {

		thumbnailData: [{
	messages: "inbox",
	number: 32,
	imageUrl: "https://tleunen.github.io/react-mdl/react.svg",
	description: "react is a library that helps you build dynamic websites faster"
},{
	messages: "inbox",
	number: 32,
	imageUrl: "https://tleunen.github.io/react-mdl/react.svg",
	description: "react is a library that helps you build dynamic websites faster"
}]
};

var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.target'));