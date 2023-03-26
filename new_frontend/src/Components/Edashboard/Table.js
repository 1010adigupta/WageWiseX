export const dataSource = [
  {
    key: "1",
    task_id: "26",
    status: "Mark as Completed",
    payment_remaining: "0.01 ETH",
    payment_status: "Unpaid",
  },
  {
    key: "2",
    task_id: "27",
    status: "View NFT Certificate",
    payment_remaining: "0",
    payment_status: "Paid",
  },
];

export const columns = [
  {
    title: "Task ID",
    dataIndex: "task_id",
    key: "address",
  },
  {
    title: "Update Status",
    dataIndex: "status",
    key: "address",
    render: (data) => {
      if (data === "Mark as Completed") {
        return (
          <button
            style={{
              backgroundColor: "#04111D",
              color: "white",
              border: "none",
              borderRadius: "5px",
              height: "30px",
            }}
          >
            {data}
          </button>
        );
      } else if (data === "View NFT Certificate") {
        return (
          <a href="https://testnets.opensea.io/assets/goerli/0x1c8b2239c5938c1edca4d5a4370c1e1e7135881c/3">
            <button
              style={{
                backgroundColor: "#04111D",
                color: "white",
                border: "none",
                borderRadius: "5px",
                height: "30px",
              }}
            >
              {data}
            </button>
          </a>
        );
      }
    },
  },
  {
    title: "Payment Remaining",
    dataIndex: "payment_remaining",
    key: "address",
  },
  {
    title: "Payment Status",
    dataIndex: "payment_status",
    key: "address",
    render: (data) => {
      if (data === "Unpaid") {
        return <p style={{ color: "red" }}>{data}</p>;
      } else {
        return <p style={{ color: "green" }}>{data}</p>;
      }
    },
  },
];
