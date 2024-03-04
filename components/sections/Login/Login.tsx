import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";

interface Props {
    togglePopup: () => void;
}

export const Login: React.FC<Props> = ({ togglePopup }) => {

    useEffect(() => {
        const loggedIn = typeof window !== 'undefined' && sessionStorage.getItem('loggedIn') === 'true';
        if (loggedIn) {
            router.push('/order');
        }
    }, []);
    
    const router = useRouter()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) {
            alert("Please agree to the terms of use.");
            return;
        }
        const hardcodedPhoneNumber = '1234567890';
        const hardcodedOTP = '1234';
        if (phoneNumber === hardcodedPhoneNumber && otp === hardcodedOTP) {
            sessionStorage.setItem('loggedIn', 'true');
            router.push('/order');
            togglePopup();
        } else {
            alert('Invalid mobile number or OTP. Please try again.');
        }
        setPhoneNumber('');
        setOtp('');
        setAgreed(false);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    };

    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    };

    return (
        <div>
            <div className="fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" >
                <div className="flex items-center justify-center min-h-screen">
                    <div className="relative bg-white w-100 mx-auto shadow-lg rounded-[20px]">
                        <div className='p-6 items-center border-b-[#e9ecef] border-b border-solid flex justify-between'>
                            <div>
                                <h2 className='font-medium text-xl'>Login</h2>
                            </div>
                            <div >
                                <button className="p-2 text-xl" onClick={togglePopup}>
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                        <div className="pl-6 pr-6 pt-5 pb-6">
                            <form onSubmit={handleSubmit} className="space-y-6 login-form">
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className={`text-sm w-full leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] ${phoneNumber.length !== 10 && 'is-invalid'}`}
                                        placeholder="Phone*"
                                        value={phoneNumber}
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className='text-sm'>You will receive a 4 digit OTP code.</label>
                                    <input
                                        type="text"
                                        className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                        placeholder="OTP code*"
                                        value={otp}
                                        onChange={handleOtpChange}
                                        required
                                    />
                                </div>
                                <div className="resentBtn text-center">
                                    <button className="text-[#005AAB]">Get OTP</button>
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="mr-[5px]"
                                        id="customCheck"
                                        name="example1"
                                        checked={agreed}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className="custom-control-label text-sm" htmlFor="customCheck">
                                        By resending I agree with Term of use of Delivery Pigeon
                                    </label>
                                </div>
                                <button type="submit" className="w-full bg-[#005AAB] text-[white] p-2.5 rounded-[10px] border border-solid border-[#005AAB] hover:text-[#005AAB] hover:bg-white">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
