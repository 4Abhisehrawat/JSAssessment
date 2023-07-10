Javascript Project
project.js

License
This contract is using the MIT License.

Prerequisites
Solidity ^0.8.18

Contract Details
Variable declaration:
nfts: An empty array to store the minted NFTs.
mintNFT function:
This function takes three parameters: name, tshirtColor, and gender.
It creates an NFT object using the provided parameters as metadata.
The NFT object has properties name, tshirtColor, and gender.
The NFT object is then pushed to the nfts array.
A message is logged to the console indicating the successful minting of the NFT.
listNFTs function:
This function loops through each NFT in the nfts array.
For each NFT, it logs the metadata (name, tshirtColor, and gender) to the console.
getTotalSupply function:
This function logs the total number of minted NFTs by accessing the length property of the nfts array.
Minting NFTs and listing them:
The code calls the mintNFT function four times with different parameters to mint four NFTs.
After minting, the listNFTs function is called to print the metadata of all minted NFTs.
Finally, the getTotalSupply function is called to print the total number of minted NFTs.

Video Walkthrough
https://www.loom.com/share/c63a9b9704a148dda666fdc382dc96c6?sid=d6b0c2ae-d2b8-4be3-8dbc-6badfdb48a12
