import { useState } from 'react';
import StudentData from './data/students.json';
import { useRouter } from 'next/router';

export default function Students() {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const searchFilter = (array) => {
        return array.filter(
            (e) => e.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    const filteredData = searchFilter(StudentData);
    let active = 0, inactive = 0;

    for (let i = 0; i < StudentData.length; i++) {
        if (StudentData[i].active) {
            active++;
        }
        else {
            inactive++;
        }
    }

    return (
        <div className="bg-gray-950 font-title">
            <nav className="bg-gray-900 w-full h-16 flex justify-between items-center px-8">
                <div className="flex items-center text-lg font-semibold">
                    <img src="https://nhs.edu.mn/favicon.ico" className="h-12" />
                    <p className="border-l-2 border-gray-800 px-4 ml-4">Students</p>
                </div>
                <div className="flex">
                    <button className="text-gray-500 ml-6">Dashboard</button>
                    <button onClick={() => router.push('/')} className="ml-6">Main menu</button>
                    <button onClick={() => router.push('/#about')} className="ml-6">About us</button>
                </div>
                <div className="h-10 w-10 rounded-full bg-white"></div>
            </nav>
            <div className="flex min-h-screen">
                <div className=" w-[5%] bg-slate-900 flex flex-col items-center pt-8">
                    <button className='h-12 w-12 bg-gray-500 flex items-center justify-center rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>

                    </button>
                    <button className='h-12 w-12 bg-gray-500 flex items-center justify-center rounded-lg mt-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6" className='h-10 mt-4'>
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                    </button>
                </div>
                <main className="w-[95%] flex flex-col">
                    <div className="w-full flex flex-col px-10 pt-8">
                        <p className="text-white font-bold text-3xl">List of 11B students</p>
                        <ul className="list-disc text-white flex pl-4 mt-4">
                            <li className="text-green-500"><p className="text-white font-medium">Active {active}</p></li>
                            <li className="ml-8 text-gray-500"><p className="text-white font-medium">Inactive {inactive}</p></li>
                        </ul>
                        <div className="flex items-center mt-10">
                            <div className="relative">
                                <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="search"
                                    className="pl-12 pr-4 h-10 bg-gray-950 border border-gray-500 focus:ring-black rounded-lg mr-8 shadow-inner"
                                    placeholder="Search"
                                />
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-6">
                                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                            <div className="flex justify-center bg-gray-800 w-80 px-4 py-1 rounded-lg">
                                <p>View type:
                                    <button onClick={() => setGrid(true)} className={`px-2 py-2 ml-4 mr-2 rounded-lg ${grid ? "bg-white/10" : ""}`}>Grid view</button>
                                    /
                                    <button onClick={() => setGrid(false)} className={`ml-2 px-2 py-2 rounded-lg ${grid ? "" : "bg-white/10"}`}>List view</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full p-10 gap-x-8 gap-y-12 ${grid ? "grid grid-cols-4" : "flex flex-col items-center"}`}>
                        {filteredData.map((data) => (
                            <div className={`bg-slate-800 w-full h-[28rem] border-b-4 rounded-lg px-6 pt-4 ${data.active ? "border-green-800" : "border-gray-600"} ${grid ? "" : "mt-12 w-7/12"}`}>
                                <div className="w-full h-[10%] flex items-center justify-between">
                                    <div className={`${data.active ? "bg-green-800" : "bg-gray-600"} h-8 flex items-center pl-6 pr-4 rounded-2xl`}>
                                        <ul className="list-disc text-gray-200">
                                            <li className="">{data.active ? "Active" : "Inactive"}</li>
                                        </ul>
                                    </div>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full h-[40%] flex flex-col justify-center items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="slate" class="size-24">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="text-gray-300 font-bold mt-4 text-lg">{data.name}</p>
                                    <p className="text-gray-500 font-medium mt-0">Student</p>
                                </div>
                                <div className="w-full h-[35%] bg-slate-900 border-2 text-gray-400 border-slate-950 rounded-lg pl-4 pt-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                                        </svg>
                                        <p className="white ml-2">{data.studentID}</p>
                                    </div>
                                    <div className="flex mt-1.5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            <p className="white ml-2">{data.city}</p>
                                        </div>
                                        <p className='mx-2'>•</p>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-4">
                                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                            </svg>
                                            <p className="white ml-2">{data.favClass}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-4">
                                                <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
                                            </svg>
                                            <p className="ml-2 bg-slate-800 rounded-full px-2 text-sm text-gray-400 font-medium border border-gray-300 shadow-inner">{data.email}</p>

                                        </div>
                                        <div className="flex items-center mt-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="transparent" class="size-4">
                                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                            </svg>
                                            <p className="ml-2 bg-slate-800 rounded-full px-2 text-sm text-gray-400 font-medium border border-gray-300 shadow-inner">{data.phoneNo}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[15%] flex items-center">
                                    <p className='text-gray-600 font-medium'>Enrolled <span className='text-gray-400 font-semibold'>{data.joinDate}</span>  </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </main>
            </div>

        </div>
    )
}