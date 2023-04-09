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
    <section className="py-4 py-lg-5 container">
    <div className="row justify-content-center align-item-center">
      {data.cardData.map((item, index)=>{
        return(
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div class="card p-0 overflow-hidden h-100 shadow">
              <img src={item.imgSrc} class="card-img-top" key={index}/>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.desc}</p>
                  
                  <button className="btn btn-primary" onClick={() => getData(item.imgSrc,item.title,item.desc)}>Click me</button>
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
