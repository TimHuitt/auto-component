import { useState, useEffect } from 'react'
import beautify from 'js-beautify'
import response from '../../assets/response.js'
import './Componenter.css'

const Componenter = ({ exclusions }) => {

//**-----------**/
// ** State ** //
//**---------**/
  const [currentHtml, setHtml] = useState('')
  const [currentStyle, setStyles] = useState('')
  const [ currentRequest, setRequest ] = useState('')

  const [ responseData, setResponseData ] = useState(null)
  const [ requestData, setRequestData ] = useState(null)

  const [ activeTab, setActiveTab ] = useState('request')

//**-------------------------**/
// ** HTML/CSS Formatting ** //
//**-----------------------**/
  // get the html/style for the current page and set state
  const htmlContent = () => {
    const body = document.querySelector('body')
    const htmlContent = body ? body.innerHTML : ''
    const cssStyles = document.documentElement.innerHTML

    const cleanedHtml = cleanHtml(htmlContent, exclusions)
    const cleanedStyles = cleanStyles(cssStyles)
    
    setHtml(cleanedHtml)
    setStyles(cleanedStyles)
  }

  // format html for display (breaks/indentation)
  const formatHtml = (html) => {
    return beautify.html(html, {
      indent_size: 2,
      wrap_line_length: 80,
      max_preserve_newlines: 1,
    })
  }

  // clean html of exclusions:
  // if an element className includes 'exclude'
  // (partial) the element wrapper remains, but contents removed
  // OR, (full) the element and it's content are excluded from output
  
  // partial exclusion
  const cleanHtml = (html) => {
    const regexExcludeClass = /(<[^>]*\sclass\s*=\s*['"]([^'"]*exclude[^'"]*)['"][^>]*>)[\s\S]*?(<\/[^>]*>)/g;
    const cleanedHtml = html.replace(regexExcludeClass, '$1$3');
    const scriptIndex = cleanedHtml.lastIndexOf('<script');

    return formatHtml(cleanedHtml.substring(0, scriptIndex));
  };

  // full exclusion
  const cleanHtmlFull = (html) => {
    const regexExcludeClass = /<[^>]*\sclass\s*=\s*['"]([^'"]*exclude[^'"]*)['"][^>]*>[\s\S]*?<\/[^>]*>/g
    const cleanedHtml = html.replace(regexExcludeClass, '')
    const scriptIndex = cleanedHtml.lastIndexOf('<script')
    
    return formatHtml(cleanedHtml.substring(0, scriptIndex))
  }

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


  useEffect(() => {
    htmlContent()
  }, [])

//**---------------------------**/
// ** API Requests/Response ** //
//**-------------------------**/

  // TEMP FUNCTION FOR TESTING
  const sendRequest = (data) => {
    return(response)
  }

  // make api request with updated state data
  const handleRequest = async () => {
    try {
      const res = await sendRequest(requestData)
      if (res) {
        setResponseData(formatHtml(res.html))
        setActiveTab('response')
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

//**-----------------**/
// ** UI Handling ** //
//**---------------**/

  const handleChange = (e) => {
    e.preventDefault()
    setRequest(e.target.value)
  }

  const handleGenerate = async (e) => {
    await setRequestData({
      request: currentRequest, 
      html: currentHtml
    })
    handleRequest()
  }

  const handleReset = () => {
    setRequest('')
    setResponseData('')
  }

  const handleRequestTab = () => {
    setActiveTab('request')
  }
  const handleResponseTab = () => {
    setActiveTab('response')
  }
  
//**---------------**/
// ** Rendering ** //
//**-------------**/

  const requestHTML = currentHtml ? (
    `Review the details below for accuracy and privacy concerns.
    If the contents of an element should be excluded, add the 'exclude' class to the element.
    Click Generate to send the request and receive the auto component AI generated code.

    User Request:\n    ` 
      + currentRequest 
      + "\n\nUser HTML:\n" 
      + currentHtml 
    ) : 'There was an error collecting your HTML. Ensure no top level elements are assigned the class "exclude"'
    
  const responseHtml = responseData ? (
    responseData
  ) : 'No response has been generated'

  
  return (
    <>
      {/* create the display window */}
      <div id="content-creator">
        <div>
          <input type="text" value={currentRequest} onChange={handleChange} placeholder="Enter a request"></input>
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleReset}>X</button>
        </div>
        <div>
          <div>
           <div className={`${activeTab === 'request' ? 'selected' : ''} tab`} onClick={handleRequestTab}>
              Request
            </div>
            <div className={`${activeTab === 'response' ? 'selected' : ''} tab`} onClick={handleResponseTab}>
              Response
            </div>
          </div>
          <pre>
           {activeTab === 'request' ? requestHTML : responseHtml}
          </pre>
        </div>
        <div className="copy-btn">
          copy
        </div>
      </div>
    </>
  )
}

export default Componenter
