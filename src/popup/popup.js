import './popup.css'

const Popup =(props)=>{
const close=()=>{
    props.close()
}

return(
   
    <div className="popup">
            <button className='popup__btn' onClick={close} >X</button>
         <img  className='main__icons__items icon1'  src={props.info.icon}alt='icon'></img>
    
<h1>{props.info.title}</h1>
<p>{props.info.text}
</p>
    </div>
)

}

export default Popup