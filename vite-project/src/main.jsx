import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Something from './something.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },//tells you the properties
    children: 'click me to visit google' 
}

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
)
