import React, { useState } from 'react'


export default function TextForm(props) {

    const s_w_g = () => {
        {/* //generate the random number */ }
        let comI = Math.floor(Math.random() * 3);
        {/* // console.log(typeof randomNumber) */ }

        {/* //Assign the value s, w and g to the number which are 0, 1 and 2 */ }

        let user = prompt("Enter the number choice(s,w,g): ")
        let com = ["s", "w", "g"][comI]
        // console.log("user = " + user);
        // console.log("com = " + com);
        // console.log("s" === "s")    //if you are not know : The use of === 

        const match = (com, user) => {
            let result;
            if (com === user) {
                result = "Nobody"
            }
            else if (com === "s" && user === "w") {
                result = "com";
            }

            else if (com === "s" && user === "g") {
                result = "user";
            }

            else if (com === "w" && user === "s") {
                result = "user";
            }

            else if (com === "w" && user === "g") {
                result = "com";
            }

            else if (com === "g" && user === "s") {
                result = "com";
            }

            else if (com === "g" && user === "w") {
                result = "user";
            }
            return result;

        }
        let result = match(com, user);
        // console.log(result);
        document.getElementById('res').innerHTML = (`<b>Com:</b>${com} <br> <b>User:</b>${user} <br> <b>The Result:</b> ${result} <b>Win</b>`)

        /* //Take input from the user in number which are 0, 1 and 2
        //write a concept of snake water gun game
        //Compare the user input and computer gernerate number
        //then which one win decide */
    }

    const [Text, setText] = useState();

    const handleUpClick = () => {
        if(Text!=null){
        // alert("Clicking...")
        const newText = Text.toUpperCase();
        setText(newText);
        }
    }
    const handleLoClick = () => {
        // alert("Clicking...")
        if(Text!=null){
        const newText = Text.toLowerCase();
        setText(newText);
        }
    }
    const handleOnChange = () => {
        setText(event.target.value);
    }
    function handleCopyText() {
        let copyText =
            document.getElementById("mybox");

        copyText.select();
        document.execCommand("copy");
    }
    function handleClearText() {
        setText('');
    }
    const handleRemoveSpace = () => {
        // let text = document.getElementById("mybox").value ;
        if(Text!=null){
        let newString = Text.replace(/\s+/g, ' ');
        setText(newString)
        }
    }
    // function handlePasteText() {
    // document.querySelector('textarea').focus();
    // const result = document.execCommand('paste')
    // setText(result);
    // console.log('document.execCommand result: ', result);

    //     const text = navigator.clipboard.readText();
    //     // // setText(text)
    //     // // document.getElementById('mybox').execCommand('paste')
    //     // console.log(text);
    // //  document.querySelector('textarea').value += text;
    //     // if(window.clipboardData) {   
    //     //   document.getElementById('txToPaste').value = Array.from(window.clipboardData[0]);
    //     // } 
    //    }
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'black' : 'white'}`} >
                <div className='container '>
                    <div className="mb-3">
                        <h2>{props.heading}</h2>
                        <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" placeholder='Enter the text here' rows="8"></textarea>
                        <button disabled={Text ? '' : 1} id='b1' className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-1 mx-1`} onClick={handleUpClick}  >Convert to UpperCase</button>
                        <button disabled={Text ? '' : 1} className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-1 mx-1`} onClick={handleLoClick} >Convert to LowerCase</button>
                        <button disabled={Text ? '' : 1} className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-1 mx-1`} onClick={handleClearText} >Clear Text</button>
                        <button disabled={Text ? '' : 1} className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-1 mx-1`} onClick={handleCopyText} >Copy Text</button>
                        <button disabled={Text ? '' : 1}  className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-1 mx-1`} onClick={handleRemoveSpace} >Remove Extra Spaces</button>
                        {/* <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-3 mx-1`} onClick={handlePasteText} >Paste Text</button> */}
                    </div>
                </div>
                <div className="container">
                    <h2>Your Text Summury</h2>
                    <p>{Text?.split(' ').filter(function (n) { return n != '' }).length || 0} Word and {Text?.length || 0} Characters</p>
                    <p>{(0.008 * Text?.split(" ").filter(function (n) { return n != '' }).length) || 0} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{Text}</p>
                </div>
                <div className="container">
                    {/* //Snake Water Gun Game  */}
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} my-3 mx-1`} onClick={s_w_g} >Game</button>
                    <p id='res'>hello in this area print result of Game:</p>
                </div>
            </div>
        </>
    )
}