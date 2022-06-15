import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { getAccount, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as web3 from "@solana/web3.js";
import { CWall } from "../target/types/CWall";

describe("CWall", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CWall as Program<CWall>;

  it('can fetch all tweets', async () => {
    const wallAccounts = await program.account.wall.all();
    console.log(wallAccounts.length);
  });

  it("Minting the Wall", async () => {
    //Generating a random wall address
    const wall = anchor.web3.Keypair.generate();
    const tokenMint = new anchor.web3.PublicKey("AQ7GWkiorMLFfTrpdUX2dfkRLp6GPRZaSW7jfThvmQno");
    const mintAccount = new web3.PublicKey("EENMDub2NfyWXAqvVtSakpKNagZFYN88Noaz5GcMYxD4");
    var connection = new web3.Connection(web3.clusterApiUrl("devnet"));
    const w1 = new Uint8Array([114,90,43,157,97,132,192,184,54,20,66,199,189,187,141,190,241,89,49,7,182,35,52,4,152,45,177,246,115,149,250,54,221,126,18,245,47,6,44,160,217,91,77,89,61,230,202,255,241,190,45,133,59,167,191,181,78,183,252,208,144,54,215,13]);
    let sign = web3.Keypair.fromSecretKey(w1);
    let myTokenAcc = await getAccount(connection, mintAccount, TOKEN_PROGRAM_ID);
    const tx = await program.methods.wallMint('Mystical\'s Wall', 'Take a look at the GNE #1 Holder\'s wall!!')
    .accounts({
      wall : wall.publicKey,
      signer : sign.address,
      mint : tokenMint,
      buyerTokens : myTokenAcc.address,
      tokenProgram : TOKEN_PROGRAM_ID,
      systemProgram : anchor.web3.SystemProgram.programId,
    })
    .signers([wall])
    .rpc();
    console.log("Your transaction signature", tx);
  });
});
