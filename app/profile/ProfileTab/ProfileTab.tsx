import { GridBox } from '@/components/GridBox'
import React from 'react'

export const ProfileTab = () => {
    return (
        <div className='profile'>
            <form>
            <h3 className='flex items-center text-xl text-[#005aab] font-semibold mb-0 pt-1'>Account Details</h3>
                <GridBox columns={2} gap={4}>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="text"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="First Name"
                            autoComplete="off"
                            name="first-name"
                        />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="text"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="Last Name"
                            autoComplete="off"
                            name="last-name"
                        />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="email"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="Email"
                            autoComplete="off"
                            name="email"
                        />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="text"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="Phone Number"
                            autoComplete="off"
                            name="phone"
                            defaultValue="+91 1234567890"
                        />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="text"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="Address"
                            autoComplete="off"
                            name="address"
                        />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <input
                            type="text"
                            className="w-full text-md leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                            placeholder="Pin Code"
                            autoComplete="off"
                            name="code"
                        />
                    </GridBox.GridItem>
                </GridBox>
                <button type='submit' className='border-2 border-solid border-[#005AAB] bg-[#005AAB] text-[white] w-full mx-0 my-5 p-2.5 rounded-[10px] hover:bg-transparent hover:text-[#005AAB] mt-10'>Submit</button>
            </form>
        </div>
    )
}
