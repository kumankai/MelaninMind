import { useState } from 'react';

export default function Conversation (props) {
    


    const conversation = props.conv;

    return (
        
            <p>{props.conv.conversation[0].message}</p>
        
    );
}
