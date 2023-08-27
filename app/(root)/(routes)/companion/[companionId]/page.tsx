import React from 'react'
import prismadb from '@/lib/prismadb';
import {CompanionForm} from './components/companion-form';

interface CompanionPageProps {
    params:{
        companionId: string;
    }
}

const CompanionPage = async({
    params
}:CompanionPageProps) => {
// TODO Check subscription
  const companion = await prismadb.companion.findUnique({
    where:{
        id: params.companionId 
    }
  })
  const categories= await prismadb.category.findMany()
  return (
    <div> 
        <CompanionForm initialData={companion} categories={categories}/>
    </div>
  )
}

export default CompanionPage