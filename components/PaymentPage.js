"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/UserActions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'

const PaymentPage = ({ username }) => {
    const [currentUser, setcurrentUser] = useState({})
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get('paymentdone') === 'true') {
            toast.success('Thanks for the Chai!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setPaymentform((prevForm) => ({
            ...prevForm,
            [name]: value,
        }))
    }

    const pay = async (amount, event) => {
        event.preventDefault()
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me A Chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="user-profile mb-20">
                <div className='profile-photos relative'>
                    <img className="cover-image object-cover object-center w-full h-96" src={currentUser.coverpic} alt="" />
                    <img className='profile-image absolute -bottom-[3rem] right-[42%] md:right-[46.5%] border border-white rounded-full size-28 object-cover' src={currentUser.profilepic} width={100} height={100} alt="Profile Image" />
                </div>

                <div className="user-info flex flex-col items-center justify-center gap-2 mt-14">
                    <h1 className="text-3xl font-bold">@{username}</h1>
                    <p className="text-lg">Let&apos;s help {username} get a chai</p>
                    <div className='text-slate-400'>
                        {payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                    </div>
                </div>
                <div className='payment flex flex-col md:flex-row gap-3 w-[80%] mx-auto mt-10'>
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-6">
                        <h2 className="text-2xl font-bold">Top 10 Supporters</h2>
                        <ul className="supporter-list flex flex-col gap-2 mt-5">
                            {payments.length === 0 && <p>No payments yet</p>}
                            {payments.map((payment, index) => (
                                <li key={index} className="supporter flex items-center gap-2">
                                    <img className="rounded-full" src="/avatar.gif" width={50} height={50} alt="Profile Image" />
                                    <p className="font-bold">@{payment.name} donated ₹{payment.amount} with a message: &quot;{payment.message}&quot;</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="make-payment w-full md:w-1/2 bg-slate-900 rounded-lg p-6 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold">Make a Payment</h2>
                        <form className="payment-form flex flex-col gap-3 mt-5">
                            <input name="name" onChange={handleChange} value={paymentform.name} type="text" placeholder="Enter Name" className="bg-slate-800 rounded-lg p-2" />
                            <textarea name="message" onChange={handleChange} value={paymentform.message} placeholder="Enter Message" className="bg-slate-800 rounded-lg p-2" />
                            <div className="payment-options flex gap-2 w-full">
                                <input name="amount" onChange={handleChange} value={paymentform.amount} type="text" placeholder="Enter Amount" className="bg-slate-800 rounded-lg p-2 flex-grow flex-shrink min-w-0" />
                                <button onClick={(e) => pay(1000, e)} className="text-white bg-gradient-to-br from-black to-gray-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 py-1 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}>₹10</button>
                                <button onClick={(e) => pay(2000, e)} className="text-white bg-gradient-to-br from-black to-gray-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 py-1 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}>₹20</button>
                                <button onClick={(e) => pay(3000, e)} className="text-white bg-gradient-to-br from-black to-gray-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 py-1 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}>₹30</button>
                            </div>
                            <button onClick={(e) => pay(Number.parseInt(paymentform.amount) * 100, e)} type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage