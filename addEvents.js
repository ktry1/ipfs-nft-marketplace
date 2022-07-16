const Moralis = require("moralis/node");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const networkMappingFile = "./constants/networkMapping.json";
const networkMappingPath = path.resolve(networkMappingFile);

const contractAddresses = JSON.parse(fs.readFileSync(networkMappingPath));  
const chainId = process.env.chainId;
const moralisChainId = chainId == "31337" ? "1337": chainId;
const contractAddress = contractAddresses[chainId]["NftMarketplace"][0];

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appId = process.env.NEXT_PUBLIC_APP_ID;
const masterKey = process.env.MASTER_KEY;


async function main(){
    await Moralis.start({ serverUrl, appId, masterKey });
    console.log(`Working with contract address ${contractAddress}`);
    
    let itemListedOptions = {
        chainId: moralisChainId,
        syncHistorical: true,
        topic:"ItemListed(address, address, uint256, uint256)",
        address: contractAddress,
        abi: {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftAddress",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "ItemListed",
            "type": "event"
          },
          tableName: "ItemListed"
    }

    let itemBoughtOptions = {
        chainId: moralisChainId,
        syncHistorical: true,
        topic:"ItemBought(address, address, uint256, uint256)",
        address: contractAddress,
        abi: {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftAddress",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "name": "ItemBought",
            "type": "event"
          },
          tableName: "ItemBought"
    };

    let itemCancelledOptions = {
        chainId: moralisChainId,
        syncHistorical: true,
        topic:"ItemCancelled(address, address, uint)",
        address: contractAddress,
        abi:{
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "nftAddress",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "ItemCancelled",
            "type": "event"
          },
          tableName: "ItemCancelled"};

          const listedResponse = await Moralis.Cloud.run("watchContractEvent", itemListedOptions, {useMasterKey: true});
          const boughtResponse = await Moralis.Cloud.run("watchContractEvent", itemBoughtOptions, {useMasterKey: true});
          const cancelledResponse = await Moralis.Cloud.run("watchContractEvent", itemCancelledOptions, {useMasterKey: true});

          if (listedResponse.success && boughtResponse.success && cancelledResponse.success){
            console.log("Success! Database updated with watching events");
          }
          else {
            console.log("Something went wrong :(");
          }
}


main()
.then(() => process.exit(0))
.catch((error) => {
        console.error(error)
        process.exit(1)
    })