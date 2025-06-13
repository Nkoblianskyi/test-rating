import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-fixed bg-center"
            style={{
                backgroundImage: "url('/images/stadium-background.png')",
            }}
        >
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-black bg-opacity-80 rounded-lg p-8 text-white">
                    <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">What Are Cookies</h2>
                            <p className="text-gray-300">
                                Cookies are small text files that are placed on your computer or mobile device when you browse websites.
                                They are widely used to make websites work more efficiently, as well as to provide information to the
                                owners of the site. Cookies allow us to recognize your device and store information about your
                                preferences or past actions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
                            <p className="text-gray-300">We use cookies for a variety of reasons detailed below:</p>
                            <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-2">
                                <li>To remember your preferences and settings</li>
                                <li>To improve your browsing experience</li>
                                <li>To enable certain functions of the website</li>
                                <li>To provide analytics about how you use our website</li>
                                <li>To help us improve our services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>

                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                                <p className="text-gray-300">
                                    These cookies are necessary for the website to function properly. They enable core functionality such
                                    as security, network management, and account access. You may disable these by changing your browser
                                    settings, but this may affect how the website functions.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                                <p className="text-gray-300">
                                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                                    performance of our site. They help us to know which pages are the most and least popular and see how
                                    visitors move around the site.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                                <p className="text-gray-300">
                                    These cookies enable the website to provide enhanced functionality and personalization. They may be
                                    set by us or by third-party providers whose services we have added to our pages.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">Advertising Cookies</h3>
                                <p className="text-gray-300">
                                    These cookies may be set through our site by our advertising partners. They may be used by those
                                    companies to build a profile of your interests and show you relevant adverts on other sites.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
                            <p className="text-gray-300">
                                Most web browsers allow some control of most cookies through the browser settings. To find out more
                                about cookies, including how to see what cookies have been set, visit{" "}
                                <a
                                    href="https://www.aboutcookies.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    www.aboutcookies.org
                                </a>{" "}
                                or
                                <a
                                    href="https://www.allaboutcookies.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    {" "}
                                    www.allaboutcookies.org
                                </a>
                                .
                            </p>

                            <p className="text-gray-300 mt-4">
                                To opt out of being tracked by Google Analytics across all websites, visit
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    {" "}
                                    https://tools.google.com/dlpage/gaoptout
                                </a>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Changes to Our Cookie Policy</h2>
                            <p className="text-gray-300">
                                We may update our Cookie Policy from time to time. Any changes will be posted on this page and, where
                                appropriate, notified to you by email or when you next visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                            <p className="text-gray-300">
                                If you have any questions about our Cookie Policy, please contact us at:{" "}
                                <span className="text-blue-400">privacy@irishbets.com</span>
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-sm text-gray-400">
                        <p>Last updated: 2025</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
