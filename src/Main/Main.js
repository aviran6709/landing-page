import '../Main/main.css'
import React, { useEffect, useState } from 'react';
import Popup from '../popup/popup'
const Main =()=>{
    const [imgSrc, setImgSrc] = useState(require('../images/page.png')); 
    const [isOpenPopup, setIsOpenPopup] = useState(false); 
    const [popupInfo, setPopupInfo] = useState(
    {icon:"",
        title:'',
        text:'',
}); 
const svgImage =require('../images/v.svg')
console.log(svgImage);
const infoForPopups =[{
    icon:"https://cdn-camp.mini-sites.net/Publish/a6f334fbcec8485cabf3416245ec103b/0dd1049954dd4d7582c589b8569fca80/src/contents/d5d81a328fb54196813bd1df477f61bb_d.webp",
    title:' שירות רפואי 24 שעות ביממה!',
    text:"שירות מהיר ויעיל שניתן להשתמש 24 שעות ביממה בלי להמתין לטופס 17 ושאר ניירת מיותרת",
},{
    icon:'https://cdn-camp.mini-sites.net/Publish/a6f334fbcec8485cabf3416245ec103b/0dd1049954dd4d7582c589b8569fca80/src/contents/48c96fdccf494cc883c1194b77cdaed8_b.webp',
        title:'החזר כספי תוך 24 שעות',
        text:'fdhgdghdfghdf',
},{
    icon:"https://cdn-camp.mini-sites.net/Publish/a6f334fbcec8485cabf3416245ec103b/0dd1049954dd4d7582c589b8569fca80/src/contents/86ad5cec7eb74b288cf8ecbe5b428062_a.png",
        title:'שרות רפואי עד הבית החזר על אמבולנס',
        text:'fdgsgsf fsgsfgsgf sfdg sdfgsdfg  sfgsfgfsdggfdsf sfdg gsdfgdfsgfd',
},{
    icon:`${svgImage.default}`,

        title:'החזר כספי גם על שירותי קוסמטיקה',
        text:'שירות מהיר ויעיל שניתן להשתמש 24 שעות ביממה בלי להמתין לטופס 17 ושאר ניירת מיותרתשירות מהיר ויעיל שניתן להשתמש 24 שעות ביממה בלי להמתין לטופס 17 ושאר ניירת מיותרתשירות מהיר ויעיל שניתן להשתמש 24 שעות ביממה בלי להמתין לטופס 17 ושאר ניירת מיותרתשירות מהיר ויעיל שניתן להשתמש 24 שעות ביממה בלי להמתין לטופס 17 ושאר ניירת מיותרת כגעגכעגכעכגע גכעגכעגכע כגע גכע ',
}]


const openPopUp=({icon,title,text})=>{
    document.getElementById("overlay").style.display = "block";
    setIsOpenPopup(true)
    setPopupInfo({icon:icon,
    title:title,
    text:text,
})

}
const closePopup=()=>{
    setIsOpenPopup(false)
    document.getElementById("overlay").style.display = "none";
}


    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 600) {
            setImgSrc(require('../images/mobile.png'));
          } else {
            setImgSrc(require('../images/page.png'));
          }
        };
    
        handleResize(); // Call the function on component mount
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return(
        
        <div className='main'>
<div id="overlay" onClick={closePopup}></div>
     
<div className='main__right-part'>    
<img className="main__img" src={imgSrc}  alt='diner image'/>
{isOpenPopup? <Popup close={closePopup } info={popupInfo}></Popup>:""}
<div className='main__content'>


    <p className='main__tittle'>
       <span className='P__title'> עכשיו כתבי שירות</span>
        <br></br>
    בהטבה בלעדית לחודש אוגוסט
 טיפולים קוסמטים
  פינוי באמבולנס פרטי, רופא אונליין או רופא עד הבית
    </p>
    <div className='main__icons'>
    
     <img  className='main__icons__items icon1' onClick={()=>openPopUp(infoForPopups[0])}src={infoForPopups[0].icon} alt='icon'></img>
        <img className='main__icons__items icon2 ' onClick={()=>openPopUp(infoForPopups[1])} src={infoForPopups[1].icon}  alt='icon'></img>
        <img className='main__icons__items icon3' onClick={()=>openPopUp(infoForPopups[2])} src={infoForPopups[2].icon} alt='icon'></img>
        <img className='main__icons__items icon4'onClick={()=>openPopUp(infoForPopups[3])} src={infoForPopups[3].icon} alt='icon'></img>
        <span className='main__icons__items text1'>{infoForPopups[0].title}</span>
        <span className='main__icons__items text2' >{infoForPopups[1].title}</span>
        <span className='main__icons__items text3'>{infoForPopups[2].title} </span>
        <span className='main__icons__items text4'>{infoForPopups[3].title}</span>
     
       
        </div>
        </div>
      
</div>

<div className='main__left-part'>
    <h3 className='main__form__tittle logo-text' >kss</h3>
    <h4 className='main__form__tittle logo__subtitle' >לחיי חיים בריאים יותר</h4>
    <h5  className='main__form__tittle form__heder ' >השאירו פרטים ונחזור אליכם בהקדם</h5>
<form className='main__form' action="https://formsubmit.co/supp.innomedia@gmail.com" method="POST">
<label   className='main__form__label' for="fname">שם מלא:</label>
<input className='main__form__input' type="text" name="fname" required>

</input>
<label   className='main__form__label' for="mail">אימייל:</label>
<input className='main__form__input' type="email" name="mail" required></input>
<label   className='main__form__label' for="phone">טלפון:</label>
<input className='main__form__input' type="tel" name="phone" required></input>
<input type="hidden" name="_captcha" value="false"></input>
<input type="hidden" name="_subject" value="ליד חדש במערכת"></input>
<input type="hidden" name="_next" value="http://media-tech-landin.com/"></input>
<button type='submit' className='main__form__btn' >שלח</button>
</form>
</div>

</div>
    )

}
export default Main;