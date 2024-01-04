'use client';
import CountUp from 'react-countup'

const Badge = ({
  containerStyles, 
  icon,
  endCountNum,
  endCountext,
  BadgeText
}) => {
  return (
    <div className={`badge ${containerStyles}`} >
      <div className='text-3xl text-primary' >{icon}</div>
        <div className='flex items-center gap-x-2'>
          <div className='text-4xl leading-none font-bold text-primary'>
            <CountUp end={endCountNum} delay={1}  duration={1}/>
            {endCountext}
          </div>    
         <div> {BadgeText}</div>
        </div>
      </div>
  
  )
}

export default Badge