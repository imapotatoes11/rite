class RCanvas extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     text: "fasdfads<strong>asjdf</strong><br/>adfsjkladf<br/>"
        // }
    }
    // compile markdown
    /*
    * ** -> <strong>
    * * -> <em>
    * # -> <h1>
    * ## -> <h2>
    * ### -> <h3>
    * #### -> <h4>
    * ` -> <code> (monospace font and background color, use <span>)
    * - -> <ul> <li>
    * 1. -> <ol> <li>
    * [text](url) -> <a>
    * */

    render() {
        return (
            <div>
                {/*<h1>C</h1>*/}
                {/*<textarea minLength={"600px"}>*/}
                {/*    {this.state.text}*/}
                {/*</textarea>*/}
                {/*<div className={"editable"}></div>*/}
                <EditableDiv/>
            </div>
        )
    }
}
class EditableDiv extends React.Component {
    constructor(props) {
        super(props);
        this.handleBold = this.handleBold.bind(this);
        this.handleItalic = this.handleItalic.bind(this);
        this.handleUnderline = this.handleUnderline.bind(this);
    }

    handleBold() {
        document.execCommand('bold', false, null);
    }

    handleItalic() {
        document.execCommand('italic', false, null);
    }

    handleUnderline() {
        document.execCommand('underline', false, null);
    }

    getText(container) {
        let text = "";
        for (let i = 0; i < container.childNodes.length; i++) {
            let node = container.childNodes[i];
            if (node.nodeType === 3) {
                text += node.nodeValue;
            } else {
                text += this.getText(node);
            }
        }
        console.log(`aa ${text}`)
        return text;
    }

    handleKeyPress() {
        let container = document.querySelector(".editable");
        let text = this.getText(container);
        console.log(text)
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.handleBold}>Bold</button>*/}
                {/*<button onClick={this.handleItalic}>Italic</button>*/}
                {/*<button onClick={this.handleUnderline}>Underline</button>*/}
                <div contentEditable={true} className={"editable"} onKeyPress={this.handleKeyPress}></div>
            </div>
        )
    }
}


// TODO: turn into a fake textarea
// https://stackoverflow.com/a/17456497
// * we want to make http://jsfiddle.net/mekwall/XNkDx/
const domContainer = document.querySelector("#canvas");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(RCanvas));