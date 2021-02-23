package models;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;

import java.util.Objects;

@DataType()
public final class Credit {
/*
    {
        bank_id: <id>,
        branch_id: <id>,
        document: <hash>,
        amount: <decimal>,
        payback_date: <date>,
        paid_amount: <decimal>
    }
*/
    @Property()
    public final int bankId;

    @Property()
    public final int branchId;

    @Property()
    public final String documentHash;

    @Property()
    public final long paybackDate;

    @Property()
    public final int paidAmount;

    public Credit(int bankId, int branchId, String documentHash, long paybackDate, int paidAmount) {
        this.bankId = bankId;
        this.branchId = branchId;
        this.documentHash = documentHash;
        this.paybackDate = paybackDate;
        this.paidAmount = paidAmount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Credit credit = (Credit) o;
        return bankId == credit.bankId && branchId == credit.branchId && Objects.equals(documentHash, credit.documentHash);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bankId, branchId, documentHash);
    }
}
