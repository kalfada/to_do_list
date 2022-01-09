import ListItem from "./ListItem";

function List(props) {
    const {list} = props
    return (
        <ul>
            {list.map(t =>
                <ListItem
                key={t.id}
                {...t}
                refreshView={props.refreshView}
                class="ListItem" />

            )}
        </ul>
    )
}

export default List