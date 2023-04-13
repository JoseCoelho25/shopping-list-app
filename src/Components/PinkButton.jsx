import React from 'react';

const PinkButton = (props) => {
  return (
    <div className="bg-white w-screen fixed bottom-20 py-2 right-0 flex justify-end">
      <div className="w-1/2 lg:w-1/5 mr-5 bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex">
        <div className="rounded-full bg-[#C65757] text-4xl flex justify-center items-center h-8 w-8 mr-2">&#43;</div>
        <input type="button" value={props.name} className="text-xl" onClick={props.setModalOpen} />
      </div>
    </div>
  );
};

export default PinkButton;
