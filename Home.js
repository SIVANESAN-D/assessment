import React from 'react'
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import b from'./Asset/b.jpeg'
import a from'./Asset/a.jpeg'
import c from'./Asset/c.jpeg'
import d from'./Asset/d.jpeg'
import e from'./Asset/e.jpeg'
import f from'./Asset/f.jpeg'
import h from'./Asset/h.jpeg'
import i from'./Asset/i.jpeg'

const Home = () => {
  return (

    <div className='product'>

      {/* <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div> */}


      <div class="row">
        <div class="col">
          <Cart
          image={b}
          name ="buRger"
          dispeic="$45"
          actuall_p="$62"
          discrip ="whatever happen please don't forget to eat"
          />
        </div>


        <div class="col">
          <Cart
          image={a}
          name ="briYani"
          dispeic="$125"
          actuall_p="$633"
          discrip ="whatever happen please don't forget to eat"/>
        </div>


        <div class="col">
          <Cart
          image={c}
          name ="parOta"
          dispeic="$32"
          actuall_p="$60"
          discrip ="whatever happen please don't forget to eat"/>
          
        </div>
        
        
      </div>
      <div class="row">
      <div class="col">
          <Cart
          image={e}
          name ="puRi"
          dispeic="$332"
          actuall_p="$630"
          discrip ="whatever happen please don't forget to eat"/>
          
        </div>
        <div class="col">
          <Cart
          image={f}
          name ="cake"
          dispeic="$232"
          actuall_p="$610"
          discrip ="whatever happen please don't forget to eat"/>
          
        </div>
        <div class="col">
          <Cart
          image={h}
          name ="doSa"
          dispeic="$132"
          actuall_p="$610"
          discrip ="whatever happen please don't forget to eat"/>
          
        </div>


</div>

    </div>
     
     
      
      
      
    //   <Cart
    //    image={d}
    //    name ="pongal"
    //    dispeic="$38"
    //    actuall_p="$50"
    //    discrip ="whatever happen please don't forget to eat"/>
    //   <Cart
    //   image={e}
    //   name ="puri"
    //   dispeic="$32"
    //   actuall_p="$40"
    //   discrip ="whatever happen please don't forget to eat"/>
    //    <Cart
    //   image={f}
    //   name ="cake"
    //   dispeic="$10"
    //   actuall_p="$30"
    //   discrip ="whatever happen please don't forget to eat"/>
    //    <Cart
    //   image={h}
    //   name ="Dosa"
    //   dispeic="$180"
    //   actuall_p="$380"
    //   discrip ="whatever happen please don't forget to eat"/>
    //    <Cart
    //   image={i}
    //   name ="itli"
    //   dispeic="$18"
    //   actuall_p="$880"
    //   discrip ="whatever happen please don't forget to eat"/>
      
    // </div>
   
  )
}
export default Home