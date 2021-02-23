package contracts;

import models.Document;
import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.hyperledger.fabric.shim.ChaincodeException;
import util.GsonUtil;

@Contract(
    name = "Issuer Document Contract",
    info = @Info(
        title = "Issuer Document Contract",
        description = "The super mega ultra document contract",
        version = Const.ISSUER_CONTRACT_VERSION,
        license = @License(
            name = "Apache 2.0 License",
            url = "http://www.apache.org/licenses/LICENSE-2.0.html"
        ),
        contact = @Contact(
            email = "kagojernouka@gmail.com",
            name = "Issuer Document Contract",
            url = "www.kagojernouka.com"
        )
    )
)
@Default
public class IssuerContracts implements ContractInterface {

    private enum Errors {
        NOT_FOUND,
        ALREADY_EXISTS
    }

    @Transaction()
    public void initLedger(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();

        String[] initialDocs = {
            "{ \"issuer_id\": \"-1\", \"owner_id\": \"-1\", \"hash\": \"#\" }"
        };

        for (String initialDoc : initialDocs) {

            Document d = GsonUtil.fromJson(initialDoc, Document.class);
            String docState = GsonUtil.toJson(d);

            stub.putStringState(d.getHash(), docState);
        }
    }

    @Transaction()
    public Document createDocument(final Context ctx, final int issuer_id, final int owner_id, final String hash) {

        ChaincodeStub stub = ctx.getStub();

        String documentState = stub.getStringState(hash);
        if (!documentState.isEmpty()) {
            String errorMessage = String.format("Document %s already exists", hash);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, Errors.ALREADY_EXISTS.toString());
        }

        Document doc = new Document(issuer_id, owner_id, hash);
        documentState = GsonUtil.toJson(doc);
        stub.putStringState(hash, documentState);

        return doc;
    }

}
