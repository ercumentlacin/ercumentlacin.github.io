import WithTransition from '@/components/layout/WithTransition';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Actuals',
  description: 'Privacy Policy for Actuals: Focus Timer & Estimates',
};

export default function PrivacyPolicyPage() {
  return (
    <WithTransition>
      <article className="mx-auto prose max-w-3xl">
        <h1>Privacy Policy for Actuals</h1>
        <p className="text-sm text-gray-600">Last updated: August 10, 2026</p>

        <section>
          <h2>Overview</h2>
          <p>
            Actuals (&quot;the App&quot;) is designed with privacy as a core principle. We do not collect, store, or transmit any personal data from your device.
          </p>
        </section>

        <section>
          <h2>What Data We Collect</h2>
          <p>
            <strong>We do not collect any data.</strong> Actuals operates entirely on your device. No information about you, your projects, your tasks, or your work patterns is ever sent to our servers or any third party.
          </p>
        </section>

        <section>
          <h2>How Data is Stored</h2>
          <p>
            All data — your projects, tasks, session timings, and focus estimates — is stored locally on your iPhone using Apple&apos;s SwiftData framework. This data never leaves your device and is protected by your device&apos;s built-in security measures.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            The App does not integrate with any analytics, advertising, or data collection services. The only external service used is Apple&apos;s App Store for in-app purchases (Pro Annual subscription and Pro Lifetime purchase), which is governed by Apple&apos;s privacy terms.
          </p>
        </section>

        <section>
          <h2>In-App Purchases</h2>
          <p>
            Purchase information is handled by Apple through StoreKit. We do not have access to your Apple ID, payment method, or transaction history. Transaction details are managed entirely by Apple.
          </p>
        </section>

        <section>
          <h2>User Accounts</h2>
          <p>
            Actuals does not require or support user accounts. You do not need to sign in, create a password, or provide any personal information to use the App.
          </p>
        </section>

        <section>
          <h2>Device Permissions</h2>
          <p>
            The App requests permission to schedule alarms (notifications) to remind you when your focused sessions end. This permission is used only for that purpose and no alarm data is transmitted anywhere.
          </p>
        </section>

        <section>
          <h2>Data Deletion</h2>
          <p>
            All your data is stored locally on your device. If you uninstall the App, all associated data will be automatically deleted. If you want to delete your data while keeping the App installed, you can clear it through your device settings.
          </p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            The App does not knowingly collect personal information from anyone under 13 years of age. If we become aware that a child under 13 has provided us with personal information, we will immediately delete such information.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be effective when posted to this page. Your continued use of the App indicates your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:forever.ducale@gmail.com">forever.ducale@gmail.com</a>.
          </p>
        </section>
      </article>
    </WithTransition>
  );
}
