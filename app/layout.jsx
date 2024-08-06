"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { defineChain } from "viem";

const outfit = Outfit({ subsets: ["latin"] });

const Sepolia = defineChain({
  id: 11155111,
  name: "Sepolia test network",
  network: "Sepolia test network",
  nativeCurrency: {
    decimals: 18,
    symbol: "SepoliaETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.infura.io/v3/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://sepolia.etherscan.io",
    },
  },
});

// const metadata = {
//   title: "Digital Identity",
//   description: "A blockchain based digital identity website.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <PrivyProvider
          appId="clywi7mf1007xcf9x0bj6ddwj"
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: Sepolia,
            supportedChains: [Sepolia],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
