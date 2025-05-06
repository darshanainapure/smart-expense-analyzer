import React, { children } from 'react'
import CARD_2 from "../../assets/images/login.webp"
import { TypeAnimation } from "react-type-animation";
import {LuTrendingUpDown} from "react-icons/lu"
const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-18 pt-11 pb-40'>
            <h1 className='text-2xl md:text-2xl xl:text-2xl'> 
                Expense Analyzer
            </h1>
            <br />
            <h2 className="text-4xl md:text-5xl xl:text-4xl">
            Track your{" "}
            <TypeAnimation
              sequence={["Finances", 1000, "Expenses", 1000, "Incomes", 1000]}
              wrapper="span"
              speed={20}
              className="text-primary inline-block"
              repeat={Infinity}
            />{" "}
          </h2>
          <br />

          <h7 className="text-sm sm:text-base lg:text-lg my-8 text-balance text-center w-[90%] xl:w-[85%]">
            Welcome to{" "}
            <span className="text-primary font-calSans">Expense Analyzer</span>, your
            ultimate solution for managing your personal finances effectively.
            With Expense Analyzer, you can easily track your expenses, monitor your
            income, and stay on top of your financial goals. Gain clear insights through dynamic visualizations that make understanding your financial trends simple and intuitive.
          </h7>
            {children}
        </div>
        <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
            <div className='w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5'></div>
            <div className='w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10'></div>
            <div className='w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5'></div>
            
            {/* <div className='grid grid-cols-1 z-20'>
                <StatsInfoCard 
                icon={<LuTrendingUpDown/>}
                label="Track Your Income & Expenses"
                value="430,000"
                color="bg-primary"
                >

                </StatsInfoCard>

            </div> */}

            <img src={CARD_2} className='w-64 lg:w-[75%] drop-shadow-xl relative z-10' alt='Chart' style={{ bottom: '-9rem' }} />

        </div>
    </div>
  )
}

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color}) => {
    return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 broder broder-gray-200/50 z-10'>
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div>
            <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
            <span className='text-[20px'>${value}</span>
        </div>
    </div>
    
}