const { useContext, createContext, useState } = require("react");
const { IntmaxWalletAccount } = require("webmax");

const AccountContext = createContext({
  account: null,
  setAccount: () => {},
});

export const AccountContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};


// module.exports = {
//   AccountContextProvider,
//   useAccountContext,
// };