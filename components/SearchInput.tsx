"use client"
import { Search } from 'lucide-react'
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'
import queryString from 'query-string'

const SearchInput = () => {
  const router = useRouter()
  const searhParams = useSearchParams()

  const categoryId = searhParams.get("categoryId");
  const name = searhParams.get("name");

  const [val,setVal] = useState(name || "");
  const debouncedVal = useDebounce(val,500)

  const onChange : ChangeEventHandler<HTMLInputElement> =(e)=>{
    setVal(e.target.value);
  }

  useEffect(()=>{
    const query={
      name: debouncedVal,
      categoryId: categoryId
    };
    const url = queryString.stringifyUrl({
       url: window.location.href,
       query
    },{skipEmptyString: true,skipNull: true})

    router.push(url)
  },[debouncedVal,router,categoryId])
  
  return (
    <div className='relative'>
        <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
        <Input onChange={onChange} value={val} placeholder='Search..' className='pl-10 bg-purple-10'/>
    </div>
  )
}

export default SearchInput