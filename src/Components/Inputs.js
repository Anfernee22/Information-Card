import '../Styles/Inputs.css'
import { useState } from 'react';
import List from './List'

const Inputs = ({img, setImg, fname, setFname, lname, setLname, age, setAge, bio, setBio, list, setList}) => {
    const [uploaded, setUploaded] = useState(false)
    const [empty, setEmpty] = useState(true)
    const submitHandler = (e) => {
        e.preventDefault()
        if(fname === '' || lname === '' || age === ''){
            setEmpty(!empty)
        }else{
            e.preventDefault()
            setList([...list, {firstName: fname, lastName: lname, age: age, bio: bio, img: img, id: Math.floor(Math.random() * 1000)}])
            setFname('')
            setLname('')
            setAge('')
            setBio('')

        }
        setTimeout(() => setEmpty(), 1000)
    }
    const uploadImg = (e) => { 
        setUploaded(!uploaded)
       if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
       }
    }
console.log(list)
    return(
        <div className="input-wrapper">
            <form className="forms">
                <div className="input-fields">
                    <input type="text" className="fname" value={fname} placeholder="Enter First Name" onChange={(e) => setFname(e.target.value)}/>
                    {empty ? '' : <span className={fname === '' ? 'error' : 'disabled'}> Please enter first name</span>}
                    <input type="text" className="lname" value={lname} placeholder="Enter Last Name" onChange={(e) => setLname(e.target.value)}/>
                    {empty ? '' : <span className={lname === '' ? 'error' : 'disabled'}> Please enter last name</span>}
                    <input type="number" value={age} name="age" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
                    {empty ? '' : <span className={age === '' ? 'error' : 'disabled'}> Please enter age</span>}
                </div>
                
                <div className="info-container">
                    <label htmlFor="file">{uploaded ? 'Photo uploaded' : 'Upload a photo'}</label>
                    <input type="file" name="file" id="file" accept="image/*" onChange={uploadImg}/>
                    <textarea  className="textarea" spellCheck="true" value={bio} cols="30" rows="10" placeholder="Enter bio" onChange={(e) => setBio(e.target.value)}/>
                    <button className="submit-btn" onClick={submitHandler}>Submit</button>
                </div>
            </form>
            <List list={list} setList={setList}/>
        </div>
    )
}
export default Inputs;