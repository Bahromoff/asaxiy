import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"

export default function Modals({Icon,text}) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div onClick={() => setLgShow(true)}>{Icon} </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{paddingTop:"100px",}}
      >
        <Modal.Header style={{backgroundColor:"red"}} closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <span style={{marginLeft:"200px"}}>Kirish yoki shaxsiy hisob yaratish</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"green"}}>
             <p style={{marginBottom:"-2px"}}>telefon</p>
            <form action="">
            <input type="phone" placeholder='+998(__)___-__-__'/>
            </form>
            <button>Faollashtirish kodini oling</button>
        
        </Modal.Body>
      </Modal>
    </>
  );
}

