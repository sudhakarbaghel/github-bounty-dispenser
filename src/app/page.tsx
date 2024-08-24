"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount, useDisconnect } from "wagmi";
import { useSession, signIn, signOut } from "next-auth/react";

function App() {
  const { data: session } = useSession();
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="homepage">
      {!session ? (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      ) : (
        <div>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}

      {session && (
        <div>
          <ConnectButton />
          {account.status === "connected" && (
            <div>
              <p>Connected with {account.address}</p>
              <button onClick={() => disconnect()}>Disconnect Wallet</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
