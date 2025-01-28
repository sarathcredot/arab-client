import React from 'react'
import { Helmet } from "react-helmet";
import ALink from "../../components/common/ALink";

function privacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Arab Deals</title>
      </Helmet>

      <main className="main">
         <div className="page-header page-header-bg text-left"
                        style={ { background: `50%/cover #D4E1EA url(images/page-header-bg.jpg)` } }>
                        <div className="container">
                            <h1>Privacy Policy</h1>
                        </div>
                    </div>
         {/* <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            <h1>Privacy Policy</h1>
          </div>
         </div> */}

         <div className="container policy-header" >
          <section className='first-para-section'>
            <p className='first-para'>
              Welcome to <strong>ArabDeals</strong>! Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit or make a purchase on our platform. By using our services, you agree to the practices described in this policy.
            </p >
            <p  className='first-para'>If you have any questions, please contact us at <a href="mailto:privacy@arabdeals.om">privacy@arabdeals.om</a>.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment details.</li>
              <li><strong>Account Data:</strong> Username, password, and order history.</li>
              <li><strong>Non-Personal Information:</strong> IP address, device type, and browsing preferences.</li>
              <li><strong>Transaction Data:</strong> Orders placed, payment methods, and delivery tracking information.</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and deliver your orders.</li>
              <li>Send updates about your orders, offers, and promotions (with your consent).</li>
              <li>Improve our platform’s functionality and user experience.</li>
              <li>Ensure security and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section>
            <h2>Sharing of Information</h2>
            <p>We share your information only with:</p>
            <ul>
              <li>Delivery partners to ship your orders.</li>
              <li>Payment processors to complete transactions securely.</li>
              <li>Government authorities when required by law.</li>
              <li>Service providers who assist us in improving our platform.</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Remember your login credentials.</li>
              <li>Store items in your shopping cart.</li>
              <li>Personalize your browsing experience.</li>
            </ul>
            <p>You can manage cookie preferences in your browser settings. Disabling cookies may limit certain features on the platform.</p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>We retain your data as follows:</p>
            <ul>
              <li><strong>Account Information:</strong> Stored as long as your account is active.</li>
              <li><strong>Transaction Data:</strong> Retained for legal and compliance purposes.</li>
              <li><strong>Marketing Data:</strong> Retained until you unsubscribe.</li>
            </ul>
            <p>You can request data deletion by contacting us at <a href="mailto:privacy@arabdeals.om">privacy@arabdeals.om</a>.</p>
          </section>

          <section>
            <h2>Data Protection and Security</h2>
            <p>We use advanced security measures to protect your data:</p>
            <ul>
              <li>SSL encryption for secure transactions.</li>
              <li>Regular security audits and updates.</li>
              <li>Access control to prevent unauthorized access.</li>
            </ul>
            <p>Please protect your account by using a strong password and keeping it confidential.</p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>As a user, you have the right to:</p>
            <ul>
              <li>Access and review your personal data.</li>
              <li>Update or correct your information.</li>
              <li>Delete your account and data.</li>
              <li>Opt out of promotional communications.</li>
              <li>Withdraw consent for data processing.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:privacy@arabdeals.om">privacy@arabdeals.om</a>.</p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>Our platform may include links to third-party websites. Please note that we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>ArabDeals is not intended for individuals under the age of 18. We do not knowingly collect data from minors. If we discover data from a minor, we will delete it immediately.</p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Any significant updates will be notified via email or on our platform.</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:privacy@arabdeals.om">privacy@arabdeals.om</a><br />
              <strong>Phone:</strong> +968-XXXX-XXXX<br />
              <strong>Address:</strong> [Insert Address], Oman
            </p>
          </section>
         </div>
      </main>
    </>
  )
}

export default privacyPolicy
