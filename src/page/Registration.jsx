import React, { Component } from 'react'

export default class Registration extends Component {
  render() {
    return (
            <div className='reg-pembungkus'>
                <h3>Registration</h3>
                <span >Full name</span>
                <div className='name'>
                    <input type="text" placeholder='firstname' />
                    <input type="text" placeholder='lastname' />
                </div>
                <span >Jenis kelamin</span>
                <div>
                <select name="kelamin" id="kelamin">
                <option value=""></option>
                <option value="laki-laki">laki-laki</option>
                <option value="perempuan">perempuan</option>
                </select>
                </div>
                <span>Email</span>
                
                <div>
                    <input type="text" placeholder='email' className='inpt'  />
                </div>
                <span>Password</span>
                
                <div>
                    <input type="text" placeholder='password' className='inpt'  />
                </div>
                <span>Nomor telephone</span>
                
                <div>
                    <input type="text" placeholder='08123456789' className='inpt'  />
                </div>
                <button>Register</button>
            </div>
    )
  }
}
