import Image from 'next/image'
import backgroundimage from '../public/background1.png'
 
export default function Background1() {
  return (
    
    <div 
    className='fixed -z-1'>

      <Image
      alt="Background1"
      src={backgroundimage}
      layout="fill"
      objectFit='cover '
    />


  
    </div>
    
  )
}