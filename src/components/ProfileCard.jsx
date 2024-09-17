/* eslint-disable react/prop-types */
//import React from 'react'
import { Badge } from "flowbite-react";

function ProfileCard({userName, userImage, userMessage, rolBadge, rol, date}) {
  return (
    <article className="bg-[#1E1E1E] p-5 rounded-lg mt-5">
        <div className="flex items-center text-lg pb-5">
            <img className="w-10 h-10 mr-4 rounded-full" src={`https://unavatar.io/${userImage}`} alt="Profile Image"/>
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="font-bold">{userName}</h3>
                <p>{date}</p>
              </div>
              <Badge className="inline" color={rolBadge} size="sm">
                  {rol}
              </Badge>
            </div>
        </div>

        <div>
            <p>{userMessage}</p>
        </div>
    </article>
  )
}

export default ProfileCard
