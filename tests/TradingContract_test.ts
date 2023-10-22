const { Clarinet, Chain, Account, types, Tx, assert } = require("clarinet");

Clarinet.test({
  name: "Ensure that creating a new sale offer sets the seller and price correctly",
  async fn(chain, accounts) {
    let contractOwner = accounts.get("contractOwner");
    let seller = accounts.get("seller");

    let block = chain.mineBlock([
      Tx.contractCall("TradingContract", "create-sale-offer", [types.uint(1), types.uint(1000000)], seller.address),
    ]);
    assert(block.receipts.length === 1);
    assert(block.height === 2);

    let call = Tx.contractCall("TradingContract", "get-sale-offer", [types.uint(1)], contractOwner.address);
    let receipt = chain.callReadOnlyFn(call);
    assert(receipt.result.isSome);
    assert(receipt.result.value.seller === types.principal(seller.address));
    assert(receipt.result.value.price === types.uint(1000000));
  },
});

Clarinet.test({
  name: "Ensure that buying an NFT transfers the NFT and the money",
  async fn(chain, accounts) {
    let contractOwner = accounts.get("contractOwner");
    let buyer = accounts.get("buyer");
    let seller = accounts.get("seller");

    // Assume that the seller has already created a sale offer for NFT 1 with price 1,000,000
    // and the buyer has enough money

    let block = chain.mineBlock([
      Tx.contractCall("TradingContract", "buy-nft", [types.uint(1)], buyer.address),
    ]);
    assert(block.receipts.length === 1);
    assert(block.height === 2);

    // Check that the NFT has been transferred to the buyer
    let call = Tx.contractCall("MortgageNFT", "get-owner", [types.uint(1)], contractOwner.address);
    let receipt = chain.callReadOnlyFn(call);
    assert(receipt.result.isSome);
    assert(receipt.result.value === types.principal(buyer.address));
 
    // Check that the money has been transferred from the buyer to the seller
    call = Tx.contractCall("TradingContract", "get-sale-offer", [types.uint(1)], contractOwner.address);
    receipt = chain.callReadOnlyFn(call);
    assert(receipt.result.isSome);
    assert(receipt.result.value.price === types.uint(0));
   },
 });