
var React=require("react");
 var ReactDemo=require("./reactDemo");

var target=document.getElementById("target");



var element=React.createElement(ReactDemo);

ReactDOM.render(element,target);
