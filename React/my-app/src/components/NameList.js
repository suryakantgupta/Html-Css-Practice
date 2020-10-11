import React from 'react'

const name = ['surya','sonu','gupta']
const namelisst = name.map(x=> <h1>{x}</h1>)

function NameList() {
    return (
        <div>
            {namelisst}
        </div>
    )
}

export default NameList
