import { shallow } from 'enzyme'
import { Companies } from './Companies'

describe('<Companies />', () => {
  const companies = [
    { id: 1, name: 'Dummy company' },
    { id: 2, name: 'Smarty company' },
  ]
  const singleCompany = [ {name:'first company'}]

  it('renders list of company links', () => {
    expect(shallow(<Companies companies={companies} singleCompany={singleCompany} />)).toMatchSnapshot()
  })
})
