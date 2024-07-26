import Image from 'next/image'
import CUAIMcropped from '../public/CUAIMcropped.png'


export default function Logo1() {
  return (
    <div 
    className='place-items-center'>
      <Image
      alt="logo1"
      src={CUAIMcropped}
      width = {125}
      object-fit='cover'
    />
    </div>
    
  )
}