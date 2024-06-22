export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">My Crypto Dashboard</h1>
        <p className="text-xl text-blue-800 mb-16">Your gateway to the world of cryptocurrencies</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 lg:w-full lg:max-w-4xl">
        <div className="rounded-lg border border-blue-300 bg-blue-50 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Portfolio</h2>
          <p className="text-xl font-bold text-blue-800">2.567 BTC</p>
          <p className="text-md text-blue-600 mt-2">~ $75,000 USD</p>
        </div>

        <div className="rounded-lg border border-blue-300 bg-blue-50 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Transaction History</h2>
          <ul className="text-md text-blue-600">
            <li className="mb-2">Sent 0.1 BTC to 1A2b3C...</li>
            <li className="mb-2">Received 0.5 BTC from 3D4e5F...</li>
            <li className="mb-2">Sent 0.05 BTC to 6G7h8I...</li>
          </ul>
        </div>

        <div className="rounded-lg border border-blue-300 bg-blue-50 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Send Cryptocurrency</h2>
          <form className="flex flex-col">
            <label className="mb-2 text-blue-600" htmlFor="address">Recipient Address</label>
            <input
              className="input-field mb-4"
              type="text"
              id="address"
              placeholder="Enter recipient address"
            />
            <label className="mb-2 text-blue-600" htmlFor="amount">Amount (BTC)</label>
            <input
              className="input-field mb-4"
              type="number"
              id="amount"
              placeholder="Enter amount"
            />
            <button
              type="submit"
              className="submit-button"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
