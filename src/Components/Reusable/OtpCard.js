import React from 'react'
import { Card } from 'react-bootstrap'

const OtpCard = () => {
    return (
        <>
            <Card className='shadow'>
                <Card.Body>
                    <Card.Title className='text-muted'>OTP verification</Card.Title>

                    <div className='text-center otp-card-place my-2'>
                        <input type="text" className='form-control otp-card-place' placeholder='12345' />
                    </div>
                    <Card.Link href="#"><button className='btn text-muted'>Resend</button></Card.Link>
                    <Card.Link href="#"><button className=' otp-btn-verify text-light'>Verify</button></Card.Link>

                </Card.Body>
            </Card>
        </>
    )
}

export default OtpCard
