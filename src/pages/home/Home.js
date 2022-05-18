import React from 'react';
import  './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

const Home = () => {
    return (
        <div className={'home'}>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
               <div className="widgets">
                   <Widget type={'user'}/>
                   <Widget type={'product'}/>
                   <Widget type={'order'}/>
                   <Widget type={'earning'}/>
               </div>
              <div className="charts">
                  <Featured />
                  <Chart aspect={2 / 1} title={'Last 6 Month (Revenue'} />
              </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <ListTable />
                </div>
            </div>
        </div>
    );
};

export default Home;