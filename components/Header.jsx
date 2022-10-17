import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <div className="py-3 border-b-2 flex flex-row items-center">
      <h1 className="py-4 px-4 font-bold text-2xl tigh">
        Decentralized and Verifiable Raffle
      </h1>
      <div className="ml-auto">
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  )
}
