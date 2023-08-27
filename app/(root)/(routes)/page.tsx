import SearchInput from "@/components/SearchInput";
import { UserButton } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/Categories";

export default async function Home() {
   const categories = await prismadb.category.findMany();
    return (
     <div className="h-full p-4 space-y-2">
        <SearchInput/>
        <Categories data={categories}/>
     </div>
    )
  }
  