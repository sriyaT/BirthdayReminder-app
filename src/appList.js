import React, { useState } from 'react';
import data from './data';
import './App.css';

const AppList = () => {
  const [count, setCount] = useState(data?.length);
  const [dataList, setDataList] = useState(data);
  const ChangeHandler = (name) => {
    setCount(count - 1);
    setDataList(dataList.filter((item) => item?.name !== name));
  };
  return (
    <>
      <div className='header'>
        <h1 className='heading'>{`${count} Bithdays Today !`}</h1>
      </div>
      <div className='listContainer'>
        {dataList?.map((item, index) => {
          return (
            <div className='list' key={index}>
              <div className='leftContainer'>
                <img alt={item.index} src={item.image} />
                <h4>{item.name}</h4>
              </div>
              <div
                className='dismissButton'
                onClick={() => ChangeHandler(item?.name)}
              >
                Dismiss
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AppList;
