import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">GreenCut Tree Services</h3>
                        <p className="text-gray-300">
                            ZUE Professional tree services serving the local community with expertise and care.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <p className="text-gray-300">Phone: (123) 456-7890</p>
                        <p className="text-gray-300">Email: info@greencuttree.com</p>
                        <p className="text-gray-300">Licensed & Insured</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2025 GreenCut Tree Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
