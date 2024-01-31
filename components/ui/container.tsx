import { FC, PropsWithChildren } from 'react';

export const Container = ({children}: PropsWithChildren) => {
  return (
    <div className='max-w-7xl mx-auto p-3.5 flex items-center '>
        {children}
      </div>
  )
};