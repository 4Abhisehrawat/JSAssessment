// Create a variable to hold a number of NFTs
// Creating an array to store the minted NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, tshirtColor, gender) {
  const nft = {
    name: name,
    tshirtColor: tshirtColor,
    gender: gender
  };
  nfts.push(nft);
  console.log("minted : "+name);
}

// Creating a "loop" that will go through the "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Shirt colour: " + nfts[i].tshirtColor);
    console.log("gender: " + nfts[i].gender);
    console.log("---------------------------");
  }
}

// Print the total number of NFTs 
function getTotalSupply() {
    console.log("Total supply: " + nfts.length);
  }

// Mint some NFTs
mintNFT("Abhishek", "White", "Male");
mintNFT("Nami", "Orange", "Female");
mintNFT("Zoro", "Green", "Male");
mintNFT("Robin", "Blue", "Female");

// List all NFTs
listNFTs();
getTotalSupply()
