import React from "react";
import "./Body.css";
import Column1 from "./Body/Column1/Column1";
import "./Buttons.css";
import Column2 from "./Body/Column2/Column2";
import myData from "./myData";

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
          importData: myData,
          currentIndex: 0
        }
      }

    HandleCurrentIndex(type) {
            if (type === 'inc') {
                if (this.state.currentIndex < 3) {
                this.setState({currentIndex: (this.state.currentIndex + 1)})
            }
        }
             else if (type === 'dec') {
                if (this.state.currentIndex > 0 ) {
                this.setState({currentIndex: (this.state.currentIndex - 1)})
                }
        }
    }

    render() {
        
        var text1val = this.state.importData.map(item => item.text1)
        var text2val = this.state.importData.map(item => item.text2)
        var link1val = this.state.importData.map(item => item.link1)
        var download = this.state.importData.map(item => item.download)
        var imageval = this.state.importData.map(item => item.image1)

        return(
            <div className="mainBody">
                <div className="backPain">
                    <div className="holder">
                    <Column1
                        image={imageval[this.state.currentIndex]} 
                        link1={link1val[this.state.currentIndex]}
                        download={download[this.state.currentIndex]}>
                    </Column1>
                    
                    <div className="rectHolder">
                        <div className="rectForward" onClick={()=> this.HandleCurrentIndex("inc")}>
                            <h2>Next</h2>
                        </div>
                        <div className="rectBackward" onClick={()=> this.HandleCurrentIndex("dec")}>
                            <h2>Prev</h2>
                        </div>
                    </div>
                    
                    <Column2 
                        text1={text1val[this.state.currentIndex]} 
                        text2={text2val[this.state.currentIndex]}>
                    </Column2>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Body;