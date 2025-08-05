import React from 'react';

const Heading = ({title, des}) => {
    return (
        <div className="mx-auto text-center md:w-3/6 lg:w-2/6 ">
        <h1 className="text-3xl font-semibold wi">{title}</h1>
        <p className="text-gray-600 mt-3  text-sm"> 
          {des}
        </p>
      </div>
    );
};

export default Heading;