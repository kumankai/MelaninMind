export default function Message (props) {
  


    return (
        <div>
            <h4>{props.sender}</h4>
            <p>{props.messageText}</p>
        </div>
    );
}
