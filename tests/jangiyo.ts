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

/*  it("Minting the Wall", async () => {
    //Generating a random wall address
    const wall = anchor.web3.Keypair.generate();
    const tokenMint = new anchor.web3.PublicKey("AQ7GWkiorMLFfTrpdUX2dfkRLp6GPRZaSW7jfThvmQno");
    const mintAccount = new web3.PublicKey("EENMDub2NfyWXAqvVtSakpKNagZFYN88Noaz5GcMYxD4");
    var connection = new web3.Connection(web3.clusterApiUrl("devnet"));
    const w1 = new Uint8Array();
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
  }); */
    it("Changing the state", async() => {
      const wall = new web3.PublicKey("5BeiGELkXfRsXqBdfTtpE6rcDy19iGFSSCUxGKRpHno9");
      const w1 = new Uint8Array();
      let sign = web3.Keypair.fromSecretKey(w1);
      
      const tx = await program.methods.changeStatePortrait()
      .accounts({
        wall : wall,
        authority : sign.address,
      })
      .signers([])
      .rpc();
      console.log("TX Signature", tx);
    }); 
});
