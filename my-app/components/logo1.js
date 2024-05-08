import Image from 'next/image'
import CUAIMcropped from '../public/CUAIMcropped.png'


export default function Logo1() {
  return (
    <div 
    className='fixed -z-1'>
      <Image
      alt="logo1"
      src={CUAIMcropped}
      width = {190}
      objectFit='cover '
    />
    </div>
    
  )
}