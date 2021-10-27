// import EmptyListMessage from './EmptyListMessage'
import '../Styles/List.css'
const List = ({list, img, setList}) => {
    return(
        <div className="list-wrapper">
            <div className="list-container">
                <div className="pic-display-container">
                    
                    <h1 className="pic-header">Customer's Photo</h1>
                    <div className="images">
                        {list.map(item => (
                            <img src={item.img} alt="" />
                        ))}
                    </div>
                </div>
                <div className="profile-container">
                    
                    <h1 className="list-header">Customer's List</h1>
                    <div className="list">
                        {list.map(one => (
                            <ul>
                                <li>{one.firstName} {one.lastName}</li>
                                <i className="fas fa-times" onClick={() => setList(list.filter(el => el.id !== one.id))}></i>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;