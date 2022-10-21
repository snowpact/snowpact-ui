import type { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { Button, ButtonGroup } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <ButtonGroup>
          <Button color="primary">Profile</Button>
          <Button color="primary">Settings</Button>
          <Button color="primary">Messages</Button>
        </ButtonGroup>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <ButtonGroup>
          <Button color="primary">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="primary">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="primary">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
          </Button>
        </ButtonGroup>
      ),
    },
    {
      title: 'All colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup>
            <Button color="info">Profile</Button>
            <Button color="info">Settings</Button>
            <Button color="info">Messages</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="primary">Profile</Button>
            <Button color="secondary">Settings</Button>
            <Button color="tertiary">Messages</Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
