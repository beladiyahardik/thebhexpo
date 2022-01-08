import { UserAddOutlined } from '@ant-design/icons/lib/icons'
import { Button, DatePicker, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupAction } from '../../redux/actions/signupAction'

const Signup = () => {
    const [userData, setUserData] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const setBirthdate = (e) => {
        console.log("e", e._d);
        setUserData({ ...userData, birthday: e._d })
    }

    useEffect(() => {
        console.log("userData", userData);
    }, [userData])

    const signup = () => {
        dispatch(signupAction(userData))
    }
    return (
        <div className='h-90vh d-flex x-center y-center'>
            <div className='signupBlock d-flex y-flex'>
                <div>
                    <lable htmlFor="username"> Username: </lable>
                    <Input name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <lable htmlFor="fullname">Fullname: </lable>
                    <Input name="fullname" placeholder="Fullname" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <lable htmlFor="password">Password: </lable>
                    <Input name="password" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <lable htmlFor="birthdate">Birthdate:</lable>
                    <div><DatePicker name="birthdate" className="w-100" onSelect={(e) => setBirthdate(e)} /></div>
                </div>
                <div>
                    <Button type="primary" onClick={signup}>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
