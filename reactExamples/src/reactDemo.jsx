var React=require("react");
var Button=require("./eventGenerator");
var CommentBox=require("./commentBox");

var ReactDemo=React.createClass({
    //in built method of react.If defined in a component will be triggered only once
    //before the component is rendered.Good for initializing variables.

     componentWillMount:function(){
         this.text="";
         this.name="click me"
     },
    //for initializing state variables
    getInitialState:function(){
        return{
             eventNo:0
        } 
    },
     handleClick:function(){
          this.text+="akash";
         //for changing state variables and re invoking render function.
          this.setState({
               eventNo:this.state.eventNo++
          });
      },
      render:function(){
          
          return(
             <div className="container">
                  <CommentBox text={this.text}/>
                  <Button name={this.name} whenClicked={this.handleClick}/>
                   
              </div>
          )
      }
});

module.exports=ReactDemo;