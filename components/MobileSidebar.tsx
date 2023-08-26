import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet,SheetContent,SheetTrigger } from './ui/sheet'
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger className='md:hidden pr-4'>
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className='p-0 bg-secondary pt-10 w-32'>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSidebar