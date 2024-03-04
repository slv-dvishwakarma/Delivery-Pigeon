import React, { useState } from 'react';
import { Payment } from './Payment';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Razorpay');

    type Tab = 'Razorpay' | 'cash';

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="flex mt-5">
                <span
                    className={`mr-4 px-4 py-2 focus:outline-none cursor-pointer after:content-[''] after:absolute after:h-0.5 after:w-auto after:transition-[0.4s] after:duration-[all] after:bottom-0 after:inset-x-2.5 relative text-lg font-[600] ${activeTab === 'Razorpay' ? 'text-[#005AAB] after:bg-[#005AAB]' : ''
                        }`}
                    onClick={() => handleTabClick('Razorpay')}
                >
                    Razorpay
                </span>
                <span
                    className={`px-4 py-2 focus:outline-none cursor-pointer after:content-[''] after:absolute after:h-0.5 after:w-auto after:transition-[0.4s] after:duration-[all] after:bottom-0 after:inset-x-2.5 relative text-lg font-[600] ${activeTab === 'cash' ? 'text-[#005AAB] after:bg-[#005AAB]' : ''
                        }`}
                    onClick={() => handleTabClick('cash')}
                >
                    Cash
                </span>
            </div>
            <div className="mt-4">
                {activeTab === 'Razorpay' && <div><Payment /></div>}
                {activeTab === 'cash' && <div>
                    <select
                        className="form-control w-full h-[calc(46px_+_2px)] text-base leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 rounded-lg border-solid border-[#ced4da]"
                        name="payment_point"
                        required
                    >
                        <option disabled>Select payment collection address</option>
                        <option value="pickup">Pickup Address</option>
                        <option value="drop1">Drop Address 1</option>
                    </select>
                </div>}
            </div>
        </div>
    );
};

export default Tabs;
