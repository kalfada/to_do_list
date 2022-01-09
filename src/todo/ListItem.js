import '../css/ListItem.css'


function ListItem(props) {
    return(
        <div className="ListItem">
            <div>{props.text}</div>
            <input type="checkbox" name="" id="" />
            <button>X</button>
        </div>
    )
}

export default ListItem