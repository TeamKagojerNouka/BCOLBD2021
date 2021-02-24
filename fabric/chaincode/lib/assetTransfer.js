'use strict';

const { Contract } = require('fabric-contract-api');

class AssetTransfer extends Contract {

    async InitData(ctx) {
        const asset = {
            asset_id: 'a9fc4f4-10af-44b9-a061-bcd19144b9be',
            owner: 'Tahmeed',
            issuer: 'Land Registry',
            status: 'Owned',
            date: new Date()
        };
        asset.docType = 'Asset';

        const credit = {
            credit_id: '2601815908',
            branch: 'Sonali Bank',
            borrower: 'Tahmeed',
            asset_id: 'a9fc4f4-10af-44b9-a061-bcd19144b9be',
            amount_paid: 20000,
            amount_left: 30000,
            interest: 4.5,
            deadline: new Date()
        };
        credit.docType = 'Credit';

        await ctx.stub.putState(asset.asset_id, Buffer.from(JSON.stringify(asset)));
        await ctx.stub.putState(credit.credit_id, Buffer.from(JSON.stringify(credit)));
    }
    
    // Asset

    async CreateAsset(ctx, asset_id, owner, issuer, status) {
        const asset = {
            asset_id: asset_id,
            owner: owner,
            issuer: issuer,
            status: status,
            date: new Date()
        };
        asset.docType = 'Asset';
        await ctx.stub.putState(asset.asset_id, Buffer.from(JSON.stringify(asset)));
    }

    async VerifyAsset(ctx, asset_id) {
        const assetJSON = await ctx.stub.getState(asset_id);
        return assetJSON.toString();
    }

    // Credit

    async CreateCredit(ctx, credit_id, bank, borrower, asset_id, amount_paid, amount_left, interest, deadline) {
        const credit = {
            credit_id: credit_id,
            bank: bank,
            borrower: borrower,
            asset_id: asset_id,
            amount_paid: amount_paid,
            amount_left: amount_left,
            interest: interest,
            deadline: deadline
        };
        credit.docType = 'Credit';
        await ctx.stub.putState(credit.credit_id, Buffer.from(JSON.stringify(credit)));
        return JSON.stringify(credit);
    }

    async GetBorrowerHistory(ctx, borrower) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            if (record.docType == 'Credit' && record.borrower == borrower)
                allResults.push(record);
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

    async GetAllCredits(ctx) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            if (record.docType == 'Credit')
                allResults.push(record);
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

}

module.exports = AssetTransfer;
