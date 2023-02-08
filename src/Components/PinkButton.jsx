import React from 'react';

const PinkButton = (props) => {
  return (
    <div className="fixed bottom-28 right-0 mr-10 bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex">
      <div className="rounded-full pb-2 bg-[#C65757] text-4xl flex justify-center items-center h-8 w-8 mr-2">&#43;</div>
        <input type="button" value={props.name} className="text-xl" onClick={props.setModalOpen} />
    </div>
  );
};

export default PinkButton;
