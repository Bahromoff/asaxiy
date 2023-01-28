import React from 'react'
import './Fouter.css'

function Fouter() {
  return (
    <div className='fouter-con'>
        <div className="ichki-futer">
            <div className="footer-top-container">
            <div className='footer-top-item'>
            <h5 style={{fontSize:"17px"}}>Endi bozorga borishga hojat yo'q
            <br />
            <h6 style={{color:"grey",fontSize:"14px"}}>Bizda qulay narxlar vs uyga <br />yetkazib berish mavjud</h6>
            </h5>
        </div>

        <div className="footer-top-item">
            <h5 style={{fontSize:"17px"}}>Tez yetkazib berish
            <br />
            <h6 style={{color:"grey"}}>Bizning xizmatimiz sizni <br />ajablantiradi</h6>
            </h5>
        </div>

        <div className="footer-top-item">
            <h5 style={{fontSize:"17px"}}>Siz uchun qulayliklar
            <br />
            <h6 style={{color:"grey"}}>Nosozlik yuzaga kelganda <br />tez rasmiylashtirish va <br />qaytarish kafolati</h6>
            </h5>
        </div>

        <div className="footer-top-item">
            <h5 style={{fontSize:"17px"}}>Bo'lib to'lash
            <br />
            <h6 style={{color:"grey"}}>3, 6, 9 va 12 oy davomida <br />oldindan to'lovsiz</h6>
            </h5>
        </div>
            </div>
        </div>

        <div className="malumot-container">
            <div className="malumot-con">
                <div className="malumot-text">
                    <h5>Ma'lumotlar</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fouter