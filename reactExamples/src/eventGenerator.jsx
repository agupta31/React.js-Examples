var React=require("react");

var Button=React.createClass({
       
       render:function(){
            return(
               <button className="btn btn-primary" onClick={this.props.whenClicked}>{this.props.name}</button>
            )
       }
});

module.exports=Button;