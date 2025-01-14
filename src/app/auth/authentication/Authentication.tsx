"use client"
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import { useForm } from 'react-hook-form'


import React, { useState } from 'react'

const Authentication = () => {
  
    const [formType,setFormType] = useState("Signup")
    const [loading,setLoading] = useState(false)
    const [showPassword,setShowPassword] = useState(true)

    const LoginFormSchema = z.object({
      loginEmail : z.string(),
      loginPassword:z.string()
    })

    const SignupFormSchema = z.object({
      signupFullName:z.string().nonempty("Full Name is required"),
      signupEmail : z.string().nonempty("Email is required"),
      signupPassword:z.string().nonempty("Password is required"),
      signupConfirmPassword:z.string().nonempty("Confirm Password is required").refine((val)=> val === SignupFormSchema.signupPassword,{message:"Password Don't match "})
    })

    const schema = formType === "Login"? LoginFormSchema : SignupFormSchema
    type LoginFormValues = z.infer<typeof LoginFormSchema>;
    type SignupFormValues = z.infer<typeof SignupFormSchema>;
    type FormValues = typeof schema extends z.ZodObject<infer U> ? U : never;
    const {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
      resolver:zodResolver(schema)
    })
    
    const onSubmit = (data:FormValues) => {
      console.log("Form Submitted: ", data);
    };
  return (
    <div className='w-full h-full flex overflow-hidden'>
      <div className='w-[50%] h-full flex justify-center items-center'>
        <div className='w-full flex justify-center items-center h-full'>
         {formType === "Login" ?(
           <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] border-[2px] border-black rounded-xl p-4">
           <h1 className='text-center font-bold text-2xl my-4'>Login </h1>
          
    
          <div className='input-box'>
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              type="email"
              {...register("loginEmail")}
              className='input'
              placeholder='Email'
            />
            {errors.loginEmail && <p className='input-error'>{errors.loginEmail.message}</p>}
          </div>
    
          <div className='input-box'>
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              type="password"
              {...register("loginPassword")}
              className='input'
              placeholder='Password'
            />
            {errors.loginPassword && <p className='input-error'>{errors.loginPassword.message}</p>}
          </div>

         
           <div className='flex flex-col justify-center items-end mt-3'>
           <button type="submit" className='bg-[var(--primary2)]  py-2 rounded-[5px] text-white w-[40%] font-semibold text-lg'>Login</button>
           <div className='flex justify-center items-center gap-3 mt-3 text-[var(--primary1)]'>
            <span className='cursor-pointer text-sm'>Forgot Password</span>
            <span className='cursor-pointer text-sm' onClick={()=>setFormType("Sign Up")}>Create New Account</span>
           </div>
           </div>
         
        </form>
         ):(
           <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] border-[2px] border-black rounded-xl p-4">
            <h1 className='text-center font-bold text-2xl my-4'>Sign Up </h1>
           <div className='input-box'>
             <label htmlFor="signupFullName" className=''>Full Name</label>
             <input
               id="signupFullName"
               type="text"
               {...register("signupFullName")}
               className='input'
               placeholder='Full Name'
             />
             {errors.signupFullName && <p className='input-error'>{errors.signupFullName.message}</p>}
           </div>
     
           <div className='input-box'>
             <label htmlFor="signupEmail">Email</label>
             <input
               id="signupEmail"
               type="email"
               {...register("signupEmail")}
               className='input'
               placeholder='Email'
             />
             {errors.signupEmail && <p className='input-error'>{errors.signupEmail.message}</p>}
           </div>
     
           <div className='input-box'>
             <label htmlFor="signupPassword">Password</label>
             <input
               id="signupPassword"
               type="password"
               {...register("signupPassword")}
               className='input'
               placeholder='Password'
             />
             {errors.signupPassword && <p className='input-error'>{errors.signupPassword.message}</p>}
           </div>

           <div className='input-box '>
             <label htmlFor="signupConfirmPassword">Confirm Password</label>
             <div className='relative w-full'>
             <input
               id="signupConfirmPassword"
               type={showPassword ? "text":"password"}
               {...register("signupConfirmPassword")}
               className='input '
               placeholder='Confirm Password'
             />
              
              {showPassword ? (
                <button className='absolute right-0 top-0'>{<span className="icon-[fluent--eye-48-regular] w-[24px] h-[24px]"></span>}</button>
              ):(<button className='absolute right-0 top-0'>{<span className="icon-[fluent--eye-48-regular] w-[24px] h-[24px]"></span>}</button>)}
             </div>
             
             {errors.signupConfirmPassword && <p className='input-error'>{errors.signupConfirmPassword.message}</p>}
           </div>
            <div className='flex flex-col justify-center items-end mt-3'>
            <button type="submit" className='bg-[var(--primary2)]  py-2 rounded-[5px] text-white w-[40%] font-semibold text-lg'>Sign Up</button>
            <p className='text-center mt-3 text-[var(--primary1)] cursor-pointer' onClick={()=>setFormType("Login")}>Already Have An Account ?</p>
            </div>
          
         </form>
         )}
        </div>
      </div>
      <div className='w-[50%] h-full'>
        <img src='/images/signup-banner.jpeg' alt='banner' className='w-full h-full object-cover object-center'/>
      </div>
    </div>
  )
}

export default Authentication