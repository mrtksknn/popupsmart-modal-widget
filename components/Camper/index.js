/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import Image from 'next/image';
import Title from '../../assets/others/camper.svg';
import Electric from '../../assets/others/camper1.svg';
import Dolar from '../../assets/others/camper2.svg';

const Camper = () => (
  <div className="Camper">
    <div className="card flex">
      <div className="left flex flex-col items-center py-11 px-16 w-1/2">
        <Image alt="camper" src={Title} />
        <span className="font-semibold text-4xl mt-8">
          Join the club
        </span>
        <span className="text-center text-lg mt-2.5 mb-8">
          Subscribe and Get an Extra
          <span className="font-semibold underline ml-1">
            25% Off
          </span>
          {' '}
          on your first purchase.
        </span>
        <input className="rounded-xl border w-72 h-12 p-3" placeholder="Email address" type="text" />
        <button className="w-full bg-black text-white w-72 h-12 rounded-xl mt-4" type="button">
          Subscribe
        </button>
        <span className="text-xs font-normal text-gray-400 w-full mt-5">
          By signing up, you agree to
          <span className="underline mx-1">
            Privacy Policy
          </span>
          and
          <span className="underline ml-1">
            Terms of Use
          </span>
          .
        </span>
      </div>
      <div className="right flex flex-col justify-between p-9 w-1/2">
        <div className="flex justify-end w-full">
          <div className="text-lg font-semibold bg-white rounded-full flex items-center justify-center w-10 h-10">
            X
          </div>
        </div>
        <div className="absolute ml-80 mt-16">
          <div className="bg-white rounded-xl flex items-center p-3.5 h-12">
            <Image
              alt="electric" height="20" src={Electric}
              width="20"
            />
            <span className="text-base font-medium ml-3">
              Grow email list
            </span>
          </div>
        </div>
        <div className="absolute ml-72 mt-32">
          <div className="bg-white/75 backdrop-opacity-50 rounded-xl flex items-center p-3.5 h-12">
            <Image
              alt="electric" height="20" src={Dolar}
              width="20"
            />
            <span className="text-base font-medium ml-3">
              Increase sales conversion
            </span>
          </div>
        </div>
        <span className="text-4xl font-semibold text-white">
          Mediterranean
          Sneakers®
        </span>
      </div>
    </div>
  </div>
);

export default Camper;
