'use strict';

const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');

const folder = './test-application/javascript/';
const { buildCAClient, registerAndEnrollUser, enrollAdmin } = require(folder + 'CAUtil.js');
const { buildCCPOrg1, buildWallet } = require(folder + 'AppUtil.js');

const channelName = 'mychannel';
const chaincodeName = 'basic';
const mspOrg1 = 'Org1MSP';
const walletPath = path.join(__dirname, 'wallet');
const org1UserId = 'appUser';


function prettyJSONString(inputString) {
	return JSON.stringify(JSON.parse(inputString), null, 2);
}


async function main() {
	try {
		// load network configuration
		const ccp = buildCCPOrg1();

		// fabric ca client 
		const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

		// setup the wallet to hold the credentials of the application user
		const wallet = await buildWallet(Wallets, walletPath);

		await enrollAdmin(caClient, wallet, mspOrg1);
		await registerAndEnrollUser(caClient, wallet, mspOrg1, org1UserId, 'org1.department1');

		// create a new gateway instance for interacting with the fabric network
		const gateway = new Gateway();

		try {
			// setup the gateway instance
			// user can submit transactions and query, using the credentials stored in the wallet
			await gateway.connect(ccp, {
				wallet,
				identity: org1UserId,
				discovery: { enabled: true, asLocalhost: true }
			});

			// Build a network 
			const network = await gateway.getNetwork(channelName);
			// Get the contract from the network
			const contract = network.getContract(chaincodeName);
			// store intermediate results
			let result = null;

			// await contract.submitTransaction('InitLedger');
			// console.log('Transaction: InitLedgerr\n');

			// result = await contract.evaluateTransaction('GetAllAssets');
			// console.log('Transaction: GetAllAssets');
			// console.log(`${prettyJSONString(result.toString())}\n`);

			// result = await contract.submitTransaction('CreateAsset', 'asset13', 'yellow', '5', 'Toma', '1300');
			// console.log('Transaction: CreateAsset');
			// console.log(`${prettyJSONString(result.toString())}\n`);

			// result = await contract.evaluateTransaction('ReadAsset', 'asset13');
			// console.log('Transaction: ReadAsset');
			// console.log(`${prettyJSONString(result.toString())}\n`);

			// result = await contract.evaluateTransaction('AssetExists', 'asset1');
			// console.log('Transaction: AssetExists');
			// console.log(`${prettyJSONString(result.toString())}\n`);

			// await contract.submitTransaction('UpdateAsset', 'asset13', 'blue', '5', 'Tomoka', '350');
			// console.log('Transaction: UpdateAsset\n');

			result = await contract.evaluateTransaction('ReadAsset', 'asset1');
			console.log('Transaction: ReadAsset');
			console.log(`${prettyJSONString(result.toString())}\n`);

			// try {
			// 	console.log('Transaction: UpdateAsset [xfail]');
			// 	await contract.submitTransaction('UpdateAsset', 'asset70', 'blue', '5', 'Tomoko', '300');
			// 	console.log('******** FAILED to return an error\n');
			// } 
			// catch (error) {
			// 	console.log(`${error}\n`);
			// }

			await contract.submitTransaction('TransferAsset', 'asset1', 'Tom');
			console.log('Transaction: TransferAsset\n');

			result = await contract.evaluateTransaction('ReadAsset', 'asset1');
			console.log('Transaction: ReadAsset');
			console.log(`${prettyJSONString(result.toString())}\n`);
		} 
		finally {
			// disconnect from the gateway when the application is closing
			gateway.disconnect();
		}
	} 
	catch (error) {
		console.error(`******** FAILED to run the application: ${error}`);
	}
}

main();
