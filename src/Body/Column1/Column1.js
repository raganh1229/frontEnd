import React from "react";
import "./Column1.css";

class Column1 extends React.Component {

    render() {
        return(
            <React.Fragment>
                 <div className="rectImage">
                     <img className="imagePost" src={this.props.image} />   
                 </div>
                 <div onClick={() => window.open(this.props.link1)} className="downloadBut1">
                     <h2>
                         Repository
                     </h2>
                 </div>
                 <div method="get" action="file.doc" className="downloadBut2">
                     <h2>
                     <a href={this.props.download} download>Source</a>
                     </h2>
                 </div>
             </React.Fragment> 
         )
     }     
}

export default Column1;