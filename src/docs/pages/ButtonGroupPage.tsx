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
          <Button color="gray">Profile</Button>
          <Button color="gray">Settings</Button>
          <Button color="gray">Messages</Button>
        </ButtonGroup>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <ButtonGroup>
          <Button color="gray">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="gray">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="gray">
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
            <Button gradientMonochrome="info">Profile</Button>
            <Button gradientMonochrome="info">Settings</Button>
            <Button gradientMonochrome="info">Messages</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button gradientDuoTone="greenToBlue">Profile</Button>
            <Button gradientDuoTone="greenToBlue">Settings</Button>
            <Button gradientDuoTone="greenToBlue">Messages</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup outline>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </ButtonGroup>
          <ButtonGroup outline>
            <Button gradientMonochrome="info">Profile</Button>
            <Button gradientMonochrome="info">Settings</Button>
            <Button gradientMonochrome="info">Messages</Button>
          </ButtonGroup>
          <ButtonGroup outline>
            <Button gradientDuoTone="cyanToBlue">Profile</Button>
            <Button gradientDuoTone="cyanToBlue">Settings</Button>
            <Button gradientDuoTone="cyanToBlue">Messages</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      title: 'Outline with icons',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup outline>
            <Button color="gray">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="gray">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="gray">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </ButtonGroup>
          <ButtonGroup outline>
            <Button gradientMonochrome="info">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button gradientMonochrome="info">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button gradientMonochrome="info">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </ButtonGroup>
          <ButtonGroup outline>
            <Button gradientDuoTone="cyanToBlue">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button gradientDuoTone="cyanToBlue">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button gradientDuoTone="cyanToBlue">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
