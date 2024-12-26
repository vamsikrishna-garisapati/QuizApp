import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: [
        '10 Quizzes per month',
        'Basic Analytics',
        'Email Support',
      ],
      buttonClass: 'btn-outline-primary',
    },
    {
      name: 'Standard',
      price: '$29.99/month',
      features: [
        '50 Quizzes per month',
        'Advanced Analytics',
        'Priority Email Support',
        'Custom Branding',
      ],
      buttonClass: 'btn-primary',
    },
    {
      name: 'Premium',
      price: '$49.99/month',
      features: [
        'Unlimited Quizzes',
        'Full Analytics Suite',
        '24/7 Premium Support',
        'Custom Integrations',
        'White-Label Solutions',
      ],
      buttonClass: 'btn-outline-primary',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-info text-white text-center py-5">
        <h1 className="display-3 font-weight-bold mb-4">Choose Your Plan</h1>
        <p className="lead">Pick the plan that fits your needs and start using our services today! No hidden fees, just great value.</p>
      </div>

      {/* Pricing Table */}
      <div className="container my-5">
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className={`card h-100 shadow-lg border-${plan.buttonClass.split('-')[1]}`}>
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center">{plan.name}</h3>
                  <h5 className="card-subtitle mb-3 text-muted">{plan.price}</h5>
                  <p className="card-text mb-4">
                    {plan.name === 'Basic'
                      ? 'Perfect for individuals just getting started with quizzes.'
                      : plan.name === 'Standard'
                      ? 'Great for small teams or individuals with advanced needs.'
                      : 'For businesses and power users needing unlimited features and support.'}
                  </p>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/signup" className={`btn ${plan.buttonClass} btn-lg w-100`}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="container my-5 text-center">
        <h2 className="mb-4">Need Help Choosing the Right Plan?</h2>
        <p className="lead mb-4">
          If you’re unsure which plan is best for you, feel free to contact our support team for a recommendation.
        </p>
        <a href="/contact" className="btn btn-outline-secondary btn-lg">
          Contact Support
        </a>
      </div>

      {/* FAQs Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>What’s included in each plan?</h5>
              <p>
                Each plan offers a set of features, with more options as you move up to higher tiers. The Premium plan includes the most extensive features.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Can I change my plan later?</h5>
              <p>Yes! You can upgrade or downgrade at any time with no additional fees.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Is there a free trial?</h5>
              <p>
                Yes! All plans come with a 7-day free trial, so you can test out the features before committing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p> 2024 QuizApp. All rights reserved.</p>
          <p>
            <a href="privacy-policy.html" className="text-decoration-none text-white">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="terms.html" className="text-decoration-none text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;