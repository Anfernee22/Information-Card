import { useState } from 'react';
import Inputs from './Inputs';
import List from './List';

const MainContainer = ({PagesLayout}) => {
    const [list, setList] = useState([]);
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [bio, setBio] = useState('')
    const [img, setImg] = useState([])
    console.log(img)
    return(
        <div className="main-container"> 
            <Inputs PagesLayout={PagesLayout} list={list} setList={setList} fname={fname} setFname={setFname} lname={lname} setLname={setLname} age={age} setAge={setAge} bio={bio} setBio={setBio} img={img} setImg={setImg}/>
            <List img={img} list={list} setList={setList}/>
        </div>
    )
}
export default MainContainer;