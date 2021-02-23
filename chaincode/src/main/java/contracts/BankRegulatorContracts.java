package contracts;

import models.Credit;
import models.Document;
import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.shim.ChaincodeException;
import org.hyperledger.fabric.shim.ChaincodeStub;
import util.GsonUtil;

@Contract(
    name = "Bank-Regulator Contract",
    info = @Info(
        title = "Bank-Regulator Contract",
        description = "The super mega ultra document contract",
        version = Const.BANK_REGULATOR_CONTRACT_VERSION,
        license = @License(
                name = "Apache 2.0 License",
                url = "http://www.apache.org/licenses/LICENSE-2.0.html"
        ),
        contact = @Contact(
                email = "kagojernouka@gmail.com",
                name = "Bank-Regulator Contract",
                url = "www.kagojernouka.com"
        )
    )
)
public class BankRegulatorContracts {

    private enum Errors {
        NOT_FOUND,
        ALREADY_EXISTS
    }

    @Transaction()
    public void initLedger(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();

        String[] initialCredits = {
            "{ \"bank_id\": \"-1\", \"branch_id\": \"-1\", \"document\": \"#\", \"amount\": \"0.0\", \"payback_date\": \"0\", \"paid_amount\": \"0.0\" }"
        };

        for (String initialCredit : initialCredits) {

            Credit c = GsonUtil.fromJson(initialCredit, Credit.class);
            String creditState = GsonUtil.toJson(c);

            // TODO: key might need to be sth different?
            stub.putStringState(c.getDocumentHash(), creditState);
        }
    }

    @Transaction()
    public Credit addCredit(final Context ctx, int bank_id, int branch_id, String document_hash, long payback_date, float amount, float paid_amount) {

        ChaincodeStub stub = ctx.getStub();

        String creditState = stub.getStringState(document_hash);
        if (!creditState.isEmpty()) {
            String errorMessage = String.format("Credit with doc %s already exists", document_hash);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, Errors.ALREADY_EXISTS.toString());
        }

        Credit credit = new Credit(bank_id, branch_id, document_hash, payback_date, amount, paid_amount);
        creditState = GsonUtil.toJson(credit);
        stub.putStringState(document_hash, creditState);

        return credit;
    }
}
