

function Trip(props) {

   
return (
    <div className="trip-card">
        <h3>{props.name}</h3>
        <p>{props.content}</p>
    </div>
)
}

export default Trip;