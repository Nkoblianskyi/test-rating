import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
                    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                            <p className="text-gray-300">
                                Welcome to IrishBets. We respect your privacy and are committed to protecting your personal data. This
                                privacy policy will inform you about how we look after your personal data when you visit our website and
                                tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">The Data We Collect About You</h2>
                            <p className="text-gray-300">
                                Personal data, or personal information, means any information about an individual from which that person
                                can be identified. It does not include data where the identity has been removed (anonymous data).
                            </p>

                            <p className="text-gray-300 mt-4">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                                together as follows:
                            </p>

                            <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-2">
                                <li>
                                    <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                                </li>
                                <li>
                                    <strong>Contact Data</strong> includes email address and telephone numbers.
                                </li>
                                <li>
                                    <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                                    and version, time zone setting and location, browser plug-in types and versions, operating system and
                                    platform, and other technology on the devices you use to access this website.
                                </li>
                                <li>
                                    <strong>Usage Data</strong> includes information about how you use our website and services.
                                </li>
                                <li>
                                    <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                                    from us and our third parties and your communication preferences.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">How We Use Your Personal Data</h2>
                            <p className="text-gray-300">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                                data in the following circumstances:
                            </p>

                            <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>
                                    Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                                    fundamental rights do not override those interests.
                                </li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>

                            <p className="text-gray-300 mt-4">
                                Generally, we do not rely on consent as a legal basis for processing your personal data although we will
                                get your consent before sending third party direct marketing communications to you via email or text
                                message. You have the right to withdraw consent to marketing at any time by contacting us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                            <p className="text-gray-300">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally
                                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                                your personal data to those employees, agents, contractors and other third parties who have a business
                                need to know. They will only process your personal data on our instructions and they are subject to a
                                duty of confidentiality.
                            </p>

                            <p className="text-gray-300 mt-4">
                                We have put in place procedures to deal with any suspected personal data breach and will notify you and
                                any applicable regulator of a breach where we are legally required to do so.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Your Legal Rights</h2>
                            <p className="text-gray-300">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal
                                data, including the right to:
                            </p>

                            <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-2">
                                <li>Request access to your personal data.</li>
                                <li>Request correction of your personal data.</li>
                                <li>Request erasure of your personal data.</li>
                                <li>Object to processing of your personal data.</li>
                                <li>Request restriction of processing your personal data.</li>
                                <li>Request transfer of your personal data.</li>
                                <li>Right to withdraw consent.</li>
                            </ul>

                            <p className="text-gray-300 mt-4">
                                If you wish to exercise any of the rights set out above, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
                            <p className="text-gray-300">
                                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                                privacy policy on this page.
                            </p>

                            <p className="text-gray-300 mt-4">
                                We will let you know via email and/or a prominent notice on our website, prior to the change becoming
                                effective and update the "last updated" date at the top of this privacy policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                            <p className="text-gray-300">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
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
