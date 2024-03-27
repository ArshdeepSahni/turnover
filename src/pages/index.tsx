import { type NextPage } from "next";

import { api } from "../utils/api";
import Layout from "../components/Layout";
import Interest from "../components/Interest";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pages, setPages] = React.useState<number[]>([]);
  const [email, setEmail] = React.useState<string>('')
  const { data:allData, refetch:refetchAllData } = api.interest.interest.useQuery({email:email});
  const { data, refetch } = api.interest.paginatedInterest.useQuery({currentPage:currentPage, email:email});
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("email") !== null) {
        const localEmail = JSON.parse(localStorage.getItem("email")!);
        setEmail(localEmail);
      }
    }
  },[])
  useEffect(() => {
    selectPage(1)
  },[email])
  useEffect(() => {
    if(data && allData)
    {
      if(data?.[data?.length-1]?.interest!==allData?.[allData?.length-1]?.interest){
        // alert(data?.[data?.length-1]?.interest + ' | ' + allData?.[allData?.length-1]?.interest)
        const endPage = currentPage+6>Math.ceil(allData?.length / 6) ? Math.ceil(allData?.length / 6) : currentPage+6
        setPages(endPage < 7 ? [...Array(8).keys()].map(i => i + 1) : currentPage !== pages[pages?.length - 1] ? pages?.length ? pages : [...Array(7).keys()].map(i => i + 1) : [...Array(Math.min(7, endPage - currentPage + 1)).keys()].map(i => i + currentPage))
      }
    }

  },[allData, data])
  useEffect(() => {
    console.log(pages, 'pages')
  },[pages])
  const selectPage = (page: number) => {
    refetchAllData();
    refetch();
    setCurrentPage(page);

    const endPage = Math.ceil(allData?.length / 6);
    const maxVisiblePages = 7; // Maximum number of visible pages

    let startPage = 1;
    let visiblePages: number[] = [];

    if (endPage <= maxVisiblePages) {
      visiblePages = [...Array(endPage).keys()].map(i => i + 1);
    } else {
      // Calculate the startPage based on the current page and the maximum visible pages
      if (page <= Math.floor(maxVisiblePages / 2) + 1) {
        startPage = 1;
      } else if (page >= endPage - Math.floor(maxVisiblePages / 2)) {
        startPage = endPage - maxVisiblePages + 1;
      } else {
        startPage = page - Math.floor(maxVisiblePages / 2);
      }

      visiblePages = [...Array(maxVisiblePages).keys()].map(i => i + startPage);
    }

    setPages(visiblePages);
  };
  return (
    <Layout>
          <div className="rounded-[20px] min-h-full justify-between border border-[#C1C1C1] flex flex-col items-center w-[576px] px-[60px] py-10">
            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
          <div>
          <h1>Please mark your interests!</h1>
          <p className="mt-6 mb-9">We will keep you notified.</p>
          <div className="w-full">
          <p className="text-[20px] font-medium mb-7">My saved interests!</p>
          <div className="flex flex-col space-y-6">
          {data?.map(interest => (
            <div key={interest.id} className="interest">
              <Interest interest={interest} email={email} />
            </div>
          ))}
          </div>
          </div>
          </div>
          <div className="w-full flex space-x-2 mt-16">
            <button onClick={() => selectPage(1)}>{'<<'}</button>
            <button onClick={() => selectPage(currentPage - 1>1 ? currentPage - 1 : 1)}>{'<'}{(currentPage>7 || pages[0]===7)&& ' ...'}</button>
            {pages?.map((page) => (
              <button onClick={()=>selectPage(page)} className={`transition-all hover:text-black ${currentPage===page? 'text-black':'text-[#ACACAC]'}  rounded min-w-4 px-1`}>{page}</button>
            ))}
            <button onClick={()=> selectPage(currentPage + 1<Math.ceil(allData?.length / 6) ? currentPage + 1 : Math.ceil(allData?.length / 6))}>{Math.ceil(allData?.length / 6) > pages?.[pages?.length - 1] && '... '}{'>'}</button>
            <button onClick={() => selectPage(Math.ceil(allData?.length / 6))}>{'>>'}</button>
          </div>
      </div>
    </Layout>
  );
};

export default Home
