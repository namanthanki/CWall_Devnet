import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FC, useEffect, useState } from 'react';

require("./styles/Create.css");

const Create = () => {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [ balance, setBalance ] = useState(0);

    const getUserSOLBalance = async (publicKey: PublicKey, connection: Connection) => {
        let balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
    }

    useEffect(() => {
        if (wallet.publicKey) {
            getUserSOLBalance(wallet.publicKey, connection);
        }
    }, [wallet.publicKey, connection, getUserSOLBalance]);

    return (
        <div>
                <WalletMultiButton />
                
                {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
                {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}

                <div className="wall-mint-form-container">
                    <form action="" method="post">
                        <label htmlFor="wall_name">Wall Name: </label>
                        <input type="text" name="wall_name" id="wall_name" required/>

                        <label htmlFor="wall_description">Wall Description: </label>
                        <input type="text" name="wall_description" id="wall_description" required/>

                        <label htmlFor="first_image">First Image: </label>
                        <input type="text" name="first_image" id="first_image" required/>

                        <label htmlFor="second_image">Second Image: </label>
                        <input type="text" name="second_image" id="second_image" required/>

                        <label htmlFor="third_image">Third Image: </label>
                        <input type="text" name="third_image" id="third_image" required/>

                        <label htmlFor="fourth_image">Fourth Image: </label>
                        <input type="text" name="fourth_image" id="fourth_image" required/>

                        <input type="submit" value="Mint" />
                    </form>
                </div>
        </div>
    )
}

export default Create;