import React from "react";

const Details = ({ detail, icon }) => {
  return (
    <p className="text-gray-200 break-all mb-2">
      <i className={icon}></i> {detail}
    </p>
  );
};

const UserRandomAPICard = ({ image, name, email, username, age }) => {
  const fullname = `${name.first} ${name.last}`;
  return (
    <div className="relative block rounded-lg shadow-lg bg-neutral-800 h-full mb-6 lg:mb-0 p-4">
      <div className="lg:flex flex-row items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6">
          <img
            src={image}
            alt={fullname}
            className="w-full rounded-md mb-6 lg:mb-0"
          />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
          <h5 className="text-lg font-bold mb-2 text-white">{fullname}</h5>
          <Details detail={email} icon="bi bi-envelope-at" />
          <Details detail={username} icon="bi bi-person" />
          <Details detail={`${age} years`} icon="bi bi-calendar3" />
        </div>
      </div>
    </div>
  );
};

export default UserRandomAPICard;
