require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth six prosper include clip surge vacuum'; 
let testAccounts = [
"0xa96f5ab1df2beb8518ab91b44ab3ccc963ba7c8e41772f4da08edb09347fc48e",
"0xb06c75d9a129ed0ebec0e456f775dafc98ea49e91611d876791790f0cfc9cdae",
"0xb6b42c9b96bef839894639048a1537b6e769f88dd762668122a1a6761cdb8292",
"0x5a56dd11568d94f5c29fa5839eeb0de9e16d1a7a94c76c764ae24c2443028306",
"0xa795c651f9d1b0741f7f4fcb390319ed44035bfbd4ba8dc7ef64e690f9ac6cde",
"0xd5d6f0600a72f3ad549a18c149b97c69636976f4bd99066dc0e7a18253a1b12a",
"0xa346f0158b1a19eba2c58941bb8d1746f468e9d160ad2bef3fd47ae5e9ff5f4f",
"0xac57cb7747bd5bf593728ebe46399f7ccb2934756b7d7b87f91da73a5985a9ab",
"0x26a12b4361c6e2252937589624c66605828e60172f1fd4f31565ff818e9da1a1",
"0x6a95dc1fbfd611769f6f868a10adf46258abbdc67dba7eb346a091efa6d87418"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

