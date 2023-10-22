import { makeContractCall, broadcastTransaction, uintCV, stringAsciiCV, callReadOnlyFunction, AnchorMode } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

// Define the network
const network = new StacksTestnet();

// Define the contract address and name
const contractAddress = 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA';
const contractName = 'LoanContract';

// Create a new loan
async function createLoan(privateKey: string, loanId: number, borrower: string, lender: string, loanAmount: number, interestRate: number) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'create-loan',
    functionArgs: [uintCV(loanId), stringAsciiCV(borrower), stringAsciiCV(lender), uintCV(loanAmount), uintCV(interestRate)],
    senderKey: privateKey,
    validateWithAbi: true,
    network,
    anchorMode: AnchorMode.Any,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}

// Approve a loan
async function approveLoan(privateKey: string, loanId: number) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'approve-loan',
    functionArgs: [uintCV(loanId)],
    senderKey: privateKey,
    validateWithAbi: true,
    network,
    anchorMode: AnchorMode.Any,
  };

  const transaction = await makeContractCall(txOptions);
  return broadcastTransaction(transaction, network);
}

// Get the data for a loan
async function getLoanData(loanId: number) {
  const result = await callReadOnlyFunction({
    contractAddress,
    contractName,
    functionName: 'get-loan-data',
    functionArgs: [uintCV(loanId)],
    network,
    senderAddress: contractAddress,
  });

  return result;
}