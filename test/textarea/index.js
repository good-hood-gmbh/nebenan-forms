const { createElement } = require('react');
const { assert } = require('chai');
const { mount } = require('enzyme');

const Textarea = require('../../lib/textarea').default;


describe('<Textarea />', () => {
  it('renders Textarea', () => {
    const wrapper = mount(createElement(Textarea));

    assert.equal(wrapper.find('textarea').length, 1, 'Textarea was rendered');
    assert.equal(wrapper.instance().state.value, '', 'default value is empta string');

    wrapper.unmount();
  });
});

describe('Textarea', () => {
  it('setValue', () => {
    const wrapper = mount(createElement(Textarea));

    assert.equal(wrapper.instance().state.value, '', 'set empty string if no value');

    wrapper.instance().setValue('new text');
    assert.equal(wrapper.instance().state.value, 'new text', 'set empty string if no value');

    wrapper.unmount();
  });
});
