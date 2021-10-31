import React from 'react'

const ViewSingle = (props) => {
    const chaDetail = props.data
    return (
        <div>
            <h3>Nome: {chaDetail.name}</h3>
        </div>
    )
}

export default ViewSingle
