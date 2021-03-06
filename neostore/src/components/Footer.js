import React from 'react'
import axios from 'axios'

const handleTandC = ()=>{
axios.get('http://180.149.241.208:3022/getTermsAndConditions').then((response)=>{
    console.log(response.data)
    window.open(`http://180.149.241.208:3022/${response.data.termsAndConditions_details[0].fileName}`,'_blank')
})
}


const handlereturnPolicy = ()=>{
axios.get('http://180.149.241.208:3022/getGuarantee').then((response)=>{
    console.log(response.data)
    window.open(`http://180.149.241.208:3022/${response.data.guarantee_details[0].fileName}`,'_blank')
})
}

function Footer() {
    return (
        <div className='dashFooter'>
            <div className="container">
                    <footer className="d-flex justify-content-between flex-column flex-md-row">
                        <div className='fbasis'>
                            <div className='d-flex flex-column'>
                                <h5 className="mt-3 mb-4">
                                    About Company
                            </h5>
                                <small>
                                    NeoSOFT Technologies is here at your quick and easy service for shooping .
                            </small>
                                <small>
                                    Contact information
                            </small>
                                <small>
                                    Email: contact@neosofttech.com
                            </small>
                                <small>
                                    Phone: +91 0000000000
                            </small>
                                <small>
                                    MUMBAI, INDIA
                            </small>
                            </div>
                        </div>

                        <div className='fbasis'>
                            <div className='d-flex flex-column'>
                                <h5 className="mt-3 mb-4">
                                    Information
                            </h5>
                                <small onClick={handleTandC}>
                                    Terms and Conditions
                        </small>
                                <small onClick={handlereturnPolicy}>
                                    Gurantee and Return Policy
                        </small>
                                <small>
                                    Contact Us
                        </small>
                                <small>
                                    Privacy Policy
                        </small>
                                <small>
                                    Locate Us
                        </small>
                            </div>
                        </div>

                        <div className='fbasis'>
                            <div className='d-flex flex-column'>
                                <h5 className="mt-3 mb-4">
                                    Newsletter
                        </h5>
                                <small>
                                    Signup to get exclusive offer from our favorite brands and to be well up in the news
                        </small>
                                <small>
                                    <input className='m-2' placeholder="your email" />
                                </small>
                                <small>
                                    <button className='m-2 subBtn'>Subscribe</button>
                                </small>

                            </div>
                        </div>
                    </footer>
                    <small>Copyright 2017 NeoSOFT Technologies All rights reserved | Design By Shubham Soni</small>
                </div>
        </div>
    )
}

export default Footer
