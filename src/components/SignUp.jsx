// src/components/Signup.jsx
import React from "react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "76f480813fa8193948b66c07a15f2be4", // Replace with your actual client ID
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "github",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
        auth={{
          async doLogin(params) {
            // Call your backend to verify the signed payload
          },
          async doLogout() {
            // Call your backend to log out the user if needed
          },
          async getLoginPayload(params) {
            // Call your backend and return the payload
          },
          async isLoggedIn() {
            // Call your backend to check if the user is logged in
          },
        }}
      />
    </div>
  );
}

export default Signup;
