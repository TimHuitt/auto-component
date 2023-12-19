/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import JSXParser from 'react-jsx-parser'
import { useState, useEffect } from 'react'
// import beautify from 'js-beautify';
import './auto-component.css'

const AutoComponent = () => {

//**-----------**/
// ** State ** //
//**---------**/
  const [ currentHtml, setHtml ] = useState('')
  const [ currentStyle, setStyles ] = useState('')
  const [ currentRequest, setRequest ] = useState('')
  const [ user, setUser ] = useState('')

  const [ responseData, setResponseData ] = useState('')
  const [ requestData, setRequestData ] = useState(null)
  
  const [ activeTab, setActiveTab ] = useState('')
  const [ history, setHistory ] = useState(["No History"])

//**-------------------------**/
// ** HTML/CSS Formatting ** //
//**-----------------------**/
  // get the html/style for the current page and set state
  const htmlContent = () => {
    const body = document.querySelector('body')
    const htmlContent = body ? body.innerHTML : ''
    const cssStyles = document.documentElement.innerHTML

    const cleanedHtml = cleanExclusions(htmlContent)
    const cleanedStyles = cleanStyles(cssStyles)
    
    setHtml(cleanedHtml)
    setStyles(cleanedStyles)
  }

  // format html for display (breaks/indentation)
  // const formatHtml = (html) => {
  //   return beautify.html(html, {
  //     indent_size: 2,
  //     wrap_line_length: 80,
  //     max_preserve_newlines: 1,
  //   })
  // }

  // clean html of exclusions:
  // if an element className includes 'exclude'
  // (partial) the element wrapper remains, but contents removed
  // OR, (full) the element and it's content are excluded from output
  
  // partial exclusion

  const cleanExclusions = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    const elementsToClean = doc.querySelectorAll('.exclude');
  
    elementsToClean.forEach((element) => {
      removeAllChildNodes(element);
    });
  
    return doc.documentElement.outerHTML;
  };
  
  const removeAllChildNodes = (element) => {
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        removeAllChildNodes(child);
      } else {
        element.removeChild(child);
      }
    });
  };
  

  // full exclusion
  // const cleanExclusions = (html) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, 'text/html');
  // 
  //   const elementsToExclude = doc.querySelectorAll('.exclude');
  // 
  //   elementsToExclude.forEach((element) => {
  //     element.parentNode.removeChild(element);
  //   });
  // 
  //   return doc.documentElement.outerHTML;
  // };

  // exclude non <style> data and remove comments
  const cleanStyles = (css) => {
    const styleRegex = /<style\b[^>]*>(.*?)<\/style>/gs
    const matches = css.match(styleRegex)
  
    if (matches) {
      const cleanedMatches = matches.map(match => match.replace(/\/\*[\s\S]*?\*\//g, ''))
      return cleanedMatches
    }
    return null
  }

  const randomUser = () => {
    setUser(Math.floor(Math.random()*100000))
  }

  useEffect(() => {
    htmlContent()
    randomUser()
  }, [])

//**---------------------------**/
// ** API Requests/Response ** //
//**-------------------------**/

  // TEMP FUNCTION FOR TESTING
  // const sendRequest = (data) => {
  //   return(response)
  // }

  const sendRequest = async () => {
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
  };

  const cleanId = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    const autoComponentContainer = doc.getElementById('auto-component-container');
  
    if (autoComponentContainer) {
      autoComponentContainer.removeAttribute('id');
    }
  
    return doc.documentElement.outerHTML;
  };
  
  // make API request with updated state data
  const handleRequest = async () => {
    try {
      const resData = await sendRequest();
  
      if (resData) {
        setHistory(resData.history)
        // setResponseData(formatHtml(resData.response.content));
        // const outputHtml = cleanId(resData.response.content)
        setResponseData(resData.response.content);
        setActiveTab('response');
      }
    } catch (err) {
      console.log(err);
    }
    // setIsLoading(false);
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
      "request": currentRequest, 
      "html": currentHtml
    })
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

  const getLog = () => {
    return (
    history.map((entry, index) => (
        
        index !== 0 && entry.content.split('HTML Context:')[0] + (entry.content.includes("User Request") ? '\n' : '\n\n\n')
      )
    ))
  }

  const requestHTML = currentHtml ? (
getLog() + 
`Review the details below for accuracy and privacy concerns.
If the contents of an element should be excluded, add the 'exclude' class to the element.
Click Generate to send the request and receive the auto component AI generated code.

User ID:\n    ` 
+ user
+ "\n\nUser Request:\n"
+ currentRequest 
+ "\n\nUser HTML:\n" 
+ currentHtml 
) : 'There was an error collecting your HTML. Ensure no top level elements are assigned the class "exclude"'
    

console.log(responseData)
const responseHtml = responseData ? (
    responseData
  ) : 'No response has been generated'
    
  return (
    
    <div className='auto-component exclude'>
            
      <div>
        {responseData ? (
          // Use {} to directly interpolate the JSX code
          <JSXParser jsx={responseData} />
        ) : (
          '- auto component will be added here -'
        )}
      </div>
      
      <div id="auto-component-ui">
        <div id="auto-component-code-container" className={`${!activeTab ? 'auto-component-hidden' : ''} auto-component-code`}>
          <pre id="auto-component-code">
            {activeTab === 'request' ? requestHTML : responseHtml}
          </pre>
          <div className="auto-component-copy" onClick={copyToClipboard} style={activeTab !== 'response' ? { display: 'none' } : null}>
            copy
          </div>
        </div>
        <div id="auto-component-entry">
          <input type="text" value={currentRequest} onChange={handleChange} placeholder="Enter a request"></input>
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleReset}>X</button>
        </div>
        <div>
          <div id='auto-component-tabs'>
           <div className={`${activeTab === 'request' ? 'auto-component-selected' : ''} tab`} onClick={handleRequestTab}>
              Request
            </div>
            <div className={`${activeTab === 'response' ? 'auto-component-selected' : ''} tab`} onClick={handleResponseTab}>
              Response
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoComponent

