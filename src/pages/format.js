import React, { Component } from "react"

import pageStyles from './pages.module.scss'
import Layout from '../components/layout/layout'

class FormatPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            convertedText: ""
        };

        this.convertToFString = this.convertToFString.bind(this);
        this.submitConvert = this.submitConvert.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    submitConvert(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        this.setState({
            convertedText: this.convertToFString(formData.get("input"))
        })

    }

    convertToFString(text) {
        let output = "f'"
        let inString = false
        let strArray = text.split('')
        let inVar = false
        let strDelimeter = ""

        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i] === "\'" || strArray[i] === "\"") {
                if (inString) {
                    if (strDelimeter === strArray[i]) {
                        inString = false
                    }
                    else {
                        output += strArray[i]
                    }
                }
                else if (inVar) {
                    output = output.trim()
                    if (output[output.length - 1] === "+") {
                        output = output.substring(0, output.length - 1)
                        output = output.trim()
                    }
                    output += "}"
                    inVar = false
                    inString = true
                    strDelimeter = strArray[i]
                }
                else {
                    inString = true
                    strDelimeter = strArray[i]
                }
            }
            else if (inString) {
                output += strArray[i]
            }
            else if (inVar) {
                output += strArray[i]
            }
            else if (strArray[i] !== '+' && !/\s/.test(strArray[i])) {
                output += "{"
                output += strArray[i]
                inVar = true
            }
        }

        if (inVar) {
            output += "}"
        }

        return output + "\'";
    }

    copyToClipboard(event) {
        event.preventDefault();

        var text = document.querySelector('#convertedText');
        var range = document.createRange();
        range.selectNode(text);
        window.getSelection().addRange(range);
      
        try {
          // Now that we've selected the anchor text, execute the copy command
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copy command was ' + msg);
        } catch(err) {
          console.log('Oops, unable to copy');
        }
      
        window.getSelection().removeAllRanges();
    }

    render = () => (
        <Layout>
            <h1>Convert between different string interpolations</h1>
            <form onSubmit={this.submitConvert}>

                <label>
                    Python +'s to f-string
                </label>

                <br></br>

                <textarea name="input" className={pageStyles.largeTextArea}></textarea>

                <br></br>

                <input className={pageStyles.formSubmitButton} type="submit" value="Convert" />

            </form>

            <h2>Result:</h2>

            <p className={pageStyles.code} id="convertedText">{this.state.convertedText}</p>

            <form onSubmit={this.copyToClipboard}>

                <input className={pageStyles.formSubmitButton} type="submit" value="Copy to clipboard" />

            </form>

            <hr></hr>
        </Layout>
    )
}

export default FormatPage
