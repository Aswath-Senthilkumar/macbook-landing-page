import {Canvas} from '@react-three/fiber'
import StudioLights from './three/StudioLights'
import useMacbookStore from '../store'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'

import ModelSwitcher from './three/ModelSwitcher'

const Viewer = () => {

  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});
  
  return (
    <section id='viewer'>
        <h2>Take a look at the product.</h2>
        <div className='controls'>
          <p className='info'>
            MacBook Pro | Available in 14" & 16" in Space Grey & Black
          </p>
          <div className='flex-center gap-5 mt-5'>
            <div className='color-control'>
              <div 
                onClick={() => setColor('#babbbb')} 
                className={clsx('bg-neutral-300', color === '#babbbb' && 'active')}
              />
              <div 
                onClick={() => setColor('#2e2c2e')} 
                className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
              />
            </div>
            <div className='size-control'>
            <div 
                onClick={() => setScale(0.06)} 
                className={clsx(scale === 0.06 ?  'bg-white text-black' : 'bg-transparent text-white')}
              >
                <p>14"</p>
              </div>
              <div 
                onClick={() => setScale(0.08)} 
                className={clsx(scale === 0.08 ?  'bg-white text-black' : 'bg-transparent text-white')}
              >
                <p>16"</p>
              </div>
            </div>
          </div>
        </div>

        <Canvas id="canvas" camera={{position: [0, 2, 5], near: 0.1, fov: 50, far: 100}}>
          <StudioLights />
          <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
        </Canvas>
    </section>
  )
}

export default Viewer