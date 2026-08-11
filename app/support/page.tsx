import WithTransition from '@/components/layout/WithTransition';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Support - Actuals',
  description: 'Support and Contact for Actuals: Focus Timer & Estimates',
};

export default function SupportPage() {
  return (
    <WithTransition>
      <article className="mx-auto prose max-w-3xl">
        <h1>Support - Actuals</h1>

        <section>
          <h2>Getting Help</h2>
          <p>
            Thank you for using Actuals! If you encounter any issues, have questions, or would like to provide feedback, we&apos;re here to help.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>

          <h3>How do I use Actuals?</h3>
          <p>
            Create a project, add tasks with your estimated duration, and start a focus session. Actuals tracks how long the session actually takes and compares it to your estimate. Over time, this calibration data helps you understand the accuracy of your estimates.
          </p>

          <h3>What does the Pro subscription include?</h3>
          <p>
            <strong>Free Tier:</strong> One project with unlimited tasks.
          </p>
          <p>
            <strong>Pro Annual:</strong> Unlock unlimited projects, annual auto-renewing subscription.
          </p>
          <p>
            <strong>Pro Lifetime:</strong> Unlock unlimited projects with a one-time lifetime purchase.
          </p>

          <h3>How is my data stored?</h3>
          <p>
            All your data is stored locally on your device. Nothing is sent to servers or cloud services. See our Privacy Policy for more details.
          </p>

          <h3>Can I export my data?</h3>
          <p>
            Currently, data export is not available. All your data is stored on your device and accessible only through the App.
          </p>

          <h3>Will my data sync across devices?</h3>
          <p>
            No, data is stored locally on each device. If you use Actuals on multiple devices, your projects and tasks will need to be created separately on each device.
          </p>

          <h3>What if I uninstall the app?</h3>
          <p>
            All data associated with the App will be deleted when you uninstall it. We recommend reviewing your data before uninstalling.
          </p>

          <h3>How do I cancel my Pro subscription?</h3>
          <p>
            You can manage your subscription through your iOS Settings:
          </p>
          <ol>
            <li>Open Settings on your iPhone</li>
            <li>Tap your Apple ID at the top</li>
            <li>Select &quot;Subscriptions&quot;</li>
            <li>Find &quot;Actuals&quot; and tap it</li>
            <li>Tap &quot;Cancel Subscription&quot;</li>
          </ol>

          <h3>The app is crashing or not working</h3>
          <p>
            Try these steps:
          </p>
          <ol>
            <li>Force close the app and reopen it</li>
            <li>Make sure you&apos;re running the latest version from the App Store</li>
            <li>Restart your iPhone</li>
            <li>If the problem persists, contact support</li>
          </ol>

          <h3>I&apos;m not receiving alarm notifications</h3>
          <p>
            Check your notification settings:
          </p>
          <ol>
            <li>Go to Settings → Notifications → Actuals</li>
            <li>Make sure notifications are enabled</li>
            <li>Verify &quot;Critical Alerts&quot; is enabled if you want alarms when the app is closed</li>
          </ol>
        </section>

        <section>
          <h2>Contact Support</h2>
          <p>
            If you couldn&apos;t find an answer above, or if you have feedback or feature requests, please reach out:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:forever.ducale@gmail.com">forever.ducale@gmail.com</a>
          </p>
          <p>
            Please include:
          </p>
          <ul>
            <li>App version (Settings → About in the App)</li>
            <li>Your iOS version</li>
            <li>A clear description of the issue or feedback</li>
            <li>Steps to reproduce the problem (if applicable)</li>
          </ul>
        </section>

        <section>
          <h2>Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability, please email{' '}
            <a href="mailto:forever.ducale@gmail.com">forever.ducale@gmail.com</a> with details. Do not post security vulnerabilities publicly.
          </p>
        </section>

        <section>
          <h2>Feedback and Feature Requests</h2>
          <p>
            We&apos;d love to hear your ideas! If you have suggestions for new features or improvements, contact us at{' '}
            <a href="mailto:forever.ducale@gmail.com">forever.ducale@gmail.com</a>.
          </p>
        </section>
      </article>
    </WithTransition>
  );
}
