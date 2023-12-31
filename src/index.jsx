// AutoComponent
// Built By:
//   https://github.com/SamPatt
//   https://github.com/TimHuitt

// Copyright (C) 2023 Tim Huitt, Sam Patterson
// 
//   This program is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Affero General Public License as
//   published by the Free Software Foundation, either version 3 of the
//   License, or (at your option) any later version.
// 
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU Affero General Public License for more details.
// 
//   You should have received a copy of the GNU Affero General Public License
//   along with this program.  If not, see <https://www.gnu.org/licenses/>.

// Babel transpile resource: https://github.com/receter/my-components

import React from 'react'
import JSXParser from 'react-jsx-parser'
import { useState, useEffect } from 'react'
import beautify from 'js-beautify';
import './auto-component.css'

const AutoComponent = () => {

//**-----------**/
// ** State ** //
//**---------**/
  const [ currentHtml, setHtml ] = useState('')
  const [ currentRequest, setRequest ] = useState('')
  const [ user, setUser ] = useState('')

  const [ responseData, setResponseData ] = useState('')
  const [ requestData, setRequestData ] = useState(null)
  
  const [ activeTab, setActiveTab ] = useState('')
  const [ history, setHistory ] = useState(["No History"])
  const [isRequesting, setIsRequesting] = useState(false);

//**-------------------------**/
// ** HTML/CSS Formatting ** //
//**-----------------------**/

// format html for display (breaks/indentation)
  const formatHtml = (html) => {
    return beautify.html(html, {
      indent_size: 2,
      wrap_line_length: 80,
      max_preserve_newlines: 1,
    })
  }

  // ** Clean HTML of Exclusions **
  // if an element className includes 'exclude'
  // (partial) the element wrapper remains, but contents removed
  // OR, (full) the element and it's content are excluded from output
  // thanks gpt for these clever exclusion tools

  // partial exclusion
  const cleanExclusions = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elementsToClean = doc.querySelectorAll('.exclude');
    
    const removeAllChildNodes = (element) => {
      Array.from(element.childNodes).forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          removeAllChildNodes(child);
        } else {
          element.removeChild(child);
        }
      });
    };

    elementsToClean.forEach((element) => {
      removeAllChildNodes(element);
    });
  
    return doc.documentElement.outerHTML;
  };

  // generate a random 5 digit user id
  const randomUser = () => {
    setUser(Math.floor(Math.random()*100000))
  }

  // set initial load data
  useEffect(() => {
    randomUser()
  }, [])

//**---------------------------**/
// ** API Requests/Response ** //
//**-------------------------**/

  // handle sending the user request to the auto-component API
  // API sends packaged request to GPT for a code based response
  const sendRequest = async () => {
    setIsRequesting(true);
    const url = "https://server-auto-component-46830ff262f8.herokuapp.com/api";
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (res.ok) {
        const jsonData = await res.json();
        return jsonData;
      } else {
        throw new Error("Invalid request!");
      }
    } catch (err) {
      console.log(err.message);
    }
    setIsRequesting(false);
  };
  
  // handle request initialization and state updates
  const handleRequest = async () => {
    try {
      const resData = await sendRequest();
  
      if (resData) {
        setHistory(resData.history)
        setResponseData(formatHtml(resData.response.content));
        activeTab !== '' && setActiveTab('response')
      }
    } catch (err) {
      console.log(err);
    } finally {
        setIsRequesting(false); // Set isRequesting to false after processing response
      }
  };


//**------------------------**/
// ** UI/Button Handling ** //
//**----------------------**/

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  const handleGenerate = async (e) => {
    await setRequestData({
      "userId": user,
      "request": currentRequest
    })
    setRequest('')
  }

  useEffect(() => {
    if (requestData !== null) {
      handleRequest();
    }
  },[requestData])

  const handleReset = () => {
    setRequest('')
    setResponseData('')
    randomUser()
    setHistory([])
    setIsRequesting(false); 
  }

  const handleRequestTab = async () => {
    await setActiveTab(activeTab === 'response' || activeTab === '' ? 'request' : '');
  }
  
  const handleResponseTab = async () => {
    await setActiveTab(activeTab === 'request' || activeTab === '' ? 'response' : '');
  }

  const copyToClipboard = async () => {
    const text = activeTab === 'response' ? responseData : requestData
    await navigator.clipboard.writeText(text)
  }
  
//**---------------**/
// ** Rendering ** //
//**-------------**/

  // get request history log and format for display
  const getLog = () => {
    return (
    history.map((entry, index) => (
        index !== 0 
          ? entry.content.split('HTML Context:')[0] + (entry.content.includes("User Request") ? '\n\n' : '\n\n\n')
          : ''
      )
    ))
  }

  // build request tab content
  const requestHTML = (
getLog() && getLog().join('') + 
`
Click Generate to send a request and receive the auto component AI generated code.

Example: "Create a full width container, center a box inside, and place a circle inside the box"

User ID:\n` 
+ user
+ "\n\nUser Request:\n"
+ currentRequest
)    

  const responseHtml = responseData ? (
      responseData
    ) : 'No response has been generated'

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGenerate();
    }
  };

//**------------**/
// ** Return ** //
//**----------**/

  return (
    <div className='auto-component exclude'>
      <div>
        <span className="placeholder-top-left">auto-component</span>
        <hr></hr>
        {responseData ? (
          <JSXParser jsx={responseData} />
        ) : (
          <div className={`auto-component-placeholder ${isRequesting ? 'animate' : ''}`} />
        )}
        <hr></hr>
      </div>
      <div id="auto-component-ui">
        <div 
          id="auto-component-code-container" 
          className={`${!activeTab 
            ? 'auto-component-hidden' 
            : ''} auto-component-code`}
        >
          <pre id="auto-component-code">
            {activeTab === 'request' 
              ? requestHTML 
              : responseHtml}
          </pre>
          <div 
            className="auto-component-copy" 
            onClick={copyToClipboard} 
            style={activeTab !== 'response' 
              ? { display: 'none' } 
              : null}
            >
            copy
          </div>
        </div>
        <div id="auto-component-entry">
            {isRequesting ? (
                <div className="loading-indicator"></div>
            ) : (
                <input 
                type="text" 
                value={currentRequest} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
                placeholder="Enter a request">
                </input>
            )}
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleReset}>X</button>
         </div>
        <div>
          <div id='auto-component-tabs'>
           <div 
            className={`${activeTab === 'request' 
              ? 'auto-component-selected' 
              : ''} tab`} onClick={handleRequestTab}
            >
              Request
            </div>
            <div 
              className={`${activeTab === 'response' 
                ? 'auto-component-selected' 
                : ''} tab`} onClick={handleResponseTab}
              >
              Response
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoComponent

