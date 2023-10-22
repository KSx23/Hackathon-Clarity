import { makeContractCall, broadcastTransaction, uintCV, stringAsciiCV, AnchorMode } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

// Define the network
const network = new StacksTestnet();

// Define the contract address and name
const contractAddress = 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA';
const contractName = 'MortgageNFT';

// Mint a new mortgage
async function mintMortgage(privateKey: string, tokenId: number, propertyAddress: string, owner: string, loanAmount: number) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'mint-mortgage',
    functionArgs: [uintCV(tokenId), stringAsciiCV(propertyAddress), stringAsciiCV(owner), uintCV(loanAmount)],
    senderKey: privateKey,
    validateWithAbi: true,
    network,
    anchorMode: AnchorMode.Any,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}

// Transfer a mortgage
async function transferMortgage(privateKey: string, tokenId: number, newOwner: string) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'transfer-mortgage',
    functionArgs: [uintCV(tokenId), stringAsciiCV(newOwner)],
    senderKey: privateKey,
    validateWithAbi: true,
    network,
    anchorMode: AnchorMode.Any,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}

// Get the data for a mortgage
async function getMortgageData(privateKey: string, tokenId: number) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'get-mortgage-data',
    functionArgs: [uintCV(tokenId)],
    senderKey: privateKey,
    validateWithAbi: true,
    network,
    anchorMode: AnchorMode.Any,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}