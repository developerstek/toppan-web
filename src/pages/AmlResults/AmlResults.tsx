import type React from "react";
import {
  ChartIconSVG,
  DocumentIconSVG,
  RiskCompSvg,
  SessionInfoSvg,
  TaskIconSVG,
} from "../../utilities/svg";
import InfoRow from "../../components/InfoRow/InfoRow";
import { PEPRiskClassificationData } from "../../utilities/data";
import RiskScoreComponent from "../../components/RiskScoreComponent/RiskScoreComponent";
import { Col, Row } from "antd";
import InfoRowInline from "../../components/InfoRowInline/InfoRowInline";

const AmlResults: React.FC = () => {
  return (
    <div className="main_div_user_information">
      <div className="inner_div_user_information">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <SessionInfoSvg />
          </div>
          <h2>Overall AML status</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content bottom-border">
              <InfoRow label="Clear" value="No Match" />
              <InfoRow label="Review Needed" value="Match" />
              <InfoRow label="High Risk" value="Match" />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <RiskCompSvg />
          </div>
          <h2>PEP risk classification</h2>
        </div>
        <div className="card_div_user_information">
          <Row gutter={[16, 16]}>
            {PEPRiskClassificationData?.map((item, index) => (
              <Col lg={6} md={24}>
                <RiskScoreComponent key={index} Data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <SessionInfoSvg />
          </div>
          <h2>Verifications</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content bottom-border">
              <InfoRow label="Sanctions" value="Match" />
              <InfoRow label="SIP" value="Match" />
              <InfoRow label="RCA" value="Match" />
              <InfoRow label="PEP" value="Match" />
              <InfoRow label="PEP" value="Match" />
              <InfoRow label="PEP" value="Match" />
              <InfoRow label="PEP" value="Review Needed" />
              <InfoRow label="PEP level 1" value="No Match" />
              <InfoRow label="PEP level 2" value="No Match" />
              <InfoRow label="PEP level 3" value="No Match" />
              <InfoRow label="PEP level 4" value="No Match" />
              <InfoRow
                label="Warnings and regulatory enforcement"
                value="No Match"
              />
              <InfoRow label="SIE" value="No Match" />
              <InfoRow label="Insolvency" value="No Match" />
              <InfoRow label="Fitness and probity" value="No Match" />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <DocumentIconSVG />
          </div>
          <h2>AML results</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content mid-border">
            <div className="inner_session_info_content">
              <InfoRow label="Party" value="Republican party" />
              <InfoRow label="Alias" value="Donald J. TRUMP" />
              <InfoRow label="Alma mater" value="University of pennsylvania" />
              <InfoRow label="Awards" value="-" />
              <InfoRow
                label="Born"
                value="June 14, 1946 queens , new york city, U.S."
              />
              <InfoRow label="Category" value="PEP" />
              <InfoRow
                label="Children"
                value="Donald jr, ivanka eric tiffany barron"
              />
              <InfoRow label="Citizenship" value="US" />
              <InfoRow label="Country" value="United states" />
              <InfoRow label="Date of birth" value="14/06/1946" />
              <InfoRow
                label="Religion"
                value="Presbyterianism, Nondenominational christianity"
              />
              <InfoRow
                label="Residence"
                value="Mar-a-Lago, Palm Beach, Florida"
              />
              <InfoRow
                label="Spouses"
                value="Ivana zelnícková, Marla maples, Melania knauss"
              />
              <InfoRow
                label="Occupation"
                value="Politician, Politician businessman media personality"
              />
              <InfoRow
                label="Organizations founded"
                value="Save america, Trump winery"
              />
              <InfoRow
                label="Other political affiliations"
                value="Reform democratic independent"
              />
              <InfoRow label="Parents" value="Fred trump, Mary anne macleod" />
              <InfoRow
                label="Place of birth"
                value="Queens united states, Jamaica hospital medical center, New york city"
              />
              <InfoRow label="Political party" value="Republican" />
              <InfoRow
                label="Position"
                value="Chief executive officer (1971-) President, President-elect of the united states (2016-2017), President of the united states (2017-2021), director (2015), Former U.S. president"
              />
              <InfoRow label="Relatives" value="Family of donald trump" />
            </div>
            <div className="inner_session_info_content">
              <InfoRow
                label="Education"
                value="The wharton school (1966-1968), Bachelor of science (1968), University of pennsylvania, new york military academy (1959-1964), The kew-forest school (-1964), Fordham university (1964-1966)"
              />
              <InfoRow label="Entity type" value="Person" />
              <InfoRow label="Ethnicity" value="White Americans" />
              <InfoRow label="First name" value="John" />
              <InfoRow label="Gender" value="Male" />
              <InfoRow label="Image Url" value="-" />
              <InfoRow label="Last name" value="Trump" />
              <InfoRow label="Name" value="Donald trump" />
              <InfoRow label="Net worth" value="2.6 billion USD (2024)" />
              <InfoRow
                label="Notes"
                value="President of the united states (2017—2021, 2025—present)"
              />
              <InfoRow
                label="Religion"
                value="Presbyterianism, Nondenominational christianity"
              />
              <InfoRow
                label="Residence"
                value="Mar-a-Lago, Palm Beach, Florida"
              />
              <InfoRow
                label="Spouses"
                value="Ivana zelnícková, Marla maples, Melania knauss"
              />
              <InfoRow label="Succeeded By" value="Joe biden" />
              <InfoRow label="Title" value="His excellency" />
              <InfoRow label="Vice President" value="Mike pence" />
              <InfoRow label="Website" value="-" />
              <InfoRow
                label="Position occupancies"
                value="President of the united states of america, President, President of the United States, President of the united states, President of the united states, President of the united states"
              />
              <InfoRow label="Preceded by" value="Barack obama" />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <TaskIconSVG />
          </div>
          <h2>Other details</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content mid-border">
            <div className="inner_session_info_content">
              <InfoRow label="Country" value="Iran" />
              <InfoRow label="Sanction source" value="-" />
            </div>
            <div className="inner_session_info_content">
              <InfoRow label="Sanction type" value="Sanction" />
              <InfoRow
                label="Sanctioning authority"
                value="Iran ministry of foreign affairs"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <ChartIconSVG />
          </div>
          <h2>Adverse media findings</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content">
              <InfoRowInline label="Source" value="Reuters, BBC, Local News" />
              <InfoRowInline label="Date" value="12 March 2024" />
              <InfoRowInline
                label="Summary"
                value="User’s name appears in a fraud-related news article."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <TaskIconSVG />
          </div>
          <h2>Recommended actions</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content">
            <div className="inner_session_info_content bottom-border">
              <InfoRow label="No risk detected" value="Approved" />
              <InfoRow label="Enhanced due diligence (EDD)" value="Requires more checks" />
              <InfoRow label="High risk, strong AML match found" value="Rejected" />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_div_user_information cumulative_risk_score">
        <div className="header_div_user_information">
          <div className="header_icon_div">
            <DocumentIconSVG />
          </div>
          <h2>AML results</h2>
        </div>
        <div className="card_div_user_information">
          <div className="session_info_content mid-border">
            <div className="inner_session_info_content">
              <InfoRow label="User ID" value="123456" />
              <InfoRow label="AML Status" value="Review Needed" />
              <InfoRow label="Risk Score" value="Medium" />
              <InfoRow label="Adverse media check" value="Match" />
              <InfoRow
                label="Adverse media source"
                value="Reuters"
              />
              <InfoRow label="Adverse media date" value="12/03/2024" />
              <InfoRow
                label="Law enforcement check"
                value="No Match"
              />
              <InfoRow label="Additional notes" value="Potential PEP match, verify with manual review" />
            </div>
            <div className="inner_session_info_content">
              <InfoRow
                label="Sanctions check"
                value="No Match"
              />
              <InfoRow label="PEP (Politically Exposed Person) Check" value="Match" />
              <InfoRow label="PEP Details" value="Name: John Doe Position: Deputy Minister Country: Example land" />
              <InfoRow label="Adverse media headline" value="Deputy Minister linked to fraud investigation" />
              <InfoRow label="Adverse media URL" value="Reuters article" />
              <InfoRow label="Recommended Action" value="Enhanced due diligence" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmlResults;
