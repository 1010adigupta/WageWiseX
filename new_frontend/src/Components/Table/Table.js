import Pay from "../../HelperComponents/Pay/Pay";
import { getNFT } from "../NFT/NFT";
export const dataSource = [
    {
      key: '1',
      name: 'Aditya',
      designation: "Software Engineer",
      task_id: '26',
      payment_remaining: '1 ETH',
    },
    {
      key: '1',
      name: 'Aditya',
      designation: "Software Engineer",
      task_id: '27',
      payment_remaining: '0 ETH',
    },
  ];
  
  export const columns =(handlePay =() =>{}) => [
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'age',
    },
    {
      title: 'Task ID',
      dataIndex: 'task_id',
      key: 'address',
    },
    {
      title: 'Pay Remaining',
      dataIndex: 'payment_remaining',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'address',
      key: 'address',
      render: (data, r) =>{
        if(r.payment_remaining === '0 ETH'){
        return <Pay text={"Award Completetion"} onClick={getNFT}/>
      }
    else{
      return <Pay text={"Pay"} onClick={handlePay}/>
    }}
    },
  ];