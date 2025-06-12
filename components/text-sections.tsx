export function TextSections() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* How We Select Section */}
      <section>
        <h2 className="text-3xl font-bold text-[#003B2F] mb-8 text-center">
          How We Select the Best Irish Betting Sites
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#003B2F] mb-3">Licensing & Security</h3>
              <p className="text-gray-700 mb-6">
                All recommended betting sites must hold valid licenses from reputable authorities such as the Irish
                Revenue Commissioners or the UK Gambling Commission. We verify their security measures, including SSL
                encryption and responsible data handling practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003B2F] mb-3">Odds & Market Variety</h3>
              <p className="text-gray-700 mb-6">
                We evaluate the competitiveness of odds across major sports and the breadth of betting markets
                available. Sites offering better value and diverse betting options rank higher in our assessments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003B2F] mb-3">Bonuses & Promotions</h3>
              <p className="text-gray-700 mb-6">
                We analyze welcome bonuses, ongoing promotions, and their terms and conditions. Fair wagering
                requirements and genuine value for Irish players are key factors in our evaluation process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003B2F] mb-3">Responsible Gambling</h3>
              <p className="text-gray-700 mb-6">
                Every recommended site must demonstrate strong commitment to responsible gambling, offering tools like
                deposit limits, self-exclusion options, and partnerships with organizations like GambleAware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section>
        <h2 className="text-3xl font-bold text-[#003B2F] mb-8 text-center">Tips for Safer Betting in Ireland</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            <strong>Set Clear Limits:</strong> Before you start betting, decide on a budget you can afford to lose. Set
            daily, weekly, or monthly limits and stick to them. Most reputable Irish betting sites offer tools to help
            you set and maintain these limits automatically.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Understand the Odds:</strong> Take time to learn how betting odds work and what they represent.
            Remember that bookmakers build in a profit margin, so the odds are always slightly in their favor. Never bet
            more than you can afford based on the belief that you're "due" a win.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Keep Records:</strong> Track your betting activity, including wins and losses. This helps you
            understand your betting patterns and ensures you stay within your predetermined limits. Many betting sites
            provide account statements to help with this.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Know When to Stop:</strong> If betting stops being fun or starts affecting other areas of your life,
            it's time to take a break. Use self-exclusion tools if needed, and don't hesitate to seek help from
            organizations like Gamblers Anonymous Ireland or GamCare.
          </p>
        </div>
      </section>
    </div>
  )
}
