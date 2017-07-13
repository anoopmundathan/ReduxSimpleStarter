import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/App';

// Use 'describe' to group together similar tests
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    
    const component = renderComponent(App);
    // Use 'expect' to make an 'assertion' about target
    expect(component).to.contain('React simple starter');

  });

});