package models;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import util.GsonUtil;

import java.util.Objects;


@DataType()
public final class Document {

/*
    {
        issuer: <id>,
        owner: <id>,
        hash: <hash>
    }
*/

    @Property()
    private final int issuerId;

    @Property()
    private final int ownerId;

    @Property()
    private final String hash;


    public Document(int issuerId, int ownerId, String hash) {
        this.issuerId = issuerId;
        this.ownerId = ownerId;
        this.hash = hash;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Document document = (Document) o;
        return issuerId == document.issuerId && ownerId == document.ownerId && Objects.equals(hash, document.hash);
    }

    @Override
    public int hashCode() {
        return Objects.hash(issuerId, ownerId, hash);
    }

    @Override
    public String toString() {
        return GsonUtil.toJson(this);
    }
}
