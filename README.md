# Easy Wallet

Easy Wallet is an easy to use Bitcoin wallet for any level of user. This wallet is secure, and uses current best security practices to reduce the attack surface as much as possible.

**Do not use this wallet on the live Bitcoin network before reading through all of this**

## Installation

```
git clone ''
cd Easy-Wallet
npm install
npm start
```

## Design Principles

The design thesis behind Easy Wallet is focused on a two pronged approach of ease of use and robust security. This project is my take on a bitcoin wallet, and is not meant to reinvent the wheel. This wallet builds on great libraries and the amazing work done by many developers(cited below) in the crypto space.

To achieve this: 

1) The UI was designed to be easy to understand even by beginners
2) The implementation was created with a modern open source stack
3) Key derivation was paired with a mnemonic phrase generation by leveraging the bitcoin/bip39 library


## Libraries 

This project uses a combination of React, Node.js, Electron-forge, bitcoin, bip39, Ant Design, and bitcoinjs-lab. Market data is provided by blockchain.info. The built-in crypto functionality in Node.js was instrumental in creating encrypted keys any time a new wallet instance is created.


## Before You Start

The project in its current form is connected to a test net, and not the actual BTC network. However, one could change this easily by editing the env file to point to the actual network. Also, while this project has the potential to store a large amount of encrypted keys, the user must point it to a proper database implementation to achieve mass storage. By default, the wallet is sending data to raw JS file and storing it there.




