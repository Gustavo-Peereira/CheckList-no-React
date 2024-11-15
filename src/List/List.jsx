export function List(props) {
    return (
        <div>
            <ul className="list">
                {
                props.list.map((task, index) => (
                    <li key={index}>{task}</li>
                ))
                }
            </ul>
        </div>
    )
}