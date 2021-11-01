import '../Styles/Inputs.css'
import { useState } from 'react';
import PagesLayout from './PagesLayout.json'

const Inputs = ({img, setImg, fname, setFname, lname, setLname, age, setAge, bio, setBio, list, setList}) => {
    const [uploaded, setUploaded] = useState(false)
    const [empty, setEmpty] = useState(false);
    const [fnameLabel, setFnameLabel] = useState(PagesLayout.fnameLabel),
            [lnameLabel, setLnameLabel] = useState(PagesLayout.lnameLabel),
            [ageLabel, setAgeLabel] = useState(PagesLayout.ageLabel)
    console.log(empty)
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(fname === '' || lname === '' || age === ''){
            setEmpty(true)
            setFnameLabel('Enter a valid first name');
            setLnameLabel('Enter a valid last name');
            setAgeLabel('Enter a valid age')
            
        }else{
            e.preventDefault() 
            setList([...list, {firstName: fname, lastName: lname, age: age, bio: bio, img: img, id: Math.floor(Math.random() * 1000)}])
            setFname('')
            setLname('')
            setAge('')
            setBio('')
            setEmpty(false)
            setFnameLabel(PagesLayout.fnameLabel);
            setLnameLabel(PagesLayout.lnameLabel);
            setAgeLabel(PagesLayout.ageLabel)
        }
    }
    
    const uploadImg = (e) => { 
        setUploaded(!uploaded)
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
        }
    }
    return(
        <div className="input-wrapper">
            <form className="forms">
                <div className="input-fields">
                    <div className="input-box">
                        <label htmlFor="fname" className={empty ? 'label-error' : 'input-label'}>{fnameLabel}</label>
                        <input type="text" name="fname" className={empty ? 'input-error' : 'input'} value={fname} placeholder="First Name" onChange={(e) => setFname(e.target.value)}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="fname" className={empty ? 'label-error' : 'input-label'}>{lnameLabel}</label>
                        <input type="text" className={empty ? 'input-error' : 'input'} value={lname} placeholder="Last Name" onChange={(e) => setLname(e.target.value)}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="fname" className={empty ? 'label-error' : 'input-label'}>{ageLabel}</label>
                        <input type="number" className={empty ? 'input-error' : 'input'} value={age} name="age" placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
                    </div>
                </div>
                
                <div className="info-container">
                    <label htmlFor="file" className="file">{uploaded ? 'Photo uploaded' : 'Upload a photo'}</label>
                    <input type="file" name="file" id="file" accept="image/*" onChange={uploadImg}/>
                    <textarea  className="textarea" spellCheck="true" value={bio} cols="30" rows="10" placeholder="Enter bio" onChange={(e) => setBio(e.target.value)}/>
                    <button className="submit-btn" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Inputs;