import '../css/ListItem.css'


function ListItem({text}) {
    return(
        <div className="ListItem">
            <div>{text}</div>
            <input type="checkbox" name="" id="" />
            <button>X</button>
        </div>
    )
}

export default ListItem