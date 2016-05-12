var React=require("react");

var CommentBox=React.createClass({
    
        render:function(){
             return(
                 
                    <p>{this.props.text}</p>
                 
         
             )
        }
});

module.exports=CommentBox;

