import React from 'react';
import Image from "next/image";
import userIcon from "@/app/components/HeaderComponent/UserInfoComponent/pics/user-30.png"

const UserInfoComponent = () => {
    const username: string = "user";
    return (
        <div className="flex-row">
            <Image
                src={userIcon}
                alt="user icon"
                width={30}
                height={30}
            />
            <h4>Welcome back, {username}</h4>
        </div>
    );
};

export default UserInfoComponent;