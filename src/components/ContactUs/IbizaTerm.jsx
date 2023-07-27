import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import "./Form.css";

import WelcomeScreen from "./WelcomeScreen";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import "./cons.scss";

const Contactus = () => {
  return (
    <div>
      <WelcomeScreen>
        <div className="container">
          {" "}
          <Grid container direction="column" justify="center" className="full">
            <br />
            <br />
            <h1
              style={{
                textAlign: "start",
                fontSize: "40px",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              <a href="./">
                <BiArrowBack />
              </a>
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              Privacy Policy
            </h1>
            <br />
            <Box
              sx={{
                my: 6,
                mx: 6,
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "#fff",
                }}
              >
                Data Controller
              </h1>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                DEFI PRÓXIMA, S.L. with NIF B05339718 (hereinafter, Ibiza Token)
                and adress at Avenida 8 de Agosto, n.º 40, Staircase 2, Floor
                5ºC, 07800, Balearic Islands (Ibiza) owner of the Web Site
                https://ibizatoken.com is the Data Controller of the data
                collected. This Privacy Policy regulates the collection and
                processing of personal data provided by Users when accessing,
                browsing or using the functionalities of the Web Site.
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Collection of data, purposes, basis of legitimacy and
                conservation periods:
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                Contact: The user can contact, through the email entablished for
                this purpose on the Website. The data provided in this way, will
                be used to process the query and contact the User. The legal
                basis for the processing of such data is based on the
                pre-contractual relationship with the User. The retention period
                of the data por this purpose will be one year, unless other
                periods are applicable. Newsletter: The User may, if he/she
                wishes, provide his/her e-mail adress to subscribe to the news
                and developments on the Ibiza Token project, in order to receive
                periodic communications in his/her e-mail or mobile device (if
                applicable). The legal basis for the processing of such data is
                based on the consent of the User. We will keep the data as long
                as you remain registered in our newsletter sending system, then
                we will block them for three years for reasons of prescription
                of legal actions and after that period we will delete them. At
                any time you can revoke your consent through the links provided
                or by writing to hello@ibizatoken.com.
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Exercise of rights
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                The User can revoke the consent for the treatment, exercising
                the rights of access, rectification, suppression, portability,
                opposition and limitation to the treatment, by informing Ibiza
                Token through an e-mail adressed to hello@ibizatoken.com or
                indicating it to the address indicated above, with the subject:
                “Data Protection”. In case there are doubts about the identity
                of the applicant, he/she be required to prove it by means of an
                official document, in order to avoid access to his/her data by
                unanthorized third parties. Finally, the User will be able to
                communicate and modification in writing or to request the
                cancellation, indicating it in any of the provided addresses. At
                any time, the User may file a complaint with the Spanish Data
                Protection Agency to enforce their rights.
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Modification of the Privacy Policy
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                Ibiza Token reserves the right to modify at any time its privacy
                policiy, respecting the currente legislation on data protection
                and after due notice to interested parties
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Language applicable to this Privacy Policy
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                The language applicable to this Privacy Policy is Spanish. Any
                version of the same in a different language, such as English, is
                offered for the convenience of the User and to facilitate its
                understanding. However, the Privacy Policy shall alwas be
                governed by its Spanish version. In case of contradiction
                between the Privacy Policy in any language and the Spanish
                version, the Spanish version shall prevail
              </p>
            </Box>
            <br />
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              Legal notice
            </h1>
            <br />
            <Box
              sx={{
                my: 6,
                mx: 6,
              }}
            >
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                Defi Próxima, S.L. (hereinafter, the Holder) with NIF B05339718,
                and adress at Avenida 8 de Agosto, n.º 40, Staircase 2, Floor
                5ºC, 07800, Balearic Islands (Ibiza), registered in the
                Commercial Registry of Balearic Islands, Volume: 367, Page: 39,
                Section: 8, Register Page: IB-18015, Inscription: 1, is the
                owner of the website accessible through the URL:
                https://ibizatoken.com (hereinafter, Ibiza Token or the Website,
                indistinctly). For any questions, doubts or suggestions
                regarding Ibiza Token, you can contact us through the e-mail
                address hello@ibizatoken.com. Below, we proceed to show the
                conditions that in a general way regulate access to the page of
                the Holder, both the services and functionalities offered there,
                without prejudice to the application of other different
                conditions or their modification. It is recommended a reading
                and periodic review as there may be changes in the legal texts.
              </p>
              <br />
            </Box>{" "}
            <br />
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              General Conditions of Use
            </h1>
            <br />
            <Box
              sx={{
                my: 6,
                mx: 6,
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "#fff",
                }}
              >
                1. Identification of the parties
              </h1>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                These General Conditions of Use are subscribed on the one hand
                by the Owner and on the other hand by you, as a natural or legal
                person User who voluntarily accesses the Website freely and free
                of charge.
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                2.Purpose of the Website
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                The purpose of this Web Site is to redirect to the Dapp
                'IbizaPay', so that Ibiza Token holders can carry out their
                payments and transactions through a personal wallet, for
                improving the experience of Users in Ibiza. As well as to inform
                about the Project and functionalities held by the Holder. The
                access and navigation through the Web Site are free, although
                the offer and purchase of the Dapp Token entails the payment of
                a price as well as the acceptance of the General Conditions of
                Purchase.
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                3.Obligations of the User
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                As a User by merely accessing and browsing through the Website,
                you shall: Use the Website in a diligent, correct and lawful
                manner, always respecting current legislation, morality and good
                customs, as well as public order. Periodically review these
                Conditions, or any other that may be applicable, checking for
                any modifications that may occur. Review the communications that
                Ibiza Token sends you, as they may contain important
                information. Not to use the Web Site for commercial purposes,
                especially to collect information or content for the purpose of
                providing services that are clearly in competition with Ibiza
                Token. Not to modify or attempt to modify in any way, or take
                any action or use any means to simulate the appearance or
                functions of the Web Site. Not to damage, disable, overburden,
                or impair the service (or the network or networks connected to
                the service), or interfere with your use and enjoyment of the
                service. Refrain from taking any action that involves the
                introduction of computer viruses, worms, Trojan horses or any
                other malicious code designed to interrupt, destroy or limit the
                functionality of the Web Site. You may not reverse engineer
                and/or decrypt, decompile or otherwise attempt to discover the
                source code of Ibiza Token. In any case, not to perform any act
                that may violate rights or interests of the Holder or third
                parties such as, for example, intellectual or industrial
                property rights (patents, trademarks, copyrights, trade secrets
                ...).
              </p>
              <br />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                4. Availability of the Website
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                The owner endeavors to improve and expand Ibiza Token, as well
                as the content and services offered on the Web Site. However,
                the Web Site will be displayed as it is at any given time,
                depending on availability, limitations and other circumstances.
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                5. Exclusion of Liability
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                Ibiza Token works to ensure that the services and
                functionalities of the Web Site are always available. However,
                when you access it, it will be shown according to the
                availability and limitations that occur at any given time.
                Despite the Owner's continuous effort to protect the systems and
                contents included in the Website, for which purpose it uses the
                usual security standards on the Internet, it is not possible to
                offer full guarantees regarding the intrusions or loss of
                information that may occur. Likewise, the absence of viruses or
                other harmful elements on the Website or on third party websites
                that may cause alterations in the User's computer system, both
                software and hardware, cannot be guaranteed. For this reason,
                the User assumes and understands that there are situations that
                may be beyond the control of Ibiza Token. The Web Site may
                include links to pages or sites of third parties outside the
                Owner, for which it assumes no responsibility by not approving
                or reviewing their functions and contents. The User who accesses
                any link published on the Web Site does so at his own risk,
                without the Holder assuming any responsibility for it.
                Similarly, the Website is exempt from any liability arising from
                misuse of the same by the Users, as well as for breach of
                obligations or commitments under these conditions or any other
                applicable.
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                6. Intellectual and industrial property rights
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                All intellectual and industrial property rights on the Web Site
                and its contents, including programming, design, applications,
                graphics, codes, text or images, trademarks, trade names, logos
                and other elements present therein belong exclusively to the
                Holder, including the Ibiza Token brand, or has sufficient
                rights and / or authorizations for its exploitation. As a
                consequence of the above, any reproduction, distribution, public
                communication (including making available), transformation or
                any other form of exploitation, not even quoting the sources, is
                prohibited, unless you have the prior, express written consent
                of the Holder or the exclusive owner of the rights concerned. If
                you detect any infringement, please notify us at the e-mail
                address indicated in the header.
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                7. Indemnification
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                7.1. The owner may penalize any of the Users who violate the
                conditions that apply to it, with the inability to access,
                temporarily or indefinitely to the Website. The duration of the
                sanction will depend on the type of infringement committed. The
                restriction of access shall in no case entail the right to
                compensation. 7.2. Any damages, losses or costs (including
                attorneys' and/or lawyers' fees) arising from a breach by the
                User of these Terms and Conditions or any other applicable terms
                and conditions incurred by Ibiza Token shall be borne by the
                User who caused the breach. This includes any third party claims
                arising from such breaches.
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                8. Modifications
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                These Terms and Conditions may be modified and/or updated at any
                time without prior notice. The modifications made will come into
                force as soon as they are published on the Website, regardless
                of the means and form used for this purpose. The modification
                will only affect Users who have accepted them after such
                modification.
              </p>
              <br />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                9. Other issues
              </p>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "#fff",
                }}
              >
                9.1. Safeguarding and Interpretation If the Competent Authority
                declares any of these provisions to be illegal, invalid or
                unenforceable, this will mean that the same must be interpreted
                in the manner closest to the original intent of such provision.
                In any case, such declaration with respect to one or more
                clauses shall not prejudice the validity of the remaining
                clauses. The non-requirement by the Holder of strict compliance
                with any of the terms of these Conditions, does not constitute
                and shall not be construed in any case as a waiver by the Holder
                to require it in the future. 9.2. Language The language
                applicable to these Terms is Spanish. If versions are provided
                in other languages such as English, it will be only as a
                courtesy and for the convenience of the User. In case of
                contradiction, the Spanish version shall prevail. 9.3.
                Legislation and Jurisdiction The relationship between the Holder
                and the User shall be governed by Spanish law and any
                discrepancies or disputes regarding these Conditions, will
                depend on whether the user holds the status of consumer and / or
                user in accordance with applicable law. Being a consumer and/or
                user disputes shall be submitted to the Courts and Tribunals of
                the User's domicile. In case of not having such condition, the
                conflicts will be determined in the Courts and Tribunals of
                Ibiza. This privacy policy page was created at Ibiza Token
              </p>
            </Box>
            <br />
          </Grid>
        </div>
      </WelcomeScreen>
    </div>
  );
};

export default Contactus;
