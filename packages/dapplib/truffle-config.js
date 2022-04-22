require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind history include process blush turtle'; 
let testAccounts = [
"0x8001c733d65b511c89ce8c7f03fce82a6ef9ec3d9e85c58d6de6a9a0b052f9f3",
"0x509c23b61b3f7a20b33ce5b5877417cfab560569f0d266f629c4475e7d682645",
"0xf4b6d4a2cc2743439eb65af5aeb2d60ea18fd3c8eb87da7ded0d4f32df8ec70a",
"0x41cae470392473f4dd291fe4e59ffad86c9fee548256d380dcfd2c44329dd567",
"0x69417d6094e804f4bd535e74dc9682a7d43923cdb28519b1a35ba2e824d03258",
"0x2d1b044dac2c882a803f878e4f06fc4478f6d068faa2ffa03084633498686699",
"0xcd68a0fa1d9a75c9366bb1e69409ad76d42cae1f24faaa317a8d3ffa1bb4702f",
"0x17d071013f44eedcf22943a970e412a2941eedf4ab0c1fd997b12f2d71f9496f",
"0xb988c9d7a1faa7aaa132d1d67b1f5659463641588e175b1e3465c71e12bf9735",
"0x53ca92285bd3b55c1f7758c5ecaa0518ee69800e8f8c78742464f11f509d7411"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

