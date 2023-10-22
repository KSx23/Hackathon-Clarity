// Government class
class Government {
    constructor(name) {
      this.name = name;
    }
  
    approveListing(nft) {
      // Logic to approve the listing of the NFT
      console.log(`Listing of NFT ${nft} approved by ${this.name}`);
    }
  }
  
  // Example usage
  const government = new Government("Government of XYZ");
  const nft = "My NFT";
  
  government.approveListing(nft);