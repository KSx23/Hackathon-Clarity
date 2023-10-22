# Smart Contract Documentation

## MortgageNFT Contract

### Description

The `MortgageNFT` contract represents a non-fungible token (NFT) that represents ownership of a mortgage.

### Functions

#### `createMortgage(address _owner, uint256 _tokenId)`

Creates a new mortgage NFT and assigns it to the specified owner.

- Parameters:
  - `_owner` (address): The address of the owner of the mortgage.
  - `_tokenId` (uint256): The unique identifier for the mortgage NFT.

#### `getOwner(uint256 _tokenId)`

Returns the address of the owner of the specified mortgage NFT.

- Parameters:
  - `_tokenId` (uint256): The unique identifier of the mortgage NFT.

- Returns:
  - `address`: The address of the owner of the mortgage NFT.

#### `transfer(address _to, uint256 _tokenId)`

Transfers ownership of the specified mortgage NFT to the specified address.

- Parameters:
  - `_to` (address): The address to transfer ownership to.
  - `_tokenId` (uint256): The unique identifier of the mortgage NFT.

### TradingContract Contract

### Description

The `TradingContract` contract facilitates the trading of mortgage NFTs between users.

### Functions

#### `createTrade(uint256 _tokenId, uint256 _price)`

Creates a new trade offer for the specified mortgage NFT with the specified price.

- Parameters:
  - `_tokenId` (uint256): The unique identifier of the mortgage NFT.
  - `_price` (uint256): The price at which the mortgage NFT is being offered for trade.

#### `cancelTrade(uint256 _tokenId)`

Cancels the trade offer for the specified mortgage NFT.

- Parameters:
  - `_tokenId` (uint256): The unique identifier of the mortgage NFT.

#### `acceptTrade(uint256 _tokenId)`

Accepts the trade offer for the specified mortgage NFT and transfers ownership to the trade initiator.

- Parameters:
  - `_tokenId` (uint256): The unique identifier of the mortgage NFT.