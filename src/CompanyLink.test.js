import { shallow } from "enzyme";
import CompanyLink from "./CompanyLink";

describe("<CompanyLink />", () => {
  const singleCompany = [{ name: "first company" }];
  it("renders link", () => {
    expect(
      shallow(
        <CompanyLink
          id={1}
          name="Dummy company"
          singleCompany={singleCompany}
        />
      )
    ).toMatchSnapshot();
  });
});
