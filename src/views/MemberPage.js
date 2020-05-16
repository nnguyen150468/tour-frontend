import React from 'react'

export default function MemberPage(props) {
    return (
        <div>
            this is {props.user && props.user.name || "member"} page
        </div>
    )
}
