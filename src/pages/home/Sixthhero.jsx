import React, {useState} from 'react'
import data from './imgdata'
import Modal from './Modal'

const Sixthhero = () => {
const [modal, setModal] = useState(false);
const [tempdata, setTempdata] = useState([]);

  const  getData = (img, title, desc) => {
    let tempData =[img, title, desc];
    setTempdata(item => [1, ...tempData]);
    // console.warn(tempData);
    return setModal (true);
  }
  return (
    <>
    
    <section className="py-4 container margintop-40"> 
    <div className="row justify-content-center align-item-center my-5 "> <div className='span31 margintop-60 marginright20' id='marginleft20'><span> Featured Trading Cards </span></div>
      {data.cardData.map((item, index)=>{
        return(
          <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div className="card p-0 overflow-hidden h-100 shadow">
              <img src={item.imgSrc} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  
                  <button className="btn btn-primary span20" onClick={() => getData(item.imgSrc,item.title,item.desc)}>View Pokemon</button>
                  </div>
                </div>
              </div>
        )

      })}

      


    </div>
    </section>
    {
        modal === true ? <Modal img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} hide={() => setModal(false)} />: ''
    }
    
    </>
  )
}

export default Sixthhero
