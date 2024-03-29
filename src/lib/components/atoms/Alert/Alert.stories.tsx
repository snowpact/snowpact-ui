import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiEye } from 'react-icons/hi';
import { Alert } from '.';
import type { AlertProps } from './Alert';

export default {
  title: 'Components/atoms/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (props) => <Alert {...props} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.storyName = 'Default';
DefaultAlert.args = {
  onDismiss: false,
  title:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima rerum veritatis optio atque impedit, enim quisquam, excepturi consectetur quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.'
};

export const AlertWithIcons = Template.bind({});
AlertWithIcons.storyName = 'With icons';
AlertWithIcons.args = {
  onDismiss: false,
  title:
    'More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'
};

export const AlertDismissible = Template.bind({});
AlertDismissible.storyName = 'Dismissible';
AlertDismissible.args = {
  color: 'success',
  onDismiss: () => alert('Alert dismissed!'),
  title: 'Info alert! Change a few things up and try submitting again.'
};

export const AlertWithBorderAccent = Template.bind({});
AlertWithBorderAccent.storyName = 'Border accent';
AlertWithBorderAccent.args = {
  color: 'warning',
  onDismiss: false,
  title: 'Info alert! Change a few things up and try submitting again.'
};

export const AlertWithAdditionalContent = Template.bind({});
AlertWithAdditionalContent.storyName = 'Additional content';
AlertWithAdditionalContent.args = {
  color: 'info',
  onDismiss: false,
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-blue-700">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="focus:ring-blue-300:bg-blue-900 mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="focus:ring-blue-300:text-white rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4"
        >
          Dismiss
        </button>
      </div>
    </>
  ),
  title: 'This is a info alert'
};

export const AlertWithAllOptions = Template.bind({});
AlertWithAllOptions.storyName = 'All options';
AlertWithAllOptions.args = {
  color: 'success',
  onDismiss: () => alert('Alert dismissed!'),
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-green-700">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="focus:ring-green-300:bg-green-900 mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="focus:ring-green-300:text-white rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4"
        >
          Dismiss
        </button>
      </div>
    </>
  ),
  title: 'Info alert! Change a few things up and try submitting again.'
};
