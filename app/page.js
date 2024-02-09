'use client'
import { addData } from '@/lib/action';
import React from 'react'
import { kanit } from "../utils/font";

function HomePage() {
  return (
    <div className={`${kanit.className}`}>
      <form
        action={addData}
      >
        <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2`}>

          <div className="bg-purple-500 rounded-full py-2 w-full flex flex-col items-center shadow-lg ">
            <h1 className="text-2xl">สร้างข้อมูลลูกค้าใหม่</h1>
          </div>

          <div className="grid grid-cols-2 gap-5 py-4 w-full px-3.5">

            <div className="flex flex-col">
              <label className="px-2">ชื่อน้องแมว</label>
              <input
                className="px-2 rounded-lg"
                name='name'
                type="text"
              // onChange={(e) => setName(e.target.value)}
              // value={name}
              />
            </div>

            <div className="flex flex-col">
              <label className="px-2">รหัสประจำตัว</label>
              <input
                className="px-2 rounded-lg"
                name='code'
                type="number"
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="px-2">สายพันธุ์ หรือ ตำหนิ</label>
              <input
                className="px-2 rounded-lg"
                name='breed'
                type="text"
              // onChange={(e) => setDetail(e.target.value)}
              // value={detail}
              />
            </div>

            <div className="flex flex-col">
              <label className="px-2">เพศ</label>

              <select name="gender" type='text' className="px-2 rounded-lg">
                <option value="MALE">ชาย</option>
                <option value="FE">หญิง</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="px-2">สี</label>
              <input
                className="px-2 rounded-lg"
                name='color'
                type="text"
              // onChange={(e) => setColor(e.target.value)}
              // value={color}
              />
            </div>

            <div className="flex flex-col">
              <label className="px-2">อายุ</label>
              <input
                className="px-2 rounded-lg"
                name='age'
                type="number"
              // onChange={(e) => setAge(e.target.value)}
              // value={age}
              />
            </div>
          </div>

          <div>
            <button type="submit"
              className="submit_btn
                bg-green-500 
                  rounded-full 
                  px-5 py-3 text-xl 
                  font-bold
                  shadow-lg
                  hover:bg-green-700"
            >สร้างข้อมูล</button>
          </div>

          {/* {error ? <div className="py-5 text-xl text-red-500">{error}</div> : null}
        {message ? <div className="py-5 text-xl text-green-500">{message}</div> : null} */}
        </div>
      </form>
      <div className='flex flex-col items-center'>
        {/* <label>อัพเดตน้องแมว</label> */}
        <input
          className="px-6 py-3 text-xl rounded-full shadow-lg w-44"
          name='code'
          type="text"
          placeholder="อัพเดตน้องแมว"
        />
      </div>
    </div>
  )
}

export default HomePage