import '../Styles/List.css'
const List = ({list, setList}) => {
    const closeWindow = () => {
        document.querySelector('.list-wrapper').addEventListener('click', (e) => {
            if(e.target.className === 'close fas fa-times'){
                console.log('button clicked')
                e.target.parentElement.parentElement.remove()
            }
        })
    }
    const popUpScreen = (one) => {
        const listWrapper = document.querySelector('.list-wrapper');
        const window = document.createElement('div');
        window.className = 'profile-window-container';
        window.innerHTML = `
            <div class='profile'>
                <i class="close fas fa-times" ></i>
                <div class="profile-img">
                    <img class="img" src=${one.img}>
                </div>
                <div class="profile-info">
                    <span>${one.firstName} ${one.lastName}</span>
                    <span> ${one.age}</span>
                    <p class="profile-bio">${one.bio}</p>
                </div>
            </divn>`
        listWrapper.appendChild(window)
        closeWindow()
    }
    return(
        <div className="list-wrapper">
            <div className="list-container">
                <div className="pic-display-container">
                    <h1 className="pic-header">Customer's Photo</h1>
                    <div className="images">
                        {list.map(item => (
                            <img src={item.img} alt="" key={item.id}/>
                        ))}
                    </div>
                </div>
                <div className="profile-container">
                    <h1 className="list-header">Customer's List</h1>
                    <div className="list">
                        {list.map(one => (
                            <ul key={one.id} >
                                <li onClick={() => list.filter(el => el.id === one.id ? popUpScreen(one) : '')}>{one.firstName} {one.lastName}</li>
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