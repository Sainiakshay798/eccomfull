import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { Link } from 'react-router-dom'
const SingUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [data,setData] = useState({

      email:"",
      password:"",
      name : "",
      confirmPassword:"",
      profilepic : ""
    })
      
    const handleOnChange =(e)=>{
      const { name , value } = e.target
      setData((preve)=>{
        return{
          ...preve,
          [name]: value


        }
      
      } )
    } 
const handleUploadPic=(e)=>{
  const file = e.target.files[0]
  
  console.log("file", file)

}

    const handleSubmit =(e)=>{
       e.preventDefault()
      
    }
    
    console.log("data login",data)

  return (
    <section id= 'signup'>
    <div className='mx-auto container p-4'>
      
            <div className='bg-white p-5 w-full max-w-md mx-auto'>
                  
                  <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                       <div>
                       <img src={loginIcons} alt='login icons'/>
                       </div>
                       <form> 
                        <label>
                        <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                        Upload Photo 

                       </div>
                          <input type='file' className='hidden' onChange={handleUploadPic}/>
                        </label>
                       
                       </form>
                  </div>
                    
                    <form className='pt-6 flex flex-col gap-2'  onSubmit={handleSubmit}>
                    <div className='grid'>
                         <lable>Name : </lable>                                 
                         <div className='bg-slate-200 p-2'> 
                          <input type='Text' 
                          placeholder='enter your name '
                           name='name' 
                           value={data.name}
                           onChange={handleOnChange} 
                           className='w-full h-full outline-none bg-transparent '/> 
                          </div>                                  
                      </div>



                     <div className='grid'>
                         <lable>Eamil : </lable>                                 
                         <div className='bg-slate-200 p-2'> 
                          <input type='Email' 
                          placeholder='enter email '
                           name='email' 
                           value={data.email}
                           onChange={handleOnChange} 
                           className='w-full h-full outline-none bg-transparent '/> 
                          </div>                                  
                      </div>

                      <div>
                         <lable>Password : </lable>                                 
                         <div className='bg-slate-200 p-2 flex' > 
                          <input type= {showPassword ? "text":"password"}
                           placeholder='enter password ' 
                           value={data.password}
                            name='password'
                            onChange={handleOnChange} 
                           className='w-full h-full outline-none bg-transparent'/>  
                           <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                            <spam>
                              {
                                showPassword ?(
                                  <FaEyeSlash />
                                )
                                :
                                (
                                  <FaEye />

                                )

                              }
                            
                           
                            </spam>
                           </div>
                          
                          </div> 
                         {/* <Link to={'/Forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-500'>
                          Forgot Password ?
                         </Link> */}
                                                      
                      </div>

                      <div>
                         <lable> Confirm Password : </lable>                                 
                         <div className='bg-slate-200 p-2 flex' > 
                          <input type= {showConfirmPassword ? "text":"password"}
                           placeholder='enter Confirm password ' 
                           value={data.confirmPassword}
                            name='confirmPassword'
                            onChange={handleOnChange} 
                           className='w-full h-full outline-none bg-transparent'/>  
                           <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                            <spam>
                              {
                                showConfirmPassword ?(
                                  <FaEyeSlash />
                                )
                                :
                                (
                                  <FaEye />

                                )

                              }
                            
                           
                            </spam>
                           </div>
                          
                          </div> 
                         {/* <Link to={'/Forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-500'>
                          Forgot Password ?
                         </Link> */}
                                                      
                      </div>





                     
                      <button className='bg-red-600 text-white hover:bg-red-400 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sing Up</button>


                    </form> 
                    <p className='my-5'>already  have account ? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline' >Login</Link></p>                               
                   
            </div>




      </div>


</section>
  )
}

export default SingUp
