import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">Du er kommet til en side som ikke finnes</h2>
                <Link
                    href="/"
                    className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                    Gå tilbake
                </Link>
            </div>
        </div>
    )
}
