"use client"
import React, { use, useState } from 'react'

import { Button } from '../ui/button'
import Link from 'next/link';
import { Input } from '../ui/input';
import {  Cross, icons, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Label } from '../ui/label';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { useStore } from '@/store/store';

const Navbar = () => {
    const [tooglebutton, settooglebutton] = useState(false)
    const toogleButton=()=>{
        settooglebutton(!tooglebutton)

    }
    console.log(tooglebutton)
  return (
    <header className="  bg-transparent  backdrop-blur-lg bg-blend-color-burn z-50 border-b-2 w-full">
      <div className="  flex justify-between h-20 ">
        <div className="flex items-center gap-20 ">
          <div className=" font-extrabold  text-green-400 text-3xl pl-4 md:pl-20  ">
            <Link href="/">Foodify</Link>
          </div>
          <div className="hidden md:block">
            <nav className="gap-10 flex text-xl ">
              <Link className="hover:underline" href="/menu">
                Menu
              </Link>
              <Link className="hover:underline" href="/about">
                About{" "}
              </Link>
              <Link className="hover:underline" href="/admin/menu">
                Admin
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex relative items-center  justify-center space-x-2 pr-5  ">
          <div className="  md:flex  hidden relative items-center">
            <Search className="absolute left-5 " />
            <Input
            // value={}
              type="text"
              className=" px-15 h-12"
              placeholder="Search menu here...."
            />
          </div>
          <Link href="/cart" className="relative  h-12 items-center flex">
            <Button className='cursor-pointer' size="icon-lg" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute h-4 px-1.5  bg-red-500 rounded-full text-white font-bold  top-[1] right-0  text-center text-xs flex items-center justify-center ">
                {useStore((store) => store.cart.length)}
              </span>
            </Button>
          </Link>
          <div className="flex items-center">
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
          </div>
          {/* Mobile Toogle option */}
          <div className="sm:block md:hidden">
            <Button onClick={toogleButton} size="icon-sm">
              {tooglebutton ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <div>
        {tooglebutton && (
          <div className="pl-4  flex flex-col gap-2 ">
            <div className="flex flex-col gap-1 ">
              <Link className="hover:underline" href="/menu">
                Menu
              </Link>
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/admin/menu">
                Admin
              </Link>
            </div>
            <div className="relative flex  items-center  justify-center">
              <Search className="absolute  left-4   flex items-center justify-center" />
              <Input
                className="pl-13 flex items-center justify-center"
                type="text"
                placeholder="Search menu here...."
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar
