import { html, TemplateResult } from 'lit';
import '../src/open-wc-lit.js';

export default {
  title: 'OpenWcLit',
  component: 'open-wc-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <open-wc-lit style="--open-wc-lit-background-color: ${backgroundColor}" .title=${title}></open-wc-lit>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
