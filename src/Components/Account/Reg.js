import React from 'react';
import '../../Assets/CSS/Account/Registration.css'
import { Form} from 'react-bootstrap';
import OtpCard from '../Reusable/OtpCard';
const Reg = () => {
    return (
        <>
            <div className="container container-bg-color mb-3">

                <form>

                    <div className="card mt-2 card-title1">
                        <div className="card-body center-title">
                            <h5 className='card-title mx-5'>Center Details</h5>
                        </div>
                    </div>
                    <div className="card-body shadow">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="mx-5">

                                        <div className='center-Details-form'>


                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Name</label>
                                                <div className="col-sm-9">
                                                    <input required type="text" className="form-control" id="inputPassword" placeholder='Unity throught population center' />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Country</label>
                                                <div className="col-sm-5">
                                                    <Form.Select aria-label="Default select example" className='text-muted'>

                                                        <option value="1">Bangladesh</option>
                                                        <option value="2">Country-2</option>
                                                        <option value="3">Country-3</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Zip code</label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='1230' />
                                                </div>
                                            </div>

                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">HotLine</label>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='00 91123 498 762' />
                                                </div>
                                            </div>

                                        </div>
                                        {/* Right side form start */}
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex  align-items-center">
                                    <div className='right-side-form'>

                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-3 col-form-label text-muted">City</label>
                                            <div className="col-sm-8">
                                                <Form.Select aria-label="Default select example" className='text-muted'>

                                                    <option value="0">Dhaka</option>
                                                    <option value="1">City-2</option>
                                                    <option value="2">City-3</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Area</label>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="inputPassword" placeholder='Uttara' />
                                            </div>
                                        </div>




                                    </div>





                                </div>
                            </div>


                        </div>

                    </div>






                    {/*............ person details start.................. */}

                    <div className="card mt-5 card-title1">
                        <div className="card-body center-title">
                            <h5 className='card-title mx-5'>Person details</h5>
                        </div>
                    </div>


                    <div className="card-body shadow">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="mx-5">

                                        <div className='center-Details-form'>


                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Name</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='HM Asaduzzaman Kamal' />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Email</label>
                                                <div className="col-sm-9">
                                                    <input type="mail" className="form-control" id="inputPassword" placeholder='asaduzzaman.uttps@gmail.com' />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">NID</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='123 234 234' />
                                                </div>
                                            </div>

                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Mobile</label>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='018 2700 7441' />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 d-flex  justify-content-center">
                                    <div className='right-side-form'>


                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-5 col-form-label text-muted">Create password</label>
                                            <div className="col-sm-7">
                                                <input type="password" className="form-control" id="inputPassword" placeholder='p a s s w o r d' />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-5 col-form-label text-muted">Confirm password</label>
                                            <div className="col-sm-7">
                                                <input type="password" className="form-control" id="inputPassword" placeholder='p a s s w o r d' />
                                            </div>
                                        </div>


                                    </div>





                                </div>
                            </div>


                        </div>

                    </div>



                    {/*............. person details end ....................*/}

                    {/* ...............Documents form details start ........................*/}

                    <div className="card mt-5 card-title1">
                        <div className="card-body center-title">
                            <h5 className='card-title mx-5'>Documents</h5>
                        </div>
                    </div>


                    <div className="card-body shadow">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="mx-5">

                                        <div className='center-Details-form'>


                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-4 col-form-label text-muted">Trade License</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" id="inputPassword" placeholder='987 654 567' />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-4 col-form-label text-muted">Document 1</label>
                                                <div className="col-sm-8">
                                                    <input className="form-control" type="file" id="formFile"></input>
                                                </div>
                                            </div>




                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 d-flex  justify-content-center">
                                    <div className='right-side-form'>


                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Document 2</label>
                                            <div className="col-sm-8">
                                                <input className="form-control" type="file" id="formFile"></input>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="inputPassword" className="col-sm-3 col-form-label text-muted">Document 3</label>
                                            <div className="col-sm-8">
                                                <input className="form-control" type="file" id="formFile"></input>

                                            </div>
                                        </div>


                                    </div>





                                </div>
                            </div>


                        </div>

                    </div>


                    {/*............... Documents form details end ..............................*/}


<div className="text-center mt-5">
    <button className='reg-sub-btn'>Submit</button>
</div>

                </form>

<div className="otp-reg my-5">
    <p className="text-muted text-center">
        An Otp is just sent to your mobile 01827 007 441. Enter the OTP here.
    </p>
<div className="otp-card text-center d-flex justify-content-center">

<OtpCard />



</div>





<div className="text-center mt-5">
<button className='apply-reg-btn'>Apply for center registration</button> 
</div>


</div>





            </div>
        </>
    );
};

export default Reg;