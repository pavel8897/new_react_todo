const Thing = ({thing, index, cross, crossItem}) => {
    return <li className={cross ? 'cross' : ''} onContextMenu={event => crossItem(event, index)}>{thing}</li>
}

export default Thing
