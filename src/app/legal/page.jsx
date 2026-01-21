import SubCover from "@/components/sub-cover";
import PageContainer from "@/components/page-container";
export const metadata = {
  title: "Termsof Services",
  description:
    "These Terms and Conditions govern your access to and use of the website development, software solutions, and related services provided by Business Brewery",
};

const Legal = () => {
  return (
    <PageContainer>
      <SubCover url="/terms-cover.jpg">Terms</SubCover>
      <div className="w-full rounded-2xl border border-stone-700 shadow md:w-8/10">
        <div className="space-y-4 p-4 text-stone-600 md:px-10">
          <h1 className="text-xl font-bold tracking-wider">
            TERMS AND CONDITIONS.
          </h1>
          <h3 className="font-semibold">Last Updated: Sat, Jan 17, 2026</h3>
          <p className="">
            These Terms and Conditions ("Terms") govern your access to and use
            of the website development, software solutions, and related services
            (the "Services") provided by <b>Business Brewery</b> ("we," "us," or
            "our"). By engaging our Services, you ("the Client," "you," or
            "your") agree to be bound by these Terms.
          </p>
          <h2>
            <b>1. Services & Scope</b>
          </h2>
          <div className="ml-4">
            <p>
              1.1. The specific details of the Services to be provided will be
              outlined in a separate project proposal, statement of work, or
              service agreement ("Project Agreement"). These Terms are
              incorporated into and govern that Project Agreement.
            </p>
            <p>
              1.2. Any changes or additions to the defined scope ("Scope Creep")
              must be agreed upon in writing by both parties and may result in
              additional fees and adjusted timelines.
            </p>
          </div>
          <h2>
            <b>2. Client Responsibilities</b>
          </h2>
          <div className="ml-4">
            <p>
              2.1. You agree to provide all necessary content, materials, brand
              assets, logins, and information ("Client Materials") in a timely
              manner and in the formats we request.
            </p>
            <p>
              2.2. You warrant that you own or have the necessary rights to all
              Client Materials you provide and that they do not infringe on any
              third-party rights.
            </p>
            <p>
              2.3. Delays in providing required Client Materials or feedback
              will extend project deadlines proportionally.
            </p>
          </div>
          <h2 id="refund">
            <b>3. Fees, Payment & Refunds</b>
          </h2>
          <div className="ml-4">
            <p>
              3.1. Our fees are outlined in the Project Agreement. We may
              require a deposit before work begins.
            </p>
            <p>
              3.2. Invoices are due within the net terms specified (e.g., Net 7,
              Net 15). Late payments may incur interest charges of [e.g., 1.5%]
              per month or the maximum allowed by law.
            </p>
            <p>
              3.3. All fees are non-refundable once work has commenced, as our
              Services are customized and non-tangible. Refunds for deposits are
              subject to the <b>Refund Policy</b> linked below. We do not offer
              "money-back guarantees" on completed work.
            </p>
          </div>
          <h2 id="privacy">
            <b>4. Intellectual Property (IP) Rights</b>
          </h2>
          <div className="ml-4">
            <p>
              4.1. <b>Pre-Existing IP:</b> Each party retains ownership of its
              pre-existing intellectual property.
            </p>
            <p>
              4.2. <b>Client Materials:</b> You retain ownership of your Client
              Materials.
            </p>
            <p>
              4.3. <b>Deliverables:</b> Upon receipt of full and final payment,
              we grant you a perpetual, worldwide, non-exclusive license to use
              the final delivered website, software, or code ("Deliverables")
              for their intended purpose.{" "}
              <b>
                {" "}
                We retain ownership of the underlying source code, frameworks,
                libraries, and tools developed or used by us unless otherwise
                explicitly agreed in writing.
              </b>{" "}
              This prevents unauthorized resale or reuse of our proprietary
              work.
            </p>
            <p>
              4.4. <b>Third-Party Components:</b> Some Deliverables may
              incorporate licensed third-party components (e.g., themes,
              plugins, APIs). Their use is subject to their own licenses, and
              you are responsible for ongoing compliance and fees.
            </p>
          </div>
          <h2>
            <b>5. Revisions & Approval</b>
          </h2>
          <div className="ml-4">
            <p>
              5.1. The Project Agreement will specify the number of revision
              rounds included.
            </p>
            <p>
              5.2. You are responsible for thoroughly reviewing all deliverables
              during designated approval stages. Your written approval
              constitutes acceptance that the deliverable meets the agreed
              specifications.
            </p>
          </div>
          <h2>
            <b>6. Warranties, Disclaimers & Limitation of Liability</b>
          </h2>
          <div className="ml-4">
            <p>
              6.1. We warrant that our Services will be performed in a
              professional and workmanlike manner.
            </p>
            <p>
              6.2. <b>We do not guarantee</b> that the Deliverables will be
              error-free, uninterrupted, or achieve any specific business
              results. The internet and software are inherently dynamic; we
              cannot be liable for third-party actions, hosting issues, or
              changes in search engine algorithms.
            </p>
            <p>
              6.3.{" "}
              <b>
                TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR
                ANY CLAIM ARISING FROM THESE TERMS OR OUR SERVICES SHALL BE
                LIMITED TO THE AMOUNT YOU PAID US FOR THE SPECIFIC SERVICE
                GIVING RISE TO THE CLAIM IN THE PRIOR SIX (6) MONTHS.
              </b>
            </p>
            <p>
              6.4.{" "}
              <b>
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES{" "}
              </b>
              (INCLUDING LOST PROFITS, DATA, OR BUSINESS OPPORTUNITIES), EVEN IF
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>
          <h2>
            <b>7. Confidentiality</b>
          </h2>
          <div className="ml-4">
            <p>
              Both parties agree to keep confidential any proprietary or
              sensitive information disclosed during the project.
            </p>
          </div>
          <h2>
            <b>8. Termination</b>
          </h2>
          <div className="ml-4">
            <p>
              8.1. Either party may terminate a Project Agreement with written
              notice if the other party materially breaches these Terms and
              fails to cure the breach within [e.g., 14 days].
            </p>
            <p>
              8.2. Upon termination for your breach, all unpaid fees become
              immediately due. Upon termination for our breach, we will refund a
              prorated portion of any prepaid, unearned fees.
            </p>
          </div>
          <h2>
            <b>9. Indemnification</b>
          </h2>
          <div className="ml-4">
            <p>
              You agree to indemnify and hold us harmless from any claims,
              damages, or losses arising from: (a) your use of the Deliverables;
              (b) your breach of these Terms; or (c) your infringement of any
              third-party rights via your Client Materials.
            </p>
          </div>
          <h2>
            <b>10. Hosting, Maintenance & Support</b>
          </h2>
          <div className="ml-4">
            <p>
              Unless explicitly included in a Project Agreement, ongoing
              hosting, maintenance, security updates, and technical support are
              not part of the Services and may be offered under a separate
              agreement.
            </p>
          </div>
          <h2>
            <b>11. General Provisions</b>
          </h2>
          <div className="ml-4">
            <p>
              11.1. Governing Law: These Terms shall be governed by the laws of
              <b> Dehradun, India</b>.
            </p>
            <p>
              11.2. Entire Agreement: These Terms, together with any Project
              Agreement, constitute the entire agreement between us.
            </p>
            <p>
              11.3. Changes: We may update these Terms. Continued use of our
              Services after changes constitutes acceptance.
            </p>
            <p>
              11.4. Severability: If any provision is found unenforceable, the
              remaining provisions remain in full effect.
            </p>
          </div>
          <h2>
            <b>Contact US</b>
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-blue-500">
            <b>
              <a href="mailto:amitabh293verma@gmail.com">
                amitabh293verma@gmail.com
              </a>
            </b>
          </p>
          <p>
            <b>Dehradun, India.</b>
          </p>
        </div>
      </div>
    </PageContainer>
  );
};
export default Legal;
